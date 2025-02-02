const db = require('../models');
const Users = db.users;
const Channels = db.channels;
const ChatMessages = db.chat_messages;
const VideoCategories = db.video_categories;
const VideosTags = db.video_tags;
const VideosComments = db.video_comments;
const Tags = db.tags;
const PrivacyTypes = db.privacy_types;
const UsersVideos = db.users_videos;
const UsersComments = db.users_comments;
const PlaylistsVideos = db.playlists_videos;
const UsersTags = db.users_tags;
const { CLIPZ_DURATION } = require('../constants/index');
const usersController = require('../controllers/usersController');


const to = require('../helpers/getPromiseResult');
const showIfErrors = require('../helpers/showIfErrors');
const nl2br = require('../helpers/nl2br');
const getFullName = require('../helpers/getFullNameCol');

const Videos = db.videos;
const Playlists = db.playlists;
const VideoChatMessages = require('../mongoose/video_chat_messages');

const sequelize = require('sequelize');
const Op = sequelize.Op;

const fse = require('fs-extra');
const path = require('path');
const moment = require('moment');
const m = require('../helpers/multer');
const { castDurationToMiliseconds } = require('../helpers/index');
const { SORTING_VALUE, SORTING_KEYS } = require('../constants/index')


const VIDEO_TYPES = {
    clipz: 'clipz',
    videos: 'videos'
}

const VIDEO_FILTER_OPTIONS = {
    trending: 'trending',
    latest: 'latest'
}

exports.castSortingModel = (key, value) => {
    if (!key) key = SORTING_KEYS.createdAt
    if (!value) value = SORTING_VALUE.desc

    return [[key, value]]
}

exports.getVideosList = async (req, res) => {
    let { limit, page, sort, tag } = req.body
    if (!limit) limit = 10
    if (!page) page = 1
    if (!sort || !sort.key || !sort.value) sort = { key: null, value: null }

    const sorting = this.castSortingModel(sort.key, sort.value)
    let whereTag = tag ? { name: tag } : {}

    const filter = {
        include: [
            {
                model: Users, as: 'user', include: [
                    { model: Channels, as: 'channel' }
                ]
            },
            {
                model: Channels,
                as: 'channel',
            },
            {
                model: Tags,
                as: 'tags',
                where: whereTag,
                required: !!tag
            },
            {
                model: VideoCategories,
                as: 'category'
            }
        ],
        order: sorting,
        limit,
        offset: (page - 1) * limit
    }

    const [list, count] = await Promise.all([
        Videos.findAll(filter),
        Videos.count(filter)
    ])
    return res.send({ message: 'data', data: { list, count } })
}

exports.VIDEO_TYPES = VIDEO_TYPES;

exports.getVideos = async (req, res) => {
    let data = req.query;
    let { withPlaylists, trending, limit, tag, user_id } = data;
    let ret = {};
    let limitOption = limit ? { limit: +limit } : {};
    let trendingOption = +trending ? [['views', 'DESC']] : [['created_at', 'DESC']];
    let filters = data.filters ? JSON.parse(data.filters) : {};
    let whereFilters = this.getVideoFiltersQuery(filters);
    let whereTag = tag ? { name: tag } : {};
    let wherePrivacy = user_id ? {} : { name: 'Public' };
    let whereCategory = filters.category && filters.category.name !== 'All'
        ? sequelize.where(sequelize.col('`category`.`name`'), filters.category.name)
        : {};
    console.log('get videos!!!')
    let v = await Videos.findAll({
        include: [
            {
                model: Users, as: 'user', include: [
                    { model: Channels, as: 'channel' }
                ]
            },
            {
                model: Channels,
                as: 'channel',
            },
            {
                model: Users, as: 'users_vids', attributes: ['username']
            },
            {
                model: Tags,
                as: 'tags',
                where: whereTag,
                required: !!tag
            },
            // @todo this part was breaking when loading live videos, please check
            //  {model: PrivacyTypes, as: 'privacy', where: wherePrivacy},
            {
                model: VideoCategories,
                as: 'category',
                where: whereCategory
            }
            //
        ],
        order: trendingOption,
        where: whereFilters,
        limitOption
    });
    // console.log('VIDEOS!!!!!', v)
    ret['videos'] = v;
    // whereFilters = this.getVideoFiltersQuery(filters, '`videos->category`.`name`');
    // console.log(filters, whereFilters)
    if (+withPlaylists) {
        let whereCategory = filters.category ? sequelize.where(sequelize.col('`videos->category`.`name`'), filters.category.name) : {};
        let p = await Playlists.findAll({
            include: [
                {
                    model: Videos, as: 'videos', where: whereFilters, include: [
                        {
                            model: VideoCategories,
                            as: 'category',
                            where: whereCategory
                        }
                    ]
                }
            ]
        });
        ret['playlists'] = p;
    }
    res.json(ret);
};


