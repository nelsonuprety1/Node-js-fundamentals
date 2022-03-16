/**
 On the backend side, Node.js offers us the option to build a similar system
  using the events module.
This module, in particular, offers the EventEmitter class, which we'll use to handle our events.
 */

const EventEmitter = require('events');

// instance of our class or object
const customEmitter = new EventEmitter();
/*Important method in this object 
1) on - listen for an event
2) emit - emit an event
*/

// customEmitter.on(eventName, listener)
customEmitter.on('response', () => {
  console.log(`data received`);
});

customEmitter.on('data', (name, id) => {
  console.log(`Info received: ${name},${id}`);
});

// customEmitter.emit(eventname)
customEmitter.emit('response');
customEmitter.emit('data', 'Nelson', 23);

/**
 *** Important Tip
 1) We can have as many methods as we want.
 2) The order matters. We cannot call emit before on method.
 3) We can pass the arguments when we are emmiting the event. (customEmitter.emit('data', 'Nelson', 23);)
 */
