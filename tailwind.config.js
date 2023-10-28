/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./content/**/*.mdx",
	],
	theme: {
		extend: {
            backdropBlur: {
                'smallest': '1px',
            },
            screens: {
                '3xl': '1792px',
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
        require('@tailwindcss/line-clamp'),
        function ({ addVariant }) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        }
    ],
};
