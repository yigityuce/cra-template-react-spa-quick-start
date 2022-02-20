module.exports = {
	plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort'],
	parser: '@typescript-eslint/parser',
	root: true, // Make sure eslint picks up the config at the root of the directory
	parserOptions: {
		ecmaVersion: 2020, // Use the latest ecmascript standard
		sourceType: 'module', // Allows using import/export statements
		ecmaFeatures: {
			jsx: true, // Enable JSX since we're using React
		},
	},
	settings: {
		react: {
			version: 'detect', // Automatically detect the react version
		},
	},
	env: {
		browser: true, // Enables browser globals like window and document
		amd: true, // Enables require() and define() as global variables as per the amd spec.
		node: true, // Enables Node.js global variables and Node.js scoping.
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended', // Make sure this is always the last element in the array.
	],
	rules: {
		'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		eqeqeq: ['error', 'always'],
		'no-var': 'error',
		'prefer-const': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'react/no-unescaped-entities': 'off',
		'react/display-name': 'off',
		'react/no-direct-mutation-state': 'off',
		'no-irregular-whitespace': 'off',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'@typescript-eslint/ban-types': 'off',
		'rule-empty-line-before': 'off',
		// eslint-disable-next-line no-dupe-keys
		'prettier/prettier': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
	},
};
