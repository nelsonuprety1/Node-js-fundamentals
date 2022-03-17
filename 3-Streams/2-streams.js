/* 
Streams are used to read or write sequentially.
 Basically, when we have to handle and manipulate streaming data for example continuous source or a big file, streams come in handy. 
 In node we have 4 streams:

 1) writable: used to write data sequentially
 2) readable: used to read data sequentially
 3) duplex: used to both read and write data sequentially
 4) transform: data can be modified while reading and writing
*/

const { createReadStream } = require('fs');

// invoking the create read stream
const stream = createReadStream('../content/big.txt', {
  // The highWaterMark option gives you some control on the amount of "buffer memory" used.
  // Once you've written more than the amount specified, write will return false to give you an opportunity to stop writing.
  highWaterMark: 90000,
  encoding: 'utf-8',
});

// the data event is emitted whenever the stream is reliquishing ownership of a chunk of data to a consumer
stream.on('data', result => {
  console.log(result);
});

// error event
stream.on('error', err => {
  console.log(err);
});
