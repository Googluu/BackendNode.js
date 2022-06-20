const express = require('express');
const bodyParser = require('body-parser');
const routerApi = require('./routes');

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

routerApi(app);

app.listen(port, () => {
    console.log('Mi port' + port);
});