exports.getVideoFiltersQuery = (filters, categoryCol = '`category.name`') => {
    let whereFilters = {};
    for (let group in filters) {
        if (group === 'date') {
            let filterValue = filters[group].value;

            console.log(filterValue)
            console.log(moment(filterValue).utc().format('YYYY-MM-DD HH:mm:ss'))
            whereFilters['`created_at`'] = {
                [Op.between]: [
                    moment(filterValue).utc().format('YYYY-MM-DD HH:mm:ss'),
                    moment().utc().format('YYYY-MM-DD HH:mm:ss')
                ]
            };

        } else if (group === 'duration') {
            let filterValue = filters[group].value;
            let minDuration = '00:00';
            let middleDuration = '00:30';
            let maxDuration = '59:59';
            whereFilters['`duration`'] = {
                [Op.between]: (filterValue === 'short' ? [minDuration, middleDuration] : [middleDuration, maxDuration])
            }
        }
    }

    if (filters.video_type && filters.video_type === VIDEO_TYPES.clipz) {
        whereFilters.duration_miliseconds = { [Op.lte]: CLIPZ_DURATION };
    };

    if (filters.video_type && filters.video_type === VIDEO_TYPES.videos) {
        whereFilters.duration_miliseconds = { [Op.gte]: CLIPZ_DURATION };
    }

    return whereFilters;
};

exports.saveVideoToken = async (req, res) => {
    console.log('------------ video token ---------- ');
    const data = req.body;
    console.log(data);
    const { token, name } = data;

    let v = await Videos.findOne({ where: { token: token } });

    if (!v) {
        let video = await Videos.create(data);
        data.tags.map(async (t) => {
            let found = await Tags.findOne({ where: { name: t.name } });

            if (!found) {
                let tag = await Tags.create({ name: t.name });
                await VideosTags.create({ tag_id: tag.id, video_id: video.id }, { fields: ['tag_id', 'video_id'] });
            } else {
                await VideosTags.create({ tag_id: found.id, video_id: video.id }, { fields: ['tag_id', 'video_id'] });
            }
        });
        res.json(video);
    } else {
        res.json('OK');
    }
};

exports.updateParticipantsCount = async (req, res) => {
    let { video_id, participants } = req.body;
    await Videos.update({ participants }, { where: { id: video_id } });
    res.json('OK');
}

exports.saveVideoData = async (req, res) => {
    console.log('------------ video data ---------- ');
    // let videoSettings = data.video_settings;
    // console.log('------------ video settings ---------- ');
    // console.log(videoSettings)


    uploadVideoStreamFile(req, res, async (err) => {
        const data = req.body;
        console.log(data);
        let videoSettings = JSON.parse(data.video_settings);

        console.log('callback')
        if (err) {
            console.error(err);
        }
        let privacy_id = await PrivacyTypes.findOne({ where: { name: videoSettings.privacy }, attributes: ['id'] });

        console.log(privacy_id.dataValues)
        let duration_miliseconds = castDurationToMiliseconds(data.video_duration).decoded;

        let d = {
            name: videoSettings.name,
            description: videoSettings.description,
            thumbnail: videoSettings.thumbnail,
            category_id: videoSettings.category_id,
            privacy_id: privacy_id.dataValues.id,
            author: data.full_name,
            avatar: data.avatar,
            filename: data.video_name,
            duration: data.video_duration,
            duration_miliseconds,
            status: 'recorded',
        };

        const channel = await Channels.findOne({ user_id: data.author_id })

        let video = await Videos.findOne({ where: { status: 'live', author_id: data.author_id } });
        console.log('video id')
        console.log(video)

        if (!video) {
            d.author_id = data.author_id
            d.channel_id = channel.id || channel.dataValues.id
            video = await Videos.create(d)
        }
        console.log(video, '--------------------');
        let userVideo = await UsersVideos.create({
            // where: {
            user_id: data.author_id,
            video_id: video?.dataValues?.id
            // }
        });
        await Videos.update(d, { where: { status: 'live', author_id: data.author_id } });

        res.json('OK');
    })

};

