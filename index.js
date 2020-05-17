const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const logger = require('./middleware/logger');
const home = require('./routes/home');
const courses = require('./routes/courses');
const express = require('express');
const debug = require('debug')('app:startup');
const app = express();

app.set('view engine', 'pug'); 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(helmet());

app.use(logger);
app.use('/api/courses', courses);
app.use('/', home);

// * set DEBUG by adding in command 'export DEBUG=app:startup'
// * ex: 'export DEBUG=app:*, export DEBUG=app:startup, app:DB'
debug(`App Name: ${config.get('name')}`);
debug(`Mail Server: ${config.get('mail.host')}`);
debug(`Mail Pwd: ${config.get('mail.password')}`);


// * In MAC we can set NODE_ENV by adding in command 'export NODE_ENV=prod'
// * In WINDOWS we can set NODE_ENV by adding command 'set NODE_ENV=prod'
if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  debug('🐮 Morgon Enabled...');
}

const port = process.env.PORT || 5000;
// * In MAC we can set port by adding command 'export PORT=5000'
// * In WINDOWS we can set port by adding command 'set PORT=5000'

app.listen(port, () => debug(`Listening on port ${port} ⏰`));

