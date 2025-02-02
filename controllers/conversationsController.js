const sequelize = require('sequelize')
const { Sequelize } = require('../models')
const Op = sequelize.Op

const db = require('../models')
const Users = db.users
const Conversations = db.conversations

const ChatService = require('../services/chat')

exports.castSortingModel = (key, value) => {
    if (!key) key = 'created_at'
    if (!value) value = 'desc'

    return [[key, value]]
}

exports.create = async (req, res) => {
    console.log('body');
    console.log(req.body);
    const user = req.decoded
    const { targetUser } = req.body
    const targetUserExists = await Users.findByPk(targetUser);

    if (!targetUserExists) {
        return res.status(404).json({
            error: 'Target user not found'
        })
    }

    const conversationExists = await Conversations.findOne({
        where: {
            [Op.or]: [
                {
                    creator_id: user.id,
                    target_id: targetUserExists.id,
                },
                {
                    creator_id: targetUserExists.id,
                    target_id: user.id,
                }
            ]
        }
    });

    if (conversationExists) {
        return res.status(400).json({
            error: 'Conversation already exists',
        })
    }

    const data = await ChatService.createConversation(user.id, targetUser)
    return res.send(data)
}

exports.getList = async (req, res) => {
    console.log('------- conversation list --------');
    console.log(req.headers)
    const user = req.decoded
    let { limit, page } = req.body

    if (!limit) limit = 10
    if (!page) page = 1

    const sorting = this.castSortingModel()

    let filter = {
        [Op.or]: [
            {
                target_id: user.id
            },
            {
                creator_id: user.id
            }
        ]
    }

    const data = await Conversations.findAndCountAll({
        where: filter,
        include: [
            {
                model: Users,
                as: 'creator',
                attributes: ['id', 'first_name', 'last_name', 'username', 'avatar'],
            },
            {
                model: Users,
                as: 'target',
                attributes: ['id', 'first_name', 'last_name', 'username', 'avatar'],
            },
        ],
        attributes: ['id', 'last_message', 'deleted_from', 'muted_from', 'created_at', 'updated_at', 'is_blocked'],
        order: sorting,
        limit,
        offset: (page - 1) * limit
    })
    return res.send({ message: 'conversations list', data })
}

exports.mute = async (req, res) => {
    const { id } = req.params
    const user = req.decoded

    const conversation = await Conversations.findOne({
        where: {
            id
        }
    })

    if (!conversation || !id) return res.status(400).send({ message: 'wrong conversation id' })

    const index = conversation.muted_from.indexOf(user.id)
    if (index === -1) {
        conversation.muted_from.splice(index, 1)
    } else {
        conversation.muted_from.push(user.id)
    }

    await Conversations.updateOne({ muted_from: conversation.muted_from }, { where: { id } })

    return res.send({ message: 'Conversation notifications status changed' })
}

exports.delete = async (req, res) => {
    const { id } = req.params
    const user = req.decoded

    const conversation = await Conversations.findOne({
        where: {
            id
        }
    })

    if (!conversation || !id) return res.status(400).send({ message: 'wrong conversation id' })

    const index = conversation.deleted_from.indexOf(user.id)
    if (index === -1) {
        conversation.deleted_from.splice(index, 1)
    } else {
        conversation.deleted_from.push(user.id)
    }

    await Conversations.updateOne({ deleted_from: conversation.deleted_from }, { where: { id } })

    return res.send({ message: 'ok' })
}

exports.block = async (req, res) => {
    const { id } = req.params;
    const user = req.decoded;

    const conversation = await Conversations.findByPk(id);

    if (!conversation) {
        return res.status(404).json({
            error: 'Conversation not found',
        });
    }

    if (conversation.creator_id !== user.id && conversation.target_id !== user.id) {
        return res.status(403).json({
            error: 'Forbidden operation'
        });
    }

    await Conversations.update({
        blocked_from: user.id,
        is_blocked: true,
    }, {
        where: {
            id: conversation.id,
        }
    });

    return res.json({ message: 'ok' });
}

exports.unblock = async (req, res) => {
    const { id } = req.params;
    const user = req.decoded;

    const conversation = await Conversations.findByPk(id);

    if (!conversation) {
        return res.status(404).json({
            error: 'Conversation not found',
        });
    }

    if (conversation.blocked_from !== user.id) {
        return res.status(403).json({
            error: 'Forbidden operation'
        });
    }

    await Conversations.update({
        blocked_from: null,
        is_blocked: false,
    }, {
        where: {
            id: conversation.id,
        }
    });

    return res.json({ message: 'ok' });
}