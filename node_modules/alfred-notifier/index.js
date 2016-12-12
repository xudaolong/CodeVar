'use strict';
const path = require('path');
const execa = require('execa');

module.exports = () => {
	execa(path.join(__dirname, 'check.js'));
};