exports.saveVideoThumbnail = async (req, res) => {
    const data = req.body;
    const file = req.file;
    // console.log('files!!!')
    // console.log(req.file)
    uploadVideoThumbFile(req, res, async (err) => {
        res.json(file.filename)
    });
};

exports.getCategories = async (req, res) => {
    let data = req.query;
    console.log('get categories!!!')
    let whereAll = data.all ? {} : {
        where: {
            [Op.not]:
            {
                name: 'All'
            }
        }
    };

    let vc = await VideoCategories.findAll(whereAll);
    res.json(vc);
};

exports.getUserVideos = async (req, res) => {
    console.log(req.query)
    let data = req.query;
    let { user_id, search } = data;
    // let v = await Videos.findAll({author_id: req.query.user_id});
    let where = search ? sequelize.where(sequelize.col('`videos.name`'), 'like', '%' + search + '%') : {};
    let filters = data.filters ? JSON.parse(data.filters) : {};
    let whereFilters = this.getVideoFiltersQuery(filters);
    let whereCategory = filters.category && filters.category.name !== 'All'
        ? sequelize.where(sequelize.col('`videos->category`.`name`'), filters.category.name)
        : {};
    // let wherePrivacy = user_id ? {}:  {name: 'Public'};

    let v = await Users.findOne({
        include: [{
            model: Videos, as: 'videos',
            where: [where, whereFilters],
            include: [
                { model: Channels, as: 'channel' },
                { model: Playlists, as: 'playlists', attributes: ['id'] },
                { model: Users, as: 'user' },
                { model: Tags, as: 'tags' },
                {
                    model: VideoCategories,
                    as: 'category',
                    where: whereCategory
                }
                // {model: PrivacyTypes, as: 'privacy'}
            ]
        }, { model: Channels, as: 'channel' }],
        where: {
            id: user_id
        },
        order: [[sequelize.col(`videos.created_at`), 'desc']]
    });

    res.json(v);
};

exports.getUserSavedVideos = async (req, res) => {
    console.log(req.query)
    let userWhere = { id: req.query.user_id };
    let v = await Users.findOne({
        where: userWhere,
        include: [
            {
                model: Videos,
                as: 'users_vids',
                where: [sequelize.where(sequelize.col('`users_vids->users_videos`.`saved`'), 1)],
                include: [
                    { model: Channels, as: 'channel' },
                    { model: Users, as: 'user' },
                    { model: Tags, as: 'tags' }
                ]
            }
        ],

    });
    res.json(v);
};

exports.getVideoById = async (req, res) => {
    let { id, playlist_id } = req.query;
    let idWhere = { id: id };
    // let playlistWhere = playlist_id ? sequelize.where(sequelize.col(`playlists->playlists_videos.playlist_id`), playlist_id) : {};
    console.log('get video by id!!!')
    let v = await Videos.findOne({
        // where: idWhere,
        where: [idWhere],
        // where: [idWhere, sequelize.where(sequelize.col(`users_vids->users_videos.user_id`), user_id)],
        include: [
            {
                model: Channels, as: 'channel', attributes: ['id', 'subscribers_count', 'name', 'avatar']
            },
            {
                model: Tags,
                as: 'tags',
                // required: false
            },
            {
                model: Users,
                as: 'users_vids',
                attributes: ['id', getFullName(), 'username'],
                // where: {id: user_id},
                // where: sequelize.where(sequelize.col(`users_vids->users_videos.user_id`), user_id),
                through: { attributes: ['liked', 'disliked', 'saved', 'viewed'] }
            },
            { model: Playlists, as: 'playlists', attributes: ['id'] } //where: playlistWhere
        ],
        attributes: ['id', 'author_id', 'likes', 'thumbnail', 'duration', 'name', 'dislikes', 'views', 'filename', 'status', 'created_at']
    });

    let messages = await VideoChatMessages.find({
        video_id: id
    }).sort({ 'created_at': 1 });

    let ret = { ...v?.toJSON(), ...{ messages } };

    // v.messages = messages
    console.log('video messages!!!', ret)

    res.json(ret);
};

