/* eslint-disable indent */
'use strict';
const path = require('path');
const fs = require('fs');
const del = require('del');
const pify = require('pify');
const userHome = require('user-home');

const fsP = pify(fs);

const idRegexp = /<key>bundleid<\/key>[\s]*<string>(.*?)<\/string>/;

// Remove the symlink
const unlink = dir => del(path.join(dir), {force: true});

// Cleanup config and cache data
const cleanup = dir => fsP.readFile(path.join(dir, 'info.plist'), 'utf8')
    .then(content => idRegexp.exec(content)[1])
    .then(bundleid => Promise.all([
		unlink(path.join(userHome, 'Library/Application Support/Alfred 3/Workflow Data', bundleid)),
		unlink(path.join(userHome, 'Library/Caches/com.runningwithcrayons.Alfred-3/Workflow Data', bundleid))
    ]));

module.exports = dir => cleanup(dir)
    .then(unlink(dir));
