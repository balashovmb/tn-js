const timestamp = Math.floor(Date.now() / 1000);
const cluster = 12;
const type = 1;
const userId = 1234567;
const a = timestamp.toString(16);
const b = cluster.toString(16);
const c = type.toString(16);
const d = userId.toString(16);
console.log('Id: ' + a + b + c + d);
