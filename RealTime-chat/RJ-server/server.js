var bodyParser = require('body-parser');
const express = require('express');

var config = require('./config/config.json');
var _ = require('./models/main.js').connect(config.mongoDbUri);
var authCheckMiddleware = require('./middleware/auth_checker');
var passport = require('passport');

const app = express();
app.use(bodyParser.json());
const path = require('path');

const indexRouter = require('./routes/index');
var auth = require('./routes/auth');

app.use(passport.initialize());
var localSignUpStrategy = require('./passport/signup_passport');
var localLoginStrategy = require('./passport/login_passport');
passport.use('local-signup', localSignUpStrategy);
passport.use('local-login', localLoginStrategy);

app.use(express.static(path.join(__dirname, '../public')));
app.use('/', indexRouter);
app.use('/auth', auth);
app.use('/chatroom', authCheckMiddleware);
app.use(function(req, res, next) {
    res.sendFile('index.html', { root: path.join(__dirname, '../public')});
  });

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
    console.log ('listening on ' + addr.port);
}
