const login = {
    command: 'login',
    channel: 'channelName1',
    username: 'username2'
}


setTimeout(function tests(){
    socket.send(JSON.stringify(login));
},500);
