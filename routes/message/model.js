const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

const mySchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
});

const model = mongoose.model('message', mySchema)

module.exports = model;
