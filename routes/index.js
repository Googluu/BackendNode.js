const express = require('express');

const networkRouter = require('./message/network.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/message', networkRouter);
}

module.exports = routerApi;
