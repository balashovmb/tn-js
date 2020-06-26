const login = {
    command: 'login',
    channel: 'channelName1',
    username: 'username1'
}

const message = {
    command: 'sendMessage',
    channel: 'channelName1', 
    text: 'HI!'
}

const message2 = {
    command: 'sendMessage',
    channel: 'channelName1', 
    text: 'BYE!'
}

const logout = {
    command: 'logout',
    channel: 'channelName1',
}

const exit = {
    command: 'exitChat'
}

setTimeout(function sendMsgs(){
    socket.send(JSON.stringify(login));
    socket.send(JSON.stringify(message));
    socket.send(JSON.stringify(message2));
    socket.send(JSON.stringify(logout));
    socket.send(JSON.stringify(exit));
},500);
