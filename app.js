var express = require('express');
var app = express();
var db = require('./db');
global.__root   = __dirname + '/'; 
var ResiController = require(__root + 'Controller/ResiController');

app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});

app.use('/api/resi', RecordController);

module.exports = app;