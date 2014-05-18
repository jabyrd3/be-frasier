var express = require('express');
var app = express();
var mouth = require('./say.js');

app.get('/', function(req, res){
      res.send('<html><head></head><body><p>' + say() + '</p></body></html>');
});

app.listen(3000);