exports.getVideosByAuthor = async (req, res) => {
    let data = req.query;
    let search = data.search;
    let filters = data.filters ? JSON.parse(data.filters) : {};
    let whereFilters = this.getVideoFiltersQuery(filters);
    let whereSearch = search ? sequelize.where(sequelize.col('`videos`.`name`'), 'like', '%' + search + '%') : {};
    let v = await Users.findAll(
        {
            include: [
                { model: Videos, as: 'videos', where: whereFilters },
                { model: Channels, as: 'channel', attributes: ['id', 'avatar', 'name'] }
            ],
            order: [[sequelize.col(`videos.created_at`), 'desc']],
            where: whereSearch
        });
    res.json(v);
};

exports.searchInAllVideos = async (req, res) => {
    let { search } = req.query;
    let v = await Videos.findAll({
        where: sequelize.where(sequelize.col('`videos.name`'), 'like', '%' + search + '%'),
        include: [
            { model: Channels, as: 'channel' },
            { model: Playlists, as: 'playlists', attributes: ['id'] },
            { model: Users, as: 'user' },
            { model: Tags, as: 'tags' }
        ]
    });
    res.json(v);
};


exports.updateLikes = async (req, res) => {
    let data = req.body;
    const { user_id, video_id, likes, dislikes, liked, disliked, likeStatus } = data;


    let found = await UsersVideos.findOne({
        where: {
            user_id: user_id,
            video_id: video_id
        }
    });

    if (!found) {
        await UsersVideos.create({
            ...data,
            disliked: disliked,
            liked: liked
        });

    } else {
        await UsersVideos.update({ disliked: disliked, liked: liked }, {
            where: {
                user_id: user_id,
                video_id: video_id
            }
        });
    }
    await Videos.update({ dislikes: dislikes, likes: likes }, { where: { id: video_id } });
    res.json('OK');
};


exports.updateViews = async (req, res) => {
    let data = req.body;
    const { user_id, video_id } = data;

    let found = await UsersVideos.findOne({
        where: {
            user_id: user_id,
            video_id: video_id
        }
    });

    if (!found) {
        await UsersVideos.create({ ...data, viewed: 1 });
    } else {
        await UsersVideos.update({ viewed: 1 }, {
            where: {
                user_id: user_id,
                video_id: video_id
            }
        });
    }

    await Videos.increment({ views: 1 }, { where: { id: video_id } });
    req.query.id = video_id;
    this.getVideoById(req, res);
};


exports.saveVideo = async (req, res) => {

    let data = req.body;
    const { user_id, video_id, saved } = data;
    console.log(data)

    let found = await UsersVideos.findOne({
        where: {
            user_id: user_id,
            video_id: video_id
        }
    });

    let ret;
    if (!found) {
        ret = await UsersVideos.create(data);

    } else {
        console.log('update')
        found.saved = saved;
        console.log(found)
        ret = await found.save();
        // await UsersVideos.update({saved: saved}, {
        //     where: {
        //         user_id: user_id,
        //         video_id: video_id
        //     }
        // });
    }
    res.json(ret);
};


