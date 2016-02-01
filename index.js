var express = require('express');

var app = express();
var path = require("path");
var http = require("http");


app.use('/', express.static(path.join(__dirname, '/')));
app.use('/styles', express.static(path.join(__dirname, '/styles/')));

app.use('*', express.static(path.join(__dirname, '/')));
// 
// app.get('/', function(req, res){
//   res.sendFile(path.join(__dirname + '/index.html'));
// });
// app.get('/stylesheet.css', function(req, res){
//   res.sendFile(path.join(__dirname + '/stylesheet.css'));
// });

var server = app.listen(80, function(){

  var host = server.address().address;
  var port = server.address().port;

  console.log('AngryFrog is listening at http://%s:%s', host, port);
});
