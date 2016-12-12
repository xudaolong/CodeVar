#!/usr/bin/env node
'use strict';
const alfredLink = require('./');

alfredLink.unlink().catch(err => {
	console.error(err);
	process.exit(1);
});
