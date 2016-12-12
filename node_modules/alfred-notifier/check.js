#!/usr/bin/env node
'use strict';
const readPkg = require('read-pkg');
const latestVersion = require('latest-version');
const semver = require('semver');
const execa = require('execa');
const CacheConf = require('cache-conf');
const notify = require('./lib/notify');
const pkg = require('./package.json');

const ONE_DAY = 86400000;

const workflowPath = process.cwd();
const conf = new CacheConf({projectName: pkg.name});

const checkNpm = pkg => latestVersion(pkg.name).then(version => ({
	latest: version,
	current: pkg.version,
	name: pkg.name
}));

readPkg(workflowPath)
	.then(pkg => {
		if (conf.has(pkg.name)) {
			// Skip checking if a valid entry exists
			return;
		}

		return checkNpm(pkg).then(res => {
			// Store the latest version in the cache for one day
			conf.set(res.name, res.latest, {maxAge: ONE_DAY});

			if (!semver.eq(res.latest, res.current)) {
				// Overwrite `info.plist` and reload the workflows
				return notify(workflowPath, `Update available: ${res.current} → ${res.latest}. Run \`npm install -g ${res.name}\``)
					.then(() => execa('open', ['-n', '-a', 'Alfred 3']));
			}
		});
	});
