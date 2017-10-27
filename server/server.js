const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, './../public');
const port = process.env.PORT || 3000;

var app = express();
// This is static middleware 
app.use(express.static(publicPath));

var server = http.createServer(app);
// creates a web sockets server ->
// -> emitting and receiving events 
var io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected.')
  })
});
server.listen(port, () => {
  console.log(`Started on port ${port}.`);
});