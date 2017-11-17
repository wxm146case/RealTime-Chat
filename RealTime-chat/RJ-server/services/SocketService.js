var userNames = (function () {
    var names = {};
  
    var claim = function (name) {
      if (!name || names[name]) {
        return false;
      } else {
        names[name] = true;
        return true;
      }
    };
  
    // find the lowest unused "guest" name and claim it
    var getGuestName = function () {
      var name,
        nextUserId = 1;
  
      do {
        name = 'Guest ' + nextUserId;
        nextUserId += 1;
      } while (!claim(name));
  
      return name;
    };
  
    // serialize claimed names as an array
    var get = function () {
      var res = [];
      for (user in names) {
        res.push(user);
      }
  
      return res;
    };
  
    var free = function (name) {
      if (names[name]) {
        delete names[name];
      }
    };
  
    return {
      claim: claim,
      free: free,
      get: get,
      getGuestName: getGuestName
    };
  }());
  
  

module.exports = function(socket) {

    var name = userNames.getGuestName();
    var usersList = userNames.get();

    socket.emit('init', usersList);
    socket.broadcast.emit('newUser', name);

    socket.on('message', (data) => {
        console.log(JSON.stringify(data));
        socket.broadcast.emit('message', data);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
        socket.broadcast.emit('loseUser', name);
        userNames.free(name);
    });

}
