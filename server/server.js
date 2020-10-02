const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(__dirname + '/../public'));

io.on('connection', (socket) => {
    console.log('New user connected!');

    socket.on('disconnect', () => {
        console.log('User Disconnected!');
    });
});


server.listen(port, () => {
    console.log(`Server Listening on Port ${port}`);
});