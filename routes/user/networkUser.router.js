const express = require('express');
const controller = require('./controller');
const response = require('../../network/response');
const router = express.Router();

router.post('/', function(req, res) {
    controller.addUser(req.body.name)
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        })
})

module.exports = router;
