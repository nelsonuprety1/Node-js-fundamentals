// Event loop example

const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request event');
  res.end('Hello world');
});

// listen is asynchronous
server.listen(8000, () => {
  console.log('Server listening on port : 8000');
});
