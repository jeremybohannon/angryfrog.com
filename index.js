var express = require('express');

var app = express();
var path = require("path");
var http = require("http");


app.use('/', express.static(path.join(__dirname, '/views/')));
app.use('/styles', express.static(path.join(__dirname, '/styles/')));
app.use('/icons', express.static(path.join(__dirname, '/icons/')));
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules/csshake')));
// app.use('*', express.static(path.join(__dirname, '/views/')));
//
// app.get('/', function(req, res){
//   res.sendFile(path.join(__dirname + '/index.html'));
// });
// app.get('/stylesheet.css', function(req, res){
//   res.sendFile(path.join(__dirname + '/stylesheet.css'));
// });

// app.get('/node_modules/csshake/csshake.min.css', function(req, res){
//  res.sendFile(path.join(__dirname + '/node_modules/csshake/csshake.min.css'));
//  });

var server = app.listen(80, function(){

  var host = server.address().address;
  var port = server.address().port;

  console.log('AngryFrog is listening at http://%s:%s', host, port);
});
