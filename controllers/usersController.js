require('dotenv').config()
/* OPENVIDU CONFIGURATION */

const OpenVidu = require('openvidu-node-client').OpenVidu;
const OpenViduRole = require('openvidu-node-client').OpenViduRole;

// // Check launch arguments: must receive openvidu-server URL and the secret
// if (process.argv.length !== 4) {
//     console.log("Usage: node " + __filename + " OPENVIDU_URL OPENVIDU_SECRET");
//     process.exit(-1);
// }
// For demo purposes we ignore self-signed certificate
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// Environment variable: URL where our OpenVidu server is listening
let OPENVIDU_URL = 'https://metl.tv/'
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'staging') {
    OPENVIDU_URL = 'https://staging.metl.tv/';
} else if (process.env.NODE_ENV === 'production') {
    OPENVIDU_URL = 'https://metl.tv/'
}
// Environment variable: secret shared with our OpenVidu server
var OPENVIDU_SECRET = 'MY_SECRET';

// console.log(OPENVIDU_URL, OPENVIDU_SECRET);

// Entrypoint to OpenVidu Node Client SDK
var OV = new OpenVidu(OPENVIDU_URL, OPENVIDU_SECRET);

// Collection to pair session names with OpenVidu Session objects
var mapSessions = {};
// Collection to pair session names with tokens
var mapSessionNamesTokens = {};

/* CONFIGURATION */

const db = require('../models');
const Users = db.users;
const UsersCards = db.users_cards;
const Videos = db.videos;
const Tags = db.tags;
const Channels = db.channels;
const ChannelSubscribers = db.channel_subscribers;
const PrivacyTypes = db.privacy_types;
const StocksOrderType = db.stocks_ordering_types;
const UsersConnection = db.users_connection;
const UsersConnectionMembers = db.users_connection_members;
const UserConnectionNots = db.users_connection_notifications;
const notifications = db.notifications;


const SocketHandlerService = require('../services/socketHandlerService');

const url = require('url');

const jwt = require('jsonwebtoken');

const sequelize = require('sequelize');
const Op = sequelize.Op;

const bcrypt = require('bcryptjs');


const moment = require('moment');
const stripe = require('stripe')(process.env.STRIPE_TEST_PRIVATE_KEY);

const to = require('../helpers/getPromiseResult');
const getFullName = require('../helpers/getFullNameCol');

const usersConnectionNotifsController = require('./notifications/directChatNotificationsController');

const path = require('path');
const fsPromises = require('fs/promises');
const { NOTIFICATION_TYPES } = require('../constants');
const { getSubscribers } = require('./channelsController');
const { Sequelize } = require('../models');

