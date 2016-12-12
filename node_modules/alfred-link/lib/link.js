'use strict';
const fs = require('fs');
const pify = require('pify');
const del = require('del');

const fsP = pify(fs);

module.exports = (src, dest) => del(dest, {force: true}).then(() => fsP.symlink(src, dest));
