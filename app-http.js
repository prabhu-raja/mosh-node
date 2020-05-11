const http = require('http');
const server = http.createServer();

server.on('connection', () => {
  console.log('New connection ');
});
server.listen(5000);
console.log('Listening on Port 5000 👮‍♀️');
