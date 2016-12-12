'use strict';
const path = require('path');
const pify = require('pify');
const userHome = require('user-home');
const pathExists = require('path-exists');
const bplistParser = require('bplist-parser');
const untildify = require('untildify');

const bplist = pify(bplistParser);
const settings = path.join(userHome, '/Library/Preferences/com.runningwithcrayons.Alfred-Preferences-3.plist');

module.exports = () => pathExists(settings)
	.then(exists => {
		if (!exists) {
			throw new Error(`Alfred preferences not found at location ${settings}`);
		}

		return bplist.parseFile(settings);
	})
	.then(data => {
		const syncfolder = data[0].syncfolder || '~/Library/Application Support/Alfred 3';

		return untildify(`${syncfolder}/Alfred.alfredpreferences`);
	});
