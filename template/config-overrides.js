const path = require('path');

module.exports = {
	webpack: function (config, _env) {
		// ...add your webpack config
		config.resolve = {
			...config.resolve,
			alias: {
				...config.alias,
				'@components': path.resolve(__dirname, './src/components'),
				'@config': path.resolve(__dirname, './src/config'),
				'@models': path.resolve(__dirname, './src/models'),
				'@services': path.resolve(__dirname, './src/services'),
				'@store': path.resolve(__dirname, './src/store'),
				'@utils': path.resolve(__dirname, './src/utils'),
				'@assets': path.resolve(__dirname, './src/assets'),
				'@routes': path.resolve(__dirname, './src/routes'),
			},
		};

		return config;
	},
	paths: function (paths, _env) {
		// ...add your paths config
		return paths;
	},
};
