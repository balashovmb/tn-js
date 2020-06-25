let socket = new WebSocket("ws://localhost:8080");
const messagesRoot = document.getElementById('messages-root');

socket.onopen = event => {
  console.log("Connection established", event);
};

socket.onmessage = event => {
  console.log("Message received: ", event.data);
  const div = document.createElement('div');
  div.innerText = event.data;
  messagesRoot.append(div);
};

socket.onclose = event => {
  if (event.wasClean) {
    console.log("Closed correct", event.code);
  } else {
    console.log("Closed wrong", event.code);
  }
};
