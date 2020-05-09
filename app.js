const mlog = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');

const parseFileName = path.parse(__filename);
const parseDirName = path.parse(__dirname);
mlog(' is flying');
//
mlog(parseFileName);
mlog(parseDirName);
//
console.log(`You have ${os.freemem}/${os.totalmem}`);
//
console.log('🆗', fs.readdirSync('./'));
fs.readdir('./', function(err, files) {
  if (err) {
    console.log('🙃', err);
  } else {
    console.log('😊', files);
  }
});
fs.readdir('./', (err, files) => {
  if (err) {
    console.log('😾', err);
  } else {
    console.log('😺', files);
  }
});
