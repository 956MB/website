/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./content/**/*.mdx",
	],
	darkMode: "class",
	theme: require("./.config/tailwind.config.js").theme,
	future: require("./.config/tailwind.config.js").future,
	plugins: require("./.config/tailwind.config.js").plugins,
	safelist: require("./.config/tailwind.config.js").safelist,
};
