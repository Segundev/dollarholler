const { default: tailwindConfig } = require('./tailwind.config.cjs');

module.export = {
	pluginSearchDirs: ["."],
	overrides: [{ "files": "*.svelte", "options": { "parser": "svelte" } }]
	tailwindConfig: './tailwind.config.cjs',
	useTabs: true,
	plugins: ["prettier-plugin-svelte"],
	singleQuote: true,
	trailingComma: "none",
	printWidth: 100,
	plugins: [require('prettier-plugin-tailwindcss')],
}
