const mlog = require('./logger');
const path = require('path');
const os = require('os');

const parseFileName = path.parse(__filename);
const parseDirName = path.parse(__dirname);
mlog(' is flying');
//
mlog(parseFileName);
mlog(parseDirName);
//
console.log(`You have ${os.freemem}/${os.totalmem}`);