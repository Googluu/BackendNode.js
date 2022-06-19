const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

const mySchema = mongoose.Schema({
    users: [{
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        }],
});

const model = mongoose.model('Chat', mySchema)

module.exports = model;
