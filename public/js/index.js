// method -> initiating the request
// from the client to the server
// to open a socket - listen to the
// server and send data to it
var socket = io();

socket.on('connect', function() {
  console.log('Connected to server.');

  socket.emit('createMessage', {
    greeting: 'HELLO!'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server.');
});

socket.on('newEmail', function(email) {
  console.log('New Email', email);
});

socket.on('newMessage', (message) => {
  console.log('newMessage', message);
});