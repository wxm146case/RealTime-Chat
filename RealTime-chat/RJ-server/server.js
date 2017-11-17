const express = require('express');
const app = express();
const path = require('path');

const indexRouter = require('./routes/index');

app.use(express.static(path.join(__dirname, '../public')));
app.use('/', indexRouter);

const http = require('http');
const socketIO = require('socket.io');
const io = socketIO();
const socketService = require('./services/SocketService');
const server = http.createServer(app);
io.attach(server);
io.on('connection', socketService);
server.listen(3000);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
    throw error;
}

function onListening() {
    const addr = server.address();
    console.log ('listening on' + addr.port);
}
