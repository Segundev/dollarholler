const { default: tailwindConfig } = require('./tailwind.config.cjs');

module.export = {
	tailwindConfig: './tailwind.config.cjs',
	useTabs: false,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	plugins: [require('prettier-plugin-tailwindcss')]
};
