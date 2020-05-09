const mlog = require('./logger');
const path = require('path');

const parseFileName = path.parse(__filename);
const parseDirName = path.parse(__dirname);
mlog(' is flying');
mlog(parseFileName);
mlog(parseDirName);