'use strict';
const path = require('path');
const fs = require('fs');
const plist = require('plist');
const pify = require('pify');

const fsP = pify(fs);

// Fixes some inconsistencies when running `plist.parse`
// https://github.com/TooTallNate/plist.js/issues/75
const fix = obj => {
	for (const key of Object.keys(obj)) {
		const val = obj[key];

		if (val === null || val === undefined) {
			obj[key] = '';
		} else if (Array.isArray(val)) {
			obj[key] = val.map(fix);
		} else if (typeof val === 'object') {
			obj[key] = fix(val);
		}
	}

	return obj;
};

module.exports = (dir, pkg) => {
	const file = path.join(dir, 'info.plist');

	return fsP.readFile(file, 'utf8')
		.then(content => {
			const data = fix(plist.parse(content));
			data.version = pkg.version || '';
			data.description = pkg.description || '';
			data.webaddress = pkg.homepage || pkg.author.url || '';
			data.createdby = pkg.author.name || '';

			return fsP.writeFile(file, plist.build(data));
		});
};
