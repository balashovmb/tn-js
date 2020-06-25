const WebSocket = require("ws");
const wsConnection = new WebSocket.Server({ port: 8080 });

const clients = new Set();

class User {
  constructor(connection) {
    this.connection = connection;
    this._channels = new Set();
  }

  loginChannel(channelName) {
    this._channels.add(channelName);
    this.connection.send('You are connected to the channel ' + channelName);
  }

  logoutChannel(channelName) {}

  isLoggedIn(channelName) {}
}

wsConnection.on("connection", ws => {
  const user = new User(ws);
  clients.add(user);

  user.connection.on("message", function(data) {
    const message = JSON.parse(data);

    switch (message.command) {
      case "login":
        user.loginChannel(message.channel);
        // channel: 'channelName',
        // username: 'username'
        return;
      case "logout":
        return;
      case "sendMessage":
        return;
      case "exitChat":
        return;
      default:
        ws.send("Unknown command ");
        return;
    }
  });

  user.connection.on("close", function() {
    clients.delete(user);
  });

});
