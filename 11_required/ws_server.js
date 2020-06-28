const WebSocket = require("ws");
const wsConnection = new WebSocket.Server({ port: 8080 });

const clients = new Set();

const channels = {};

function prepareServiceMessage(text) {
    return {
        service: true,
        text: text
    }
}

class User {
    constructor(connection) {
        this.connection = connection;
        this._channels = new Set();
    }

    loginChannel(channelName, username) {
        if (this.isLoggedIn(channelName)) {
            this.serviceMessage('You are already connected to this channel');
            return;
        }
        this._channels.add(channelName);
        let channel = channels[channelName]
        if (!channel) {
            channel = new Channel(channelName);
        }
        channel.connectUser(this, username);
        this.serviceMessage('You are connected to the channel ' + channelName);
    }

    logoutChannel(channelName) {
        if (!this.isLoggedIn(channelName)) {
            this.serviceMessage('You are not connected to this channel');
            return;
        }
        this._channels.delete(channelName);
        channels[channelName].disconnectUser(this);
    }

    isLoggedIn(channelName) {
        return this._channels.has(channelName);
    }

    sendMessage(channelName, text) {
        if (!this.isLoggedIn(channelName)) {
            this.serviceMessage('You are not connected to this channel');
            return;
        }
        const channel = channels[channelName];
        channel.usersMessage(this, text);
    }

    receiveMessage(message) {
        this.connection.send(JSON.stringify(message));
    }

    exitChat() {
        this.connection.close();
    }

    serviceMessage(text) {
        const message = prepareServiceMessage(text);
        this.receiveMessage(message);
    }
}

class Channel {
    constructor(channelName) {
        this.name = channelName;
        this._users = new Map();
        channels[channelName] = this;
        this.messages = [];
    }

    connectUser(user, username) {
        this._users.set(user, username);
        this.messages.forEach(message => user.receiveMessage(message));
    }

    disconnectUser(user) {
        const username = this._users.get(user);
        this._users.delete(user);
        const message = prepareServiceMessage(`${username} leaved chat`);
        this.publish(message);
    }

    usersMessage(user, text) {
        const username = this._users.get(user);
        const message = {
            channelName: this.name,
            username,
            message: text
        };
        this.messages.push(message);
        this.publish(message);
    }

    publish(message) {
        this._users.forEach((username, user) => user.receiveMessage(message));
    }
}

wsConnection.on("connection", ws => {
    const user = new User(ws);
    clients.add(user);
    user.connection.on("message", function (data) {
        const message = JSON.parse(data);
        switch (message.command) {
            case "login":
                user.loginChannel(message.channel, message.username);
                return;
            case "logout":
                user.logoutChannel(message.channel);
                return;
            case "sendMessage":
                user.sendMessage(message.channel, message.text);
                return;
            case "exitChat":
                user.exitChat();
                return;
            default:
                ws.send("Unknown command ");
                return;
        }
    });

    user.connection.on("close", function () {
        clients.delete(user);
    });
});
