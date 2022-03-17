console.log('Stream Example');

const http = require('http');
const fs = require('fs');

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('../content/moreBig.txt', 'utf-8');
    // res.end(text);
    const fileStream = fs.createReadStream('../content/moreBig.txt', 'utf-8');
    fileStream.on('open', () => {
      // Pipe will push the data from write stream to read stream
      fileStream.pipe(res);
    });
    fileStream.on('error', err => {
      res.end(err);
    });
  })
  .listen(8000);
