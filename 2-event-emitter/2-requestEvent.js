const http = require('http');
const PORT = 8000;

// Using Event Emmiter API
// behind the scene server emits the request event
const server = http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end(`Welcome`);
});

server.listen(PORT);

/*
My questions and answer from stack overflow

This is an http server. One of the events you can listen for on an http server is the request event that indicates there's an incoming http request. 
You can see all the events that the http server object supports here.

This particular event provides two arguments - the req and res objects.
 To send a response back to the client, you use the response object res.
  You can use res.write() and/or res.end(). 
  This particular example uses res.end('Welcome') to send a simple text response back to the client.

There is no .emit() because that's not how the http server object works. 
Internally, it uses .emit() to create events that listeners can get notified about, 
but when you are listening for an event, you don't use .emit() yourself. 
Instead, you use the data that comes with the event to act appropriately for that particular event. 
In this case, you use the request and response objects which are sent with the request event.


1)My confusion is on line 8 (server.on) . 
After we use server.on it will listen for an event but why is there server.emit not being used? 


--- The server itself is using server.emit() internally to trigger events that you can listen to.

And what is doing the work of server.emit?
--- It's not clear what you're expecting here. 
.emit() is a method on an eventEmitter object and it is called to trigger events that other code can listen for. 
The http server object uses it internally to trigger events, but sending an http response has nothing at all to do with the eventEmitter object or .emit().
 Instead, you use methods on the response object to send an http response back to the client.

2) Is it compulsory to write emit after on or not?
--- No. You would not usually use .emit() in a .on() listener. But, it really depends upon what the event is and how to code that triggered the event is written. You could theoretically call .emit() and trigger other events in response to an incoming event, but that's not required and is not usually how things are done. For example, if you were listening for keyboard events or mouse click events, you would just act on those events (doing whatever you wanted based on the incoming keyboard or mouse click events) and not use .emit() to trigger more events.


*/
