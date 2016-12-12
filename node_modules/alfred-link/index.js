'use strict';
const path = require('path');
const pathExists = require('path-exists');
const readPkgUp = require('read-pkg-up');
const resolveAlfredPrefs = require('resolve-alfred-prefs');
const sudoBlock = require('sudo-block');
const plistTransform = require('./lib/plist-transform');
const link = require('./lib/link');
const unlink = require('./lib/unlink');

// Prevent running as `sudo`
sudoBlock();

const getWorkflowDir = () => resolveAlfredPrefs().then(prefs => path.join(prefs, 'workflows'));

const readPkg = workflowDir => pathExists(workflowDir)
	.then(exists => {
		if (!exists) {
			throw new Error(`Workflow directory \`${workflowDir}\` does not exist`);
		}

		return readPkgUp();
	});

exports.link = opts => {
	const options = Object.assign({
		transform: true
	}, opts);

	let workflowDir;

	return getWorkflowDir()
		.then(dir => {
			workflowDir = dir;

			return readPkg(dir);
		})
		.then(result => {
			const pkg = result.pkg;
			const filePath = result.path;

			const src = path.dirname(filePath);
			const dest = path.join(workflowDir, pkg.name);

			if (!options.transform) {
				return link(src, dest);
			}

			return plistTransform(path.dirname(filePath), pkg)
				.then(() => link(src, dest));
		});
};

exports.unlink = () => getWorkflowDir()
	.then(dir => readPkg(dir)
		.then(res => unlink(path.join(dir, res.pkg.name)))
	);
