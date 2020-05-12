const events = require('events');
const emitter = new events.EventEmitter();

// * Register a listener
emitter.on('messageLogged', (msg) => {
  console.log(`the event ${msg}`);;
});

// * Raise an event
emitter.emit('messageLogged', '🔥');

