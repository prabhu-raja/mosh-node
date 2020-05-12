const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
  console.log('Listener called & received ', arg);
});
logger.log('Calling from App');