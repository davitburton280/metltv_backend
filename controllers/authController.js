const sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const db = require('../models');
const Users = db.users;
const Roles = db.roles;
const UsersCards = db.users_cards;
const Channels = db.channels;
const StocksOrderType = db.stocks_ordering_types;

const bcrypt = require('bcryptjs');

const nodemailer = require('nodemailer');
const showIfErrors = require('../helpers/showIfErrors');
const to = require('../helpers/getPromiseResult');

exports.login = async (req, res) => {

    // Checking validation result from express-validator
    if (!showIfErrors(req, res)) {
        // Getting request data and setting user fields to return
        let {email} = req.body;

        // let attributes = [`full_name`, 'email', 'username', 'birthday', 'avatar', 'cover', 'password', 'stocks_order_type_id', 'id', 'status_id'];

        // Active status selecting
        let statusWhere = sequelize.where(sequelize.col('`users_status`.`name`'), 'active');

        // Selecting an employee that has an email matching request one
        let user = await Users.findOne({
            // attributes: attributes,
            // include: [
            //     // {model: Roles, as: 'page_group_roles'},
            //     // {model: Roles, as: 'chat_group_roles', through: {attributes: []}},
            //     // {model: Channels, as: 'channel'},
            //     // {model: StocksOrderType, as: 'stocks_order_type'},
            //     // {model: UsersCards}
            // ],
            where: {email},
            // order: [[{model: UsersCards}, sequelize.col('is_primary'), 'DESC']]
        }, res);

        const channel = await Channels.findOne({ where: { user_id: user.id } });

        if (!res.headersSent) {


            // User is not active
            if (!user) res.status(500).json({msg: 'You don\'t have such privileges or the account is inactive'});

            else {
                // Cloning users object without password and saving user full name
                let {password, ...details} = user.toJSON();
                console.log("!!!!!!", details.page_group_roles, "!!!!");
                details.channel = channel;
                // req.session.full_name = user.full_name;
                // console.log(details)
                res.status(200).json({
                    token: jwt.sign(details, 'secretkey', {expiresIn: '8h'}),
                    user_id: user.id,
                    full_name: user[`first_name`] + ' ' + user['last_name']
                })
            }


        }
    }
};

exports.logout = (req, res) => {
    req.logout();
    // console.log(req.session)
    // console.log("'" + req.session.loggedUser + "' has logged out");
    // req.session.destroy();
    res.status(200).json({msg: 'OK'})
};

exports.sendVerificationCode = async (req, res) => {
    console.log('OK')
    let data = req.body;
    if (!showIfErrors(req, res)) {


        let transporter = nodemailer.createTransport({
            // host: 'smtp.gmail.com',
            service: 'gmail',
            // port: 465,
            // secure: false, // true for 465, false for other ports
            auth: {
                // user: 'sofiabruno3003@gmail.com', // generated ethereal user
                user: 'davitburton280@gmail.com', // generated ethereal user
                pass: 'davmark11' // generated ethereal password
            }
        });

        let randomCode = Math.floor(1000 + Math.random() * 9000);
        req.body.verification_code = randomCode;
        console.log("CODE" + randomCode)
        // console.log(process.env)

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Metl.tv " <info@metl.tv>', // sender address
            to: req.body.email, // list of receivers
            subject: 'Confirmation email', // Subject line
            text: 'Account confirmation code', // plain text body
            html: `${randomCode}` // html body
        };

        let tempToken = jwt.sign({
            email: data.email,
        }, 'secretkey', {expiresIn: '1h'});

        // send mail with defined transport object
        transporter.sendMail(mailOptions, async (error, info) => {
            console.log(info)
            console.log(error)
            if (error) {
                res.status(500).json({msg: error.toString()})
            } else if (info) {
                if (!data.resend) {
                    this.register(req, res);
                } else {
                    console.log(data)
                    await Users.update({verification_code: data.verification_code}, {where: {email: data.email}});
                }
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                res.json('OK');
            }
            transporter.close();


        });
    }
};

exports.sendForgotPassEmail = async (req, res) => {

    let data = req.body;

    console.log('OK')
    if (!showIfErrors(req, res)) {


        let transporter = nodemailer.createTransport({
            // host: 'smtp.gmail.com',
            service: 'gmail',
            // port: 465,
            // secure: false, // true for 465, false for other ports
            auth: {
                user: 'davitburton280@gmail.com', // generated ethereal user
                pass: 'davmark11' // generated ethereal password
            }
        });

        let randomCode = Math.floor(1000 + Math.random() * 9000);
        console.log("CODE" + randomCode)
        // console.log(process.env)

        let foundUser = await Users.findOne({where: {email: data.email}});

        let tempToken = jwt.sign({
            email: foundUser.email,
            id: foundUser.id,
            full_name: foundUser.first_name + ' ' + foundUser.last_name,
            gender: foundUser.gender,
        }, 'secretkey', {expiresIn: '1h'});

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Metl.tv " <info@metl.tv>', // sender address
            to: data.email, // list of receivers
            subject: 'Forgot Password e-mail', // Subject line
            text: 'You recently requested a password reset', // plain text body
            html: `<p>You recently requested a password reset. Please click on this 
                    <a href="${process.env.FRONTEND_URL}auth/reset-password?email=${data.email}&token=${tempToken}">link</a>
                     to proceed</p>
                    <div><span>The link will be valid for the next 1 hour</span></div>` // html body
        };


        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            console.log(info)
            console.log(error)
            if (error) {
                res.status(500).json({msg: error.toString()})
            } else if (info) {

                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                res.json(randomCode);
            }
            transporter.close();


        });
    }
};


exports.register = async (req, res) => {

    // Checking validation result from express-validator
    if (!showIfErrors(req, res)) {
        // Getting request data and setting user fields to return
        let data = req.body;
        let email = data.email.trim();

        // Saving the original password of user and hashing it to save in db
        let originalPass = data.password;
        data.password = bcrypt.hashSync(originalPass, 10);

        // Setting default stocks ordering type to 'alphabetical'
        let stocksOrderingType = await StocksOrderType.findOne({where: {value: 'alphabetical'}, attributes: ['id']});
        data.stocks_order_type_id = stocksOrderingType.id;

        console.log(data)

        let user = await Users.create(data);
        await Channels.create({
            name: data.first_name + ' ' + data.last_name,
            user_id: user.id,
            avatar: user.avatar,
            cover: user.cover
        });

        // Saving the original password again to request for authenticating the user at once
        data.password = originalPass;
        req.body = data;

        // res.json("OK");

        if (!data.hasOwnProperty('verification_code')) {
            this.login(req, res);
        } else {
            return true;
        }
    }
};

exports.resetPassword = async (req, res) => {
    console.log('here!!!!')
    let data = req.body;
    let newPassword = data.password;
    if (!showIfErrors(req, res)) {


        data.password = bcrypt.hashSync(newPassword, 10);

        await to(Users.update({password: data.password}, {where: {email: data.email}}), res);
        this.login(req, res);
    }


};


