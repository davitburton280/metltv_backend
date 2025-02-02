'use strict';
module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        role_id: DataTypes.INTEGER,
        status_id: DataTypes.INTEGER,
        stocks_order_type_id: DataTypes.INTEGER,
        subscription_id: DataTypes.INTEGER,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        username: DataTypes.STRING,
        birthday: DataTypes.DATEONLY,
        gender: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        password: DataTypes.STRING,
        avatar: DataTypes.STRING,
        cover: DataTypes.STRING,
        verification_code: DataTypes.INTEGER,
        // access_token: DataTypes.STRING
    }, {timestamps: false, underscored: true});
    users.associate = function (models) {
        users.hasMany(models.videos, {as: 'videos', foreignKey: 'author_id'});
        users.hasMany(models.comments, {as: 'comments', foreignKey: 'user_id'});
        users.hasMany(models.users_cards, {foreignKey: 'user_id'});
        // users.hasMany(models.comments, {as: 'comments', foreignKey: 'user_id'});
        // users.hasMany(models.chat_messages, {as: 'from_messages', foreignKey: 'from_id'});
        // users.hasMany(models.chat_messages, {as: 'to_messages', foreignKey: 'to_id'});
        // users.hasMany(models.users_connection, {as: 'connection', foreignKey: 'connection_id'});
        // users.hasMany(models.users_connection, {as: 'user', foreignKey: 'user_id'});
        users.hasMany(models.users_tags, {as: 'tags_users', foreignKey: 'tag_id'}); // ?
        users.hasOne(models.channels, {foreignKey: 'user_id', as: 'channel'});
        users.belongsTo(models.stocks_ordering_types, {foreignKey: 'stocks_order_type_id', as: 'stocks_order_type'});
        // users.belongsTo(models.comments, {foreignKey: 'user_id', as: 'user'});


        users.belongsToMany(models.channels, {
            as: 'subscriptions',
            through: models.channel_subscribers,
            foreignKey: 'subscriber_id'
        });
        users.belongsToMany(models.videos, {
            as: 'users_vids',
            through: models.users_videos,
            foreignKey: 'user_id'
        });

        // users.belongsToMany(models.comments, {
        //     as: 'user',
        //     through: models.comments,
        //     foreignKey: 'user_id'
        // });

        users.belongsToMany(models.posts, {
            as: 'user_posts',
            through: models.users_posts,
            foreignKey: 'user_id'
        });
        users.belongsToMany(models.stocks, {
            as: 'user_stocks',
            through: models.users_stocks,
            foreignKey: 'user_id'
        });

        users.belongsToMany(models.video_comments, {
            as: 'users_with_comments',
            through: models.users_comments,
            foreignKey: 'user_id'
        });

        users.belongsToMany(models.users_connection, {
            as: 'users_connections',
            through: models.users_connection_members,
            foreignKey: 'member_id'
        });

        users.belongsToMany(models.chat_groups, {
            as: 'chat_group_members',
            through: models.chat_groups_members,
            foreignKey: 'member_id'
        });

        users.belongsToMany(models.groups, {
            as: 'group_members',
            through: models.groups_members,
            foreignKey: 'member_id'
        });

        // users.belongsToMany(models.roles, {
        //     as: 'group_members',
        //     through: models.users_roles,
        //     foreignKey: 'user_id',
        // })

        users.belongsToMany(models.roles, {
            as: 'page_group_roles',
            through: models.users_page_groups,
            foreignKey: 'user_id',
        })

        // users.belongsToMany(models.conversations, {
        //     as: 'conversation_creator',
        //     through: models.conversations,
        //     foreignKey: 'creator',
        // })

        users.belongsToMany(models.roles, {
            as: 'chat_group_roles',
            through: models.users_chat_groups,
            foreignKey: 'user_id',
        })

        users.belongsToMany(models.groups, {
            as: 'page_group_users_roles',
            through: models.users_page_groups,
            foreignKey: 'user_id',
        })

        // users.belongsToMany(models.group_chat_messages, {
        //     as: 'seen_by_user',
        //     through: models.group_chat_messages_seen,
        //     foreignKey: 'user_id'
        // });

        // users.hasMany(models.users_connection, {as: 'from_connection_user', foreignKey: 'from_id'});
        // users.hasMany(models.users_connection, {as: 'to_connection_user', foreignKey: 'to_id'});

        users.hasMany(models.posts, {as: 'posts', foreignKey: 'author_id'});
        users.hasMany(models.comments, {foreignKey: 'user_id'})
        users.hasMany(models.conversations, {as: 'creatorData', foreignKey: 'creator_id'});
        users.hasMany(models.conversations, {as: 'targetData', foreignKey: 'target_id'});
        users.hasMany(models.messages, {as: 'creator', foreignKey: 'creator_id'});
        // users.hasMany(models.conversations, {as: 'target', foreignKey: 'target'});
        // associations can be defined here
    };
    return users;
};