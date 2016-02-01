var express = require('express');

var app = express();
var path = require("path");
var http = require("http");


app.use('/', express.static(path.join(__dirname, '/views/')));
app.use('/styles', express.static(path.join(__dirname, '/styles/')));
app.use('/icons', express.static(path.join(__dirname, '/icons/')));
// app.use('csshake.min.css', express.static(path.join(__dirname, '/node_modules/csshake/dist/')));

app.use('/styles', express.static(path.join(__dirname, '/node_modules/csshake/dist/')));


var server = app.listen(80, function(){

  var host = server.address().address;
  var port = server.address().port;

  console.log('AngryFrog is listening at port %s', host, port);
});
