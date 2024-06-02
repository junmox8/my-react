const { defaults } = require('jest-config');

module.exports = {
	...defaults,
	rootDir: process.cwd(),
	moduleDirectories: [
		// 对于 React ReactDOM
		'dist/node_modules',
		// 对于第三方依赖
		...defaults.moduleDirectories
	],
	testEnvironment: 'jsdom'
};
