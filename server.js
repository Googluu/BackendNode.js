const express = require('express');
const app = express();
const server = require('http').Server(app);

const { config } = require('./config/config');

const cors = require('cors');
const bodyParser = require('body-parser');
const routerApi = require('./routes');
const socket = require('./socket');
const connect = require('./db');

connect(config.dbUrl);


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);
routerApi(app);

app.use(express.static('public'));


server.listen(3000, function () {
    console.log('La aplicación está escuchando en '+ config.host +':' + config.port);
}) ;