'use strict';

function hook(type, opts, cb) {
	if (typeof opts !== 'object') {
		cb = opts;
		opts = {};
	}

	var std = process[type];
	var write = std.write;

	std.write = function (str, enc, cb2) {
		var cbRet = cb(str, enc);

		if (opts.silent) {
			return typeof cbRet === 'boolean' ? cbRet : true;
		}

		var ret = Buffer.isBuffer(cbRet) || typeof cbRet === 'string' ? cbRet : str;
		return write.call(std, ret, enc, cb2);
	};

	return function () {
		std.write = write;
	};
}

var x = module.exports = function (opts, cb) {
	var unhookStdout = hook('stdout', opts, cb);
	var unhookStderr = hook('stderr', opts, cb);

	return function () {
		unhookStdout();
		unhookStderr();
	};
};

x.stdout = hook.bind(null, 'stdout');
x.stderr = hook.bind(null, 'stderr');
