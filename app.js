'use strict' //Llama a la ultima version de javascript

//cargar un import de un paquete o un modulo en concreto
const express = require('express'); //cargando express
const bodyParser = require('body-parser'); //cargando body-parser
var path = require("path");
const app = express();
const api = require('./routes/routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api',api);

module.exports = app;