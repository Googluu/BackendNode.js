const express = require('express');

const networkRouter = require('./message/network.router');
const networkMessageRouter = require('./user/networkUser.router');
const networkChatRouter = require('./chat/networkChat.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/message', networkRouter);
    router.use('/user', networkMessageRouter);
    router.use('/chat', networkChatRouter);
}

module.exports = routerApi;
