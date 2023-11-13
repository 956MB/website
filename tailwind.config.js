/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./content/**/*.mdx",
	],
	theme: {
		extend: {
			colors: {
				neutral: {
					350: "#C3C3C3",
				},
			},
			backdropBlur: {
				smallest: "1px",
			},
			screens: {
				"3xl": "1792px",
			},
			scale: {
				80: "0.8",
				175: "1.75",
			},
			fontFamily: {
				interbold: ["var(--font-inter-bold)"],
			},
			typography: {
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": {
							content: "none",
						},
						"blockquote p:first-of-type::after": {
							content: "none",
						},
					},
				},
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/line-clamp"),
		function ({ addVariant }) {
			addVariant("child", "& > *");
			addVariant("child-hover", "& > *:hover");
		},
	],
};
