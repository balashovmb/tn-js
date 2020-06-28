const login = {
    command: 'login',
    channel: 'channelName1',
    username: 'username2'
}

setTimeout(function sendMsgs() {
    socket.send(JSON.stringify(login));
}, 500);