exports.removeVideo = async (req, res) => {
    let data = req.query;
    let { id, token, filename } = data;
    if (!filename && !filename.length) filename = 'file_file';
    console.log('remove video!!!')
    console.log(req.query)

    let file = path.join(path.join(__dirname, '../public/uploads/videos/') + filename);
    let removeResult;
    if (await fse.exists(file)) {
        removeResult = await to(fse.remove(file));
    }
    if (!removeResult) {
        if (id) {
            await to(PlaylistsVideos.destroy({ where: { video_id: id } }));
            await to(UsersVideos.destroy({ where: { video_id: id } }));
            await to(Videos.destroy({ where: { id: id } }));
            // await to(ChatMessages.destroy({where: {video_id: id}}));
            await to(VideosComments.destroy({ where: { video_id: id } }))
            if (data.bigFileDetected) {
                res.status(423).json({ msg: 'File size exceeds maximum size of 3Mb' })
            } else {
                await usersController.getUserInfo(req, res);
            }
            // removing live video by token
        } else if (token) {
            let v = await to(Videos.findOne({ where: { token: token, status: 'live' } }));
            // await to(ChatMessages.destroy({where: {video_id: v.id}}));
            await to(UsersVideos.destroy({ where: { video_id: v?.id } }));
            await to(Videos.destroy({ where: { token: token, status: 'live' } }));
            res.json('removed live video');
        }
    }

};


exports.removeVideoThumbnail = async (req, res) => {

};

exports.saveVideoDetails = async (req, res) => {
    if (!showIfErrors(req, res)) {
        let data = req.body;


        uploadVideoThumbFile(req, res, async (err) => {

            await Videos.update({ name: data.name, thumbnail: data.thumbnail }, { where: { id: data.video_id } });
            await VideosTags.destroy({ where: { video_id: data.video_id } });
            let result = JSON.parse(data.tags).map(async (t) => {

                let found = await Tags.findOne({ where: { name: t.name } });
                console.log(!found)

                if (!found) {
                    let tag = await Tags.create({ name: t.name });
                    await VideosTags.create({
                        tag_id: tag.id,
                        video_id: data.video_id
                    }, { fields: ['tag_id', 'video_id'] });
                } else {
                    await VideosTags.create({
                        tag_id: found.id,
                        video_id: data.video_id
                    }, { fields: ['tag_id', 'video_id'] });
                }

            });
            await Promise.all(result);
            req.query.id = data.video_id;
            this.getVideoById(req, res);
        })


    }
};


exports.updateUserTags = async (req, res) => {
    let data = req.body;
    console.log('increment!!!!')
    let { user_id, video_id, tags } = data;
    let results = tags.map(async (t) => {
        let foundTag = await UsersTags.findOne({
            where: { user_id: user_id, tag_id: t.id }
        });
        if (!foundTag) {
            await UsersTags.create({ user_id: user_id, tag_id: t.id });
        } else {
            console.log('increment!!!!')
            await UsersTags.increment('popularity', { where: { user_id: user_id, tag_id: t.id } });
        }
    });

    await Promise.all(results);

    res.json('OK')
};

exports.getVideoTags = async (req, res) => {
    let videoTags = await UsersTags.findAll({
        include: [
            {
                model: Users,
                as: 'user_details',
                attributes: ['first_name', 'last_name']
            },
            {
                model: Tags,
                as: 'tag_details',
            }
        ],
        order: [['popularity', 'desc']],
        attributes: ['id', 'tag_id', 'popularity']
    });


    let ret = [{ name: 'Most used', values: [] }, { name: 'Trending', values: [] }, { name: 'Previously used', values: [] }];

    videoTags.map((vt, index) => {
        if (index < 5) {
            ret.find(r => r.name === 'Most used')['values'].push(vt)
        } else if (vt.popularity > 10) {
            ret.find(r => r.name === 'Trending')['values'].push(vt)
        } else {
            ret.find(r => r.name === 'Previously used')['values'].push(vt)
        }
    });

    res.json(ret);
}

exports.getUserTags = async (req, res) => {
    console.log('get user tags!!!')
    let data = req.query;
    let { user_id } = data;
    // console.log(data)
    let userTags = await UsersTags.findAll({
        where: { user_id: user_id },
        order: [['popularity', 'desc']],
        include: [{
            model: Tags, as: 'tag_details',
            include: [{ model: Videos, as: 'tags_videos', attributes: ['id'] }]
        }]
    }).filter(ut => ut.tag_details.tags_videos.length !== 0);
    res.json(userTags);
};

