'use strict';

const extractPathRegex = /\s+at.*(?:\(|\s)(.*)\)?/;
const pathRegex = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/babel-polyfill\/.*)?\w+)\.js:\d+:\d+)|native)/;

module.exports = stack => {
	return stack.replace(/\\/g, '/')
		.split('\n')
		.filter(x => {
			const pathMatches = x.match(extractPathRegex);
			if (pathMatches === null || !pathMatches[1]) {
				return true;
			}

			return !pathRegex.test(pathMatches[1]);
		})
		.filter(x => x.trim() !== '')
		.join('\n');
};
