const comment_controller = require('../controllers/commentController')
const sequelize = require('sequelize');
const db = require('../models');
const notifications = db.notifications;
const { NOTIFICATION_TYPES } = require('../constants')
const SocketHandlerService = require('../services/socketHandlerService')


exports.createComment = async (data, socket, io) => {
    const user = socket.decoded
    const result = await comment_controller.create(data, user)
    if (result.success) {
        console.log(`success room ------------------------- ${result.data.room}`);
        io.in(result.data.room).emit('createComment_success', JSON.stringify(result.data.comment))
        console.log('sent createComment_success to ', result.data.room);
        io.sockets.adapter.rooms.forEach((element, index) => {
            if (index === result.data.room) {
                console.log(element);
            }
        })
        console.log(user.username, 'connected to room', result.data.room)
    }
}

exports.store = async (data, socket, io) => {
    const user = socket.decoded
    const { post_id, video_id } = JSON.parse(data)
    const room = `${post_id ? 'post' : 'video'}_room_${post_id || video_id}`
    await socket.join(room)
    io.sockets.adapter.rooms.forEach((element, index) => {
        if (index === room) {
            console.log(element);
        }
        
    })
    console.log(user.username, 'connected to room', room);
    return true

}

exports.disconnectStoredComment = async (data, socket, io) => {
    const { post_id, video_id } = JSON.parse(data)
    const room = `${post_id ? 'post' : 'video'}_room_${post_id || video_id}`
    await socket.leave(room)
    io.sockets.adapter.rooms.forEach((element, index) => {
        if (index === room) {
            console.log(element, 'socket romm after disconnection from room - ', room);
        }
    })

    return true
}

exports.likeComment = async (data, socket, io) => {
    const user = socket.decoded
    const { comment_id } = JSON.parse(data)
    const dest = await comment_controller.likeComment(comment_id, user)
    const { liked, comment } = dest

    if (liked) {
        const existsClient = await SocketHandlerService.getByUser(user.id)
        const client = io.sockets.sockets.get(existsClient.socket)
        if (client) {
            const notificationDescription = {
                user,
                value: `${user.username} liked your comment`
            }
            const notificationBody = {
                user_id: comment.user_id,
                type: NOTIFICATION_TYPES.commentReaction,
                seen: false,
                description: JSON.stringify(notificationDescription)
            }

            await notifications.create(notificationBody)
            client.emit('pushNotification', JSON.stringify(notificationBody))
        }
    }

    return true
}

exports.dislikeComment = async (data, socket, io) => {
    const user = socket.decoded
    const { comment_id } = JSON.parse(data)
    const dest = await comment_controller.dislikeComment(comment_id, user)
    const { disliked, comment } = dest

    if (disliked) {
        const existsClient = await SocketHandlerService.getByUser(user.id)
        const client = io.sockets.sockets.get(existsClient.socket)

        if (client) {
            const notificationDescription = {
                user,
                value: `${user.username} dislikes your comment`
            }
            const notificationBody = {
                user_id: comment.user_id,
                type: NOTIFICATION_TYPES.commentReaction,
                seen: false,
                description: JSON.stringify(notificationDescription)
            }

            await notifications.create(notificationBody)
            client.emit('pushNotification', JSON.stringify(notificationBody))
        }
    }

    return true
}