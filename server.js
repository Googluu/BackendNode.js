const express = require('express');
const bodyParser = require('body-parser');

const response = require('./network/response');

const path = require('path') || 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/message', function (req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado"
    })
    response.success(req, res, 'Lista de mensages');
});

app.post('/message', function (req, res) {
    console.log(req.query);
    if (req.query.message === 'ok') {
        response.error(req, res, 'Error simulado', 500);
    } else {
        response.success(req, res, 'Creado correctamente', 201);
    }
});

app.use('/app', express.static(path.join(__dirname, 'public')));

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');
