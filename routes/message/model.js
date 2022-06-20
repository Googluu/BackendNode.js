const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

const mySchema = mongoose.Schema({
    chat: {
        type: mongoose.Schema.ObjectId,
        ref: 'Chat'
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
    file: String,
});

const model = mongoose.model('Message', mySchema)

module.exports = model;
