import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            typography: {
                DEFAULT: {
                    css: {
                        h1: {
                            color: "white",
                            fontWeight: "700",
                        },
                        h2: {
                            color: "white",
                            borderBottom: "1px solid gray",
                        },
                        strong: {
                            color: "#2accf9",
                        },
                    },
                },
            },
        },
    },
    plugins: [typography],
} satisfies Config;
