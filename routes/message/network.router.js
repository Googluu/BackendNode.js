const express = require('express');
const controller = require('./controller.router');
const response = require('../../network/response');

const router = express.Router();

router.get('/', function (req, res) {
    console.log(req.headers);
        res.header({
            "custom-header": "Nuestro valor personalizado"
        })
    response.success(req, res, 'Lista de mensages');
});

router.post('/', function (req, res) {
    
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(error => {
            response.error(req, res, 'Información invalidad', 400, 'Error en el controlador ');
        });
});

module.exports = router;
