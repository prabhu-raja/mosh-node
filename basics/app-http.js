const http = require('http');
const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.write('Hello Canada :)');
    res.end();
  } else if(req.url === '/api/courses') {
    res.write(JSON.stringify([1,2,3]));
    res.end();
  }
});

server.listen(5000);
console.log('Listening on Port 5000 👮‍♀️');