exports.getSession = async (req, res) => {
    const {email, sessionName, role} = req.query;
    // console.log('OK')
    // console.log(req.query)
    // console.log('ROLE:' + role + '!!!!!')
    let user = await Users.findOne({
        where: {email: email}
    }, res);

    // The video-call to connect
    const tokenOptions = {
        data: JSON.stringify({serverData: {username: user.username}}),
    };
    // console.log(tokenOptions)
    // console.log(mapSessions)


    // console.log(tokenOptions)
    if (mapSessions[sessionName]) {
        // Session already exists
        console.log('Existing session ' + sessionName);

        // Get the existing Session from the collection
        var mySession = mapSessions[sessionName];

        tokenOptions.role = 'SUBSCRIBER';

        // Generate a new token asynchronously with the recently created tokenOptions
        mySession.generateToken(tokenOptions)
            .then(token => {

                // Store the new token in the collection of tokens
                mapSessionNamesTokens[sessionName].push(token);

                const urlParts = url.parse(token, true);
                
                console.log(token, 'token')

                res.status(200).json(token);
                // res.status(200).send({...urlParts.query, ...{href: urlParts.href}});
            })
            .catch(error => {
                console.log('token generation error')
                console.log(error.toString())
                res.status(500).json({msg: error.toString()})
            });
    } else {
        console.log("EXISTS" + role)
        if (role === 'SUBSCRIBER') {
            res.status(500).json({msg: 'Session doesn\'t exist'})
        }

        // New session
        console.log('New session ' + sessionName);


        // Create a new OpenVidu Session asynchronously
        OV.createSession()
            .then(session => {

                console.log('Session created!')

                // Store the new Session in the collection of Sessions
                mapSessions[sessionName] = session;
                // Store a new empty array in the collection of tokens
                mapSessionNamesTokens[sessionName] = [];

                tokenOptions.role = 'PUBLISHER';


                // Generate a new token asynchronously with the recently created tokenOptions
                session.generateToken(tokenOptions)
                    .then(token => {

                        console.log('Token generated!')

                        // Store the new token in the collection of tokens
                        mapSessionNamesTokens[sessionName].push(token);

                        const urlParts = url.parse(token, true);

                        res.status(200).json(token);

                        // res.status(200).send({...urlParts.query, ...{href: urlParts.href}});
                    })
                    .catch(error => {
                        console.log('token generation error')
                        if (!res.headersSent) {
                            res.status(500).json({msg: error.toString()})
                        }
                    });
            })
            .catch(error => {
                console.log('session creation error!!!')
                console.log(error)
                res.status(500).json(error)
            });
    }

};


exports.leaveSession = (req, res) => {
    console.log(req.query)
    const {role} = req.query;
    if (role === 'publisher') {
        delete mapSessions[req.query.sessionName];
        console.log(mapSessions)
    }
    console.log('Leaved session!!!!!')

    res.json('Leaved session');
};

exports.createSession = async (req, res) => {
    try {
        const user = req.decoded;
        const data = req.body;
    
        const session = await OV.createSession();
        session.creatorId = user.id;

        console.log('------ create session -----');
        console.log(session);
    
        const privacy = await PrivacyTypes.findOne({ where: {
            name: data.privacy,
        } });

        const channel = await Channels.findOne({
            where: {
                user_id: user.id,
            },
            include: {
                model: Users,
                as: 'subscribers',
            },
        });
    
        const videoData = {
            author_id: user.id,
            channel_id: channel.id,
            category_id: data.category_id,
            description: data.description,
            name: data.name,
            thumbnail: data.thumbnail,
            status: 'live',
            session_id: session.sessionId,
            privacy_id: privacy.id,
        }
    
        const video = await Videos.create(videoData);

        const token = await session.generateToken({
            role: 'PUBLISHER',
        })

        res.json({
            message: 'Session created',
            data: {
                video,
                token,
            }
        })

        try {
            const notificationBodies = {};
            
            const subscriberIds = channel.subscribers.map(subscriber => {
                const notificationDescription = {
                    user: subscriber,
                    value: `${user.username} is now on live`,
                }
                const notificationBody = {
                    user_id: subscriber.id,
                    type: NOTIFICATION_TYPES.liveStreamStarted,
                    seen: false,
                    description: JSON.stringify(notificationDescription),
                }
                notificationBodies[subscriber.id] = notificationBody;
                return subscriber.id;
            });
            const subscriberSocketDocs = await SocketHandlerService.getByUsers(subscriberIds);
           
            subscriberSocketDocs.forEach((socketDoc) => {
                const socket = io.sockets.sockets.get(socketDoc.socket);
                if (socket) {
                    socket.emit('pushNotification', JSON.stringify(notificationBodies[socketDoc.user_id]));
                }
            });

            // await notifications.bulkCreate(Object.values(notificationBodies));
        } catch(err) {
            console.error('An error occured with live stream notifications')
            console.error(err);
        }

        
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: 'Internal server error',
        })
    }
    
};

