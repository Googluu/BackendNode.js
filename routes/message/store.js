const db = require('mongoose');
const Model = require('./model');

const uri = 'mongodb+srv://userPrueba:admin123@cluster0.6fhbn.mongodb.net/?retryWrites=true&w=majority';

db.Promise = global.Promise;

db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('[db] Conectada con éxito'))
    .catch(err => console.error('[db]', err));

const addMessage = message => {
    // list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(message) {
    // return list;
    const messages = await Model.find();
    return(messages);
}

module.exports = {
    add: addMessage,
    list: getMessage
}