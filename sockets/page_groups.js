let h = require('./helpers');
const to = require('../helpers/getPromiseResult');

let notificationsController = require('../controllers/notificationsController');
let groupsController = require('../controllers/groupsController');

exports.inviteToNewGroup = async (data, usersGroups, io) => {
    console.log('invite to new page group!!!', data);

    let {invited_members, group} = data;
    let groupName = group.name;

    if (groupName) {
        await Promise.all(invited_members.map(async (member) => {
            let username = member.username;
            let invitedMemberSocketId = h.getSocketId(username, usersGroups);

            let notification = await h.saveGroupNotification({
                ...data, ...{member},
                type: 'page_group_join_request'
            });

            io.to(invitedMemberSocketId).emit('inviteToGroupSent', {
                group_id: group.id,
                ...notification,
                group_details: group
            })

            let groupUsernames = h.getGroupUsernames(groupName, usersGroups);
            io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})
        }))
    }
}

exports.joinGroup = async (data, usersGroups, io) => {
    let {from_user, group} = data;
    let groupName = group.name;

    let newUserSocketId = h.getSocketId(from_user.username, usersGroups);
    let theSocket = io.sockets.sockets.get(newUserSocketId);
    let groupSockets = await h.getGroupSockets(io, groupName);
    let gSockets = [...groupSockets];
    if (!gSockets.includes(theSocket)) {
        theSocket?.join(groupName);
        groupSockets = await h.getGroupSockets(io, groupName);
        console.log('joined', groupSockets)
        console.log('groupName:', groupName, usersGroups)
    }

    let notification = await h.saveGroupNotification({
        ...data,
        type: 'join_group_invitation'
    });

    data.group = await groupsController.getGroupMembers({return: true, group_id: group.id});

    io.sockets.in(groupName).emit('getJoinGroup', {
        rest: data,
        notification
    });
}

exports.confirmJoinGroup = async (data, usersGroups, io) => {
    console.log('confirmed joining group!!!');

    let {group, member} = data;
    let groupName = group.name;

    Object.values(usersGroups).map((gu, index) => {
        if (gu.username === member.username && !gu.page_groups.find(g => g === groupName)) {
            gu.page_groups.push(groupName);
        }
    })


    let notification = await h.saveGroupNotification({
        ...data,
        type: 'confirm_group_invitation'
    });

    data.group = await groupsController.getGroupMembers({return: true, group_id: group.id});


    console.log('confirmed!!!')
    console.log(await io.in(group.name).allSockets())
    // console.log(usersGroups)
    io.sockets.in(group.name).emit('confirmedJoinGroup', {
        rest: data,
        notification
    });


    let groupUsernames = h.getGroupUsernames(groupName, usersGroups);
    io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})
}

exports.ignoreJoinGroup = async (data, usersGroups, io) => {
    console.log('ignored joining group!!!');

    let {group, member} = data;
    let groupName = group.name;

    let notification = await h.saveGroupNotification({
        ...data,
        type: 'ignore_group_invitation'
    });

    data.group = await groupsController.getGroupMembers({return: true, group_id: group.id});
    data.leftGroups = await groupsController.get({return: true, user_id: member.id});
    console.log(await io.in(groupName).allSockets());
    console.log('ignored!!!')
    console.log(io.in(group.name).allSockets())
    console.log(usersGroups)
    io.sockets.in(groupName).emit('ignoredJoinGroup', {
        rest: data,
        notification
    });

    let groupUsernames = h.getGroupUsernames(groupName, usersGroups);
    io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})
}

exports.leaveGroup = async (data, usersGroups, socket, io) => {
    console.log('leave page group!!!')
    let {from_user, group} = data;
    let groupName = group.name;

    Object.values(usersGroups).map(gu => {

        if (gu.username === from_user.username && gu.page_groups.find(g => g === groupName)) {
            console.log(gu.page_groups.filter(g => g !== groupName))
            gu.page_groups = gu.page_groups.filter(g => g !== groupName);
        }
    })
    console.log(usersGroups)
    console.log(await io.in(groupName).allSockets());


    let groupMembers = await groupsController.getGroupMembers({return: true, group_id: group.id});
    data.group.group_members = groupMembers?.group_members;

    let notification = await h.saveGroupNotification({
        ...data,
        type: 'left_group'
    });

    console.log(await io.in(groupName).allSockets());
    io.sockets.in(group.name).emit('leaveGroupNotify', {
        ...data,
        ...notification,
    });

    socket.leave(groupName);
}

exports.removeFromGroup = async (data, usersGroups, socket, io) => {
    let {member, group} = data;
    let groupName = group.name;
    console.log('remove from group!!!');

    Object.values(usersGroups).map(gu => {

        if (gu.username === member.username && gu.chat_groups.find(g => g === groupName)) {
            gu.chat_groups = gu.chat_groups.filter(g => g !== groupName);
        }
    })

    let socketId = h.getSocketId(member.username, usersGroups); //socket.id
    let theSocket = io.sockets.sockets.get(socketId);
    // console.log(await io.in(groupName).allSockets());

    let notification = await h.saveGroupNotification({
        ...data,
        type: 'remove_from_group'
    });


    data.group = await groupsController.getGroupMembers({return: true, group_id: group.id});
    data.leftGroups = await groupsController.get({return: true, user_id: member.id});

    let currentUserNotifications = await notificationsController.get({return: true, user_id: member.id});


    console.log(currentUserNotifications);
    socket.broadcast.to(groupName).emit('removeFromGroupNotify', {
        ...data,
        currentUserNotifications
    });

    theSocket.leave(groupName);
}