exports.closeSessionById = async (req, res) => {
    try {
        const user = req.decoded;
        const { id } = req.params;

        await OV.fetch();
        const session = OV.activeSessions.find((i) => i.sessionId === id);

        if (!session) {
            return res.status(404).json({
                error: 'Session not found',
            });
        }
        
        if (user.id !== session.creatorId) {
            return res.status(403).json({
                error: 'Forbidden operation'
            })
        }

        await session.close();

        res.json({
            message: 'Session Closed',
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: 'Internal server error',
        })
    }
    
}

exports.getTokenBySessionId = async (req, res) => {
    try {
        const { id } = req.params;
    
        await OV.fetch();
        const session = OV.activeSessions.find((i) => i.sessionId === id);
        console.log('------ session token -----');
        console.log(session);

        if (!session) {
            return res.status(404).json({
                error: 'Session not found',
            });
        }

        const token = await session.generateToken({
            role: 'SUBSCRIBER',
        });

        res.json({
            message: 'token generated',
            data: {
                token,
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: 'Internal server error',
        })
    }
}

exports.changeAvatar = async (req, res) => {
    let {id, avatar} = req.body;
    let data = req.body;

    uploadAvatar(req, res, async (err) => {

        // await Users.update({avatar: avatar}, {where: {id: id}});
        await Channels.update({avatar: avatar}, {where: {id: id}});

        await this.changeJwt(data, res);

    });

};

exports.changeCover = async (req, res) => {
    let {id, cover} = req.body;
    let data = req.body;


    uploadCover(req, res, async (err) => {
        // await Users.update({cover: cover}, {where: {id: id}});
        await Channels.update({cover: cover}, {where: {id: id}});
        await this.changeJwt(data, res);
    });
};

exports.changeJwt = async (data, res, ret = false) => {

    let user = await Users.findOne({
        where: {id: data.id}, include: [
            {model: Channels, as: 'channel'},
            {model: StocksOrderType, as: 'stocks_order_type'},
            {model: UsersCards}
        ]
    });


    let full_name = user[`first_name`] + ' ' + user[`last_name`];
    let {
        password,
        ...details
    } = user.toJSON();
    if (res && !res.headersSent) {
        res.json({
            token: jwt.sign(details, 'secretkey', {
                expiresIn: '8h'
            }),
            user_id: user.id,
            full_name
        })
    } else if (ret) {
        return jwt.sign(details, 'secretkey', {
            expiresIn: '8h'
        });
    }
};

exports.getUserDetail = async (req, res) => {
    const user = req.decoded
    let data = await Users.findOne({
        include: [
            {model: Channels, as: 'channel'},
            {model: StocksOrderType, as: 'stocks_order_type'},
            {model: UsersCards}
        ],
        where: {id: user.id},
        order: [[{model: UsersCards}, sequelize.col('is_primary'), 'DESC']]
    });

    return res.send({ message: 'user info', data })
}

exports.getUserInfo = async (req, res) => {
    console.log('get user info!!!!')
    let {username, own_channel} = req.query;
    let excludeFields = ['password', 'role_id', 'status_id', 'verification_code', 'phone'];

    let userByUsername = await Users.findOne({where: {username}, attributes: ['id']});
    // console.log(userByUsername)

    if (userByUsername) {
        let directConnectionsResult = await UsersConnectionMembers.findAll({
            where: {member_id: userByUsername.id},
            attributes: ['connection_id']
        });

        let directConnectionIds = JSON.parse(JSON.stringify(directConnectionsResult)).map(t => t.connection_id);


        let user = await Users.findOne({
            where:
                [
                    sequelize.where(sequelize.fn('BINARY', sequelize.col('username')), username),
                    // {name: sequelize.col('videos->privacy.name')}
                    // {'$videos.privacy.name$': 'Public'}
                    // [{model: PrivacyTypes}, sequelize.col(`name`), 'Public']
                ]
            ,
            attributes: {exclude: excludeFields},
            include: [
                {model: Channels, as: 'channel'},
                {
                    model: Videos,
                    as: 'videos',
                    include: [
                        {model: Tags, as: 'tags'},
                        {model: PrivacyTypes, as: 'privacy'},
                        {model: Users, as: 'user'},
                        {model: Channels, as: 'channel'}
                    ],
                    // where: sequelize.where(sequelize.col('`videos`.`privacy`.`name`'), 'Public')
                },
                {
                    model: UsersConnection, as: 'users_connections',
                    required: false,
                    where: {
                        id: {[Op.in]: directConnectionIds},
                        // confirmed: 1
                    },
                }
            ],
            order: [[{model: Videos}, sequelize.col(`created_at`), 'desc']]
        });

        if (user) {
            let {videos, ...rest} = user.toJSON();
            if (!+own_channel) {
                console.log('not own channel')
                let ret = {videos: videos.filter(t => t.privacy?.name === 'Public'), ...rest};
                res.json(ret);
            } else {
                res.json(user)
            }
        }
    } else {
        res.status(500).json({msg: 'The channel is not found'})
    }
};

exports.saveProfileChanges = async (req, res) => {
    const {id, ...data} = req.body;

    if (id !== req.decoded.id) {
        return res.status(403).json({
            error: 'Forbidden operation'
        })
    }

    uploadUserAvatar(req, res, async (err) => {

        let newPassword = data.password;
        // data.password = bcrypt.hashSync(newPassword, 10);
        await Users.update(data, {where: {id: id}});
        await this.changeJwt({id: id, ...data}, res);

    });
};


exports.blockUser = async (req, res) => {
    let {connection_id, block} = req.body;

    let result = await UsersConnection.update({is_blocked: block},
        {
            where: {
                id: connection_id
            }
        });

    res.json(result);
};

exports.getBlockedContactsIds = async (user_id, blocked = 0) => {
    let where = [
        {
            user_id
        },
        {
            connection_id: user_id,
        },
    ];


    let ids = await to(UsersConnection.findAll({
        attributes: ['user_id', 'connection_id'],
        raw: true,
        where: {
            is_blocked: blocked,
            [Op.or]: where,
        }
    }));

    return ids;
};

exports.getContacts = async (req, res) => {
    console.log('get contacts!!!');
    let user_id;
    if (req.return) {
        user_id = req.user_id;
        console.log("USER ID:" + user_id)
    } else {
        let data = req.query;
        user_id = data.user_id;
    }

    let where = [
        {
            user_id
        },
        {
            connection_id: user_id,
        },
    ];


    // let contacts = await to(UsersConnectionMembers.findAll({
    //     attributes: [],
    //     // raw: true,
    //     include: [
    //         {model: Users, as: 'connection', attributes: ['id', 'first_name', 'last_name', 'username']},
    //         // {model: Users, as: 'user', attributes: ['id', 'first_name', 'last_name', 'username']}
    //     ],
    //     where: {
    //         is_blocked: blocked,
    //         [Op.or]: where,
    //     }
    // }));

    let directConnectionsResult = await UsersConnectionMembers.findAll({
        where: {member_id: user_id},
        attributes: ['connection_id']
    });

    let directConnectionIds = JSON.parse(JSON.stringify(directConnectionsResult)).map(t => t.connection_id);

    let contacts = await (Users.findAll({
        attributes: ['id', 'first_name', 'last_name', 'avatar', 'username'],
        where: {
            [Op.not]: {
                id: user_id
            }
        },
        include: [
            {
                model: UsersConnection, as: 'users_connections',
                where: {
                    id: {[Op.in]: directConnectionIds},
                    // confirmed: 1
                },
            }]
    }));


    // let ret = [];
    //
    // contacts.map(c => {
    //     if (c.user.id !== +user_id) {
    //         ret.push(c.user.toJSON())
    //     } else if (c.connection && c.connection.id !== +user_id) {
    //         ret.push(c.connection?.toJSON())
    //     }
    // });
    //
    // console.log(ret)
    if (req.return) {
        return JSON.parse(JSON.stringify(contacts));
    } else {
        res.json(contacts);
    }
};

exports.checkIfUsersConnected = async (req, res = null) => {

    let {user_id, channel_user_id} = req.query || req;


    // let t = await UsersConnection.findAll({
    //     attributes: ['id', 'confirmed', 'is_blocked'],
    //     include: [
    //         {
    //             model: Users, attributes: ['id', 'avatar'], as: 'connection_users', where: {
    //                 id: {
    //                     [Op.in]: [user_id, channel_user_id]
    //                 }
    //             }
    //         }
    //     ],
    //     // group: ['connection_id'],
    //     where: sequelize.where(sequelize.fn('count', sequelize.col('member_id')), 2)
    // });
    //
    // res.json(t);


    let directConnectionsResult = await UsersConnectionMembers.findAll({
        where: {member_id: channel_user_id},
        attributes: ['connection_id']
    });


    let directConnectionIds = JSON.parse(JSON.stringify(directConnectionsResult)).map(t => t.connection_id);

    console.log(directConnectionIds)

    let usersConnection = await UsersConnection.findAll({
        where: {
            id: {[Op.in]: directConnectionIds},
        },
        include: [
            {model: Users, as: 'connection_users', attributes: ['id', 'first_name', 'last_name', 'avatar', 'username']}
        ]
    });

    console.log(JSON.parse(JSON.stringify(usersConnection)))

    let ret = usersConnection.find(t => t.connection_users.every(elem => {
        return [+user_id, +channel_user_id].includes(elem.id)
    }));

    if (res === null) {
        return ret;
    } else {
        res.json(ret)
    }
};

exports.createUsersConnection = async (data) => {
    console.log('create users connection!!!')

    let {from_user, to_user} = data;
    let params = {
        channel_user_id: to_user.id,
        user_id: from_user.id
    };

    let connection = await this.checkIfConnectionExist({from_id: from_user.id, to_id: to_user.id});

    if (!connection) {
        connection = await to(UsersConnection.create({
            from_id: from_user.id,
            to_id: to_user.id,
        }));
    } else {
        await UsersConnection.update({is_blocked: 0}, {where: {id: connection.id}});
    }


    await UsersConnectionMembers.create({
        member_id: from_user.id,
        connection_id: connection.id
    });
    await UsersConnectionMembers.create({
        member_id: to_user.id,
        connection_id: connection.id
    });

    const notificationDescription = {
        user: from_user,
        value: `${from_user.username} wants to connect`,
    }
    const notificationBody = {
        user_id: to_user.id,
        type: NOTIFICATION_TYPES.usersConnectionRequest,
        seen: false,
        description: JSON.stringify(notificationDescription),
    }

    await notifications.create(notificationBody)
    const existsClient = await SocketHandlerService.getByUser(to_user.id);
    if (existsClient) {
        const client = io.sockets.sockets.get(existsClient.socket)
        if (client) {
            client.emit('pushNotification', JSON.stringify(notificationBody))
        }
    }

    let checkAgain = await this.checkIfUsersConnected(params)
    let returnData = {
        initiator_id: from_user.id,
        receiver_id: to_user.id,
        from_user,
        to_user,
        connection_id: connection.id,
        type: 'users_connection_request',
        msg: `<strong>${from_user.first_name + ' ' + from_user.last_name}</strong> has sent a connection request to you`,
        ...checkAgain.toJSON(),
    };
    return returnData;
};

exports.checkIfConnectionExist = async (data) => {

    let {from_id, to_id} = data;


    let arr = [
        {
            to_id: from_id,
            from_id: to_id

        },
        {
            from_id: from_id,
            to_id: to_id,
        }
    ];

    let connection = await UsersConnection.findOne({
        attributes: ['id'],
        where: {
            [Op.or]: arr,
        },
        include: [
            {model: Users, as: 'connection_users', attributes: ['id', 'first_name', 'last_name', 'avatar', 'username']}
        ]
    });

    return connection;
}

exports.confirmConnection = async (data) => {

    await UsersConnection.update({confirmed: 1}, {
        where: {
            id: data.connection_id
        }
    });

    let confirmedConnection = await UsersConnection.findOne({
        where: {
            id: data.connection_id
        }
    });

    const fromUser = await Users.findOne({
        where: {
            id: confirmedConnection.from_id,
        }
    });

    const toUser = await Users.findOne({
        where: {
            id: confirmedConnection.to_id,
        }
    });

    const notificationDescription = {
        user: toUser,
        value: `${toUser.username} accepted your request`,
    }
    const notificationBody = {
        user_id: fromUser.id,
        type: NOTIFICATION_TYPES.acceptConnectionRequest,
        seen: false,
        description: JSON.stringify(notificationDescription),
    }

    await notifications.create(notificationBody)
    const existsClient = await SocketHandlerService.getByUser(fromUser.id);
    if (existsClient) {
        const client = io.sockets.sockets.get(existsClient.socket)
        if (client) {
            client.emit('pushNotification', JSON.stringify(notificationBody))
        }
    }

    // return JSON.parse(JSON.stringify(t[0]));
    return confirmedConnection;
};

exports.declineConnection = async (data) => {

    await UsersConnectionMembers.destroy({
        where: {
            connection_id: data.connection_id
        }
    });

    await UsersConnection.destroy({
        where: {
            id: data.connection_id
        }
    });

    // await UserConnectionNots.destroy({
    //     where: {
    //         id: data.notification_id
    //     }
    // });
};

exports.cancelUsersConnection = async (connection_id) => {
    await UsersConnectionMembers.destroy({
        where: {
            connection_id: connection_id
        }
    });

    await UsersConnection.destroy({
        where: {
            id: connection_id
        }
    });

    await UserConnectionNots.destroy({
        where: {
            connection_id: connection_id
        }
    });
};

exports.disconnectUsers = async (data) => {
    let {connection_id} = data;
    await to(UsersConnectionMembers.destroy({where: {connection_id}}));
    await to(UsersConnection.update({is_idle: 1}, {where: {id: connection_id}}));
};

exports.getUserConnections = async (req, res) => {
    let {user_id} = req.query;
    let arr = [
        {
            to_id: user_id,

        },
        {
            from_id: user_id
        }
    ];
    let connections = await UsersConnection.findAll({
        include: [
            {
                model: Users,
                as: 'connection_users',
                attributes: [['username', 'from'], 'id', 'avatar', 'first_name', 'last_name'],
                where: {[Op.not]: {id: user_id}}
            },
        ],
        where: {
            [Op.or]: [
                {
                    [Op.or]: arr,
                    confirmed: 1
                },
                {
                    to_id: user_id,
                    confirmed: 0
                }
            ]

        }
    });

    res.json(connections)
};

exports.changeChannelCover = async (req, res) => {
    const channel = await Channels.findOne({
        where: {
            user_id: req.decoded.id,
        }
    })

    if (!channel) {
        return res.status(404).json({
            error: 'Channel not found',
        })
    }

    if (channel.cover) {
        const filePath = path.join(__dirname, '../public/uploads/images/', channel.cover);
        await fsPromises.unlink(filePath);
    }

    await Channels.update({
        cover: req.file.filename,
    }, {
        where: {
            user_id: req.decoded.id,
        }
    })

    res.json({ success: true });
}

exports.changeChannelImage = async (req, res) => {
    const channel = await Channels.findOne({
        where: {
            user_id: req.decoded.id,
        }
    })

    if (!channel) {
        return res.status(404).json({
            error: 'Channel not found',
        })
    }

    if (channel.avatar) {
        const filePath = path.join(__dirname, '../public/uploads/images/', channel.avatar);
        await fsPromises.unlink(filePath);
    }

    await Channels.update({
        avatar: req.file.filename,
    }, {
        where: {
            user_id: req.decoded.id,
        }
    })
    
    res.json({ success: true });
}