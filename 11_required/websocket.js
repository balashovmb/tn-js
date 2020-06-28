let socket = new WebSocket("ws://localhost:8080");
const messagesRoot = document.getElementById('messages-root');

socket.onopen = event => {
    console.log("Connection established", event);
};

socket.onmessage = event => {
    const message = JSON.parse(event.data);
    const div = document.createElement('div');
    if (message.service){
        console.log(message.text);
        div.innerHTML = message.text;
    } else {
        div.innerHTML = `In channel: ${message.channelName} user: ${message.username} wrote '${message.message}'`
    }
    messagesRoot.append(div);

};

socket.onclose = event => {
    if (event.wasClean) {
        console.log("Closed correct", event.code);
    } else {
        console.log("Closed wrong", event.code);
    }
};
