const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/message', function (req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado"
    })
    res.send('Lista de mensajes');
});

app.post('/message', function (req, res) {
    console.log(req.query);
    console.log(req.body);
    res.send('Mensaje ' + req.body.text + ' añadido');
});



app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');
