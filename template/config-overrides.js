const path = require('path');
const { override, addWebpackResolve, useBabelRc } = require('customize-cra');

module.exports = override(
	addWebpackResolve({
		alias: {
			'@components': path.resolve(__dirname, './src/components'),
			'@config': path.resolve(__dirname, './src/config'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@models': path.resolve(__dirname, './src/models'),
			'@services': path.resolve(__dirname, './src/services'),
			'@store': path.resolve(__dirname, './src/store'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@routes': path.resolve(__dirname, './src/routes'),
		},
	}),
	useBabelRc()
);
