const events = require('events');

class Logger extends events.EventEmitter {
  log(msg) {
    console.log(msg);
    this.emit('messageLogged', {id: 1, url: 'https://abc.com'})
  }
}

module.exports = Logger;