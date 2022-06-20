const { populate } = require('./model');
const Model = require('./model');

const addMessage = message => {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(filterUser) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if ( filterUser !== null) {
            filter = { user: filterUser };
        }
        Model.find(filter)
            .populate('user')
            .exec((error, populate) => {
                if (error) {
                    reject(error)
                    return false;
                }
                resolve(populate);
            })
    })
}

function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    });
}

async function updateText(id, message){
    const updatedMessage = await Model.findByIdAndUpdate(id, {message}, {new: true});
    return updatedMessage;
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: removeMessage
}