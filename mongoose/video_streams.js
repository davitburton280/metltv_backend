let mongoose = require('mongoose')
const moment = require('moment');

// connects to mongo db
// mongoose.connect('mongodb://localhost/chat');

let VideoStreamsSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    filename: {
        type: String
    },
    token: {
        type: String
    },
    username: {
        type: String
    },
    author: {
        type: String
    },
    messages: {
        type: [
            // {lat: {type: Number}, lng: {type: Number}}
            {from: {type: String}, to: {type: String}, message: {type: String}}
        ],
        default: []
    },
    tags: [{
        type: String
    }],
    status: {
        type: String
    },
    created: {
        type: Date,
        default: moment().format()
    }

}, {strict: false});

module.exports = mongoose.model('Video_Streams', VideoStreamsSchema);