exports.updatePrivacy = async (req, res) => {
    let data = req.body;
    let { privacy, video_id } = data;
    let foundPrivacy = await PrivacyTypes.findOne({ where: { name: privacy } });
    let v = await Videos.update({ privacy_id: foundPrivacy.id }, { where: { id: data.video_id } });
    res.json(foundPrivacy);
};

exports.updatePrivacyStatus = async (req, res) => {
    let data = req.body;
    let { privacy, video_id } = data;
    let v = await Videos.update({ privacy_id: privacy }, { where: { id: video_id } });
    res.json({ message: 'ok', data: privacy });
};


exports.addCommentForVideo = async (req, res) => {
    let data = req.body;
    data.comment = nl2br(data.comment, false);
    console.log(data.comment)
    await to(VideosComments.create(data));
    req.query.video_id = req.body.video_id;
    this.getVideoComments(req, res);
};

exports.getVideoComments = async (req, res) => {
    let { video_id, from_id, comment_id } = req.query;
    // console.log(req.query)
    let where = { video_id: video_id, is_reply: 0 };
    if (from_id) {
        where.from_id = from_id;
    }
    if (comment_id) {

        where.id = comment_id;
    }
    console.log('get video comments!!!!')
    // console.log(where)
    let comments = await to(VideosComments.findAll({
        where: where,
        include: [
            {
                model: Users,
                as: 'user',
                attributes: ['id', 'first_name', 'last_name', 'username', 'avatar'],
                include: [
                    { model: Channels, as: 'channel', attributes: ['id', 'name', 'avatar'] }
                ]
            },

            {
                model: VideosComments, as: 'replies', where: { is_reply: 1 }, required: false, include: [
                    {
                        model: Users,
                        as: 'user',
                        attributes: ['id', 'first_name', 'last_name', 'username', 'avatar'],
                        include: [
                            { model: Channels, as: 'channel', attributes: ['id', 'name', 'avatar'] }
                        ]
                    },
                    {
                        model: Users,
                        as: 'reactors',
                        attributes: ['id', 'first_name', 'last_name', 'username'],
                        through: { attributes: ['liked', 'disliked'] },
                        required: false
                    },
                ]
            },
            {
                model: Users,
                as: 'reactors',
                attributes: ['id', 'first_name', 'last_name', 'username'],
                through: { attributes: ['liked', 'disliked'] },
                required: false
            },

        ],
        order: [['created_at', 'desc']]
    }));
    res.json(comments);
};

exports.updateVideoComment = async (req, res) => {
    let d = req.body;
    d.comment = nl2br(d.comment, false);
    console.log(d.comment)
    await VideosComments.update(d, { where: { id: d.id, from_id: d.from_id } });
    req.query.video_id = req.body.video_id;
    this.getVideoComments(req, res);
};

exports.removeVideoComment = async (req, res) => {
    let { id, user_id } = req.query;
    await to(VideosComments.destroy({ where: { id: id, from_id: user_id } }));
    this.getVideoComments(req, res);
};

exports.updateCommentLikes = async (req, res) => {
    let data = req.body;
    const { user_id, comment_id, likes, dislikes, liked, disliked } = data;
    let video_id = data.video_id;
    delete data.video_id;

    let found = await UsersComments.findOne({
        where: {
            user_id: user_id,
            comment_id: comment_id
        }
    });


    if (!found) {
        await UsersComments.create({
            ...data,
            disliked: disliked,
            liked: liked
        });

    } else {
        await UsersComments.update({ disliked: disliked, liked: liked }, {
            where: {
                user_id: user_id,
                comment_id: comment_id
            }
        });
    }
    await VideosComments.update({ dislikes: dislikes, likes: likes }, { where: { id: comment_id } });
    // req.query.comment_id = req.body.comment_id;
    req.query.video_id = video_id;
    this.getVideoComments(req, res);
    // res.json('OK');
};