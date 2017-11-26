
var userNames = [];
var userIdToUserName = {};

  
  

module.exports = function(socket) {
    socket.handshake;
    


    socket.emit('init', userNames);

    socket.on('newUser', (userName) => {
      userNames.push(userName);
      console.log(userNames);
      console.log('socketId:' + socket.id);
      userIdToUserName[socket.id] = userName;
      socket.broadcast.emit('newUser', userName);
    });


    socket.on('message', (data) => {
        console.log(JSON.stringify(data));
        socket.broadcast.emit('message', data);
    });

    socket.on('disconnect', () => {
        var userName = userIdToUserName[socket.id];
        var index = userNames.indexOf(userName);
        userNames.splice(index, 1);
        socket.broadcast.emit('loseUser', userName);

        console.log('Client disconnected');        
    });

}
