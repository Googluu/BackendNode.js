const express = require('express');

const app = express();

app.get('/message', function (req, res) {
    res.send('Lista de mensajes');
});

app.post('/message', function (req, res) {
    res.send('Mensaje añadido');
});

// app.use('/', function(req, res) {
//     res.send('Hola');
// })

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');
