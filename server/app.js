var express = require('express');
var app = module.exports.app = exports.app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static(__dirname + '/../src'));
app.use(require('connect-livereload')());





http.listen(9000);