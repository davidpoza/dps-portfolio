'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargamos archivo de rutas
var project_routes = require('./routes/project');

//middlewares
//para que todo lo que llegue por body lo convierta a un objeto json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//rutas

app.use('/api', project_routes);

module.exports = app;