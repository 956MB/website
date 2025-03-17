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
                'redc': '#FC057C',
                'orangec': '#FF5700',
                'yellowc': '#eab308',
                'greenc': '#CCFF00',
                'bluec': '#002EFF',
                'pinkc': '#FF00B6',
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
		function ({ addVariant }) {
			addVariant("child", "& > *");
			addVariant("child-hover", "& > *:hover");
		},
	],
	safelist: [
		'bg-[#F1E05A]',
		'bg-[#3078C6]',
		'bg-[#3572A5]',
		'bg-[#000080]',
		'bg-[#555555]',
		'bg-[#F34B7D]',
		'bg-[#188601]',
		'bg-[#DEA584]',
		'bg-[#F05137]',
		'bg-[#663399]',
		'bg-white/[10%]',
	],
};
