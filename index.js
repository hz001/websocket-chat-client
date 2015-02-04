var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express');
var path = require('path');


app.use(express.static(path.join(__dirname, '/')));

app.get('/index.html', function(req, res){

});

http.listen(3001, function(){
     console.log('listening on *:3001');
});

