/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "../app/**/*.{ts,tsx}",
        "../components/**/*.{ts,tsx}",
        "../content/**/*.mdx",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                neutral: {
                    350: "#C3C3C3",
                },
                redc: "#FC057C",
                orangec: "#FF5700",
                yellowc: "#eab308",
                greenc: "#CCFF00",
                bluec: "#002EFF",
                pinkc: "#FF00B6",
            },
            textColor: {
                skin: {
                    base: "var(--text-primary)",
                    secondary: "var(--text-secondary)",
                    accent: "var(--accent)",
                },
            },
            backgroundColor: {
                skin: {
                    base: "var(--background)",
                    card: "var(--card-bg)",
                },
            },
            borderColor: {
                skin: {
                    base: "var(--border)",
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
            animation: {
                "fade-in": "fade-in 1.5s ease-in-out forwards",
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
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
        "bg-[#F1E05A]",
        "bg-[#3078C6]",
        "bg-[#3572A5]",
        "bg-[#000080]",
        "bg-[#F7A31E]",
        "bg-[#555555]",
        "bg-[#F34B7D]",
        "bg-[#188601]",
        "bg-[#DEA584]",
        "bg-[#F05137]",
        "bg-[#663399]",
        "bg-white/[10%]",
        "group-hover:bg-[#F1E05A]",
        "group-hover:bg-[#3078C6]",
        "group-hover:bg-[#3572A5]",
        "group-hover:bg-[#000080]",
        "group-hover:bg-[#F7A31E]",
        "group-hover:bg-[#555555]",
        "group-hover:bg-[#F34B7D]",
        "group-hover:bg-[#188601]",
        "group-hover:bg-[#DEA584]",
        "group-hover:bg-[#F05137]",
        "group-hover:bg-[#663399]",
        "light",
        "dark",
    ],
};
