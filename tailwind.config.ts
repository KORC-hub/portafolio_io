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
                highlight: "var(--highlight)",
            },
            typography: {
                DEFAULT: {
                    css: {
                        h1: {
                            color: "var(--foreground)",
                            fontWeight: "700",
                        },
                        h2: {
                            color: "var(--foreground)",
                            borderBottom: "1px solid var(--foreground)",
                            borderOpacity: "0.9",
                        },
                        strong: {
                            color: "var(--highlight)",
                        },
                        p: {
                            color: "var(--foreground)",
                        },
                        li: {
                            color: "var(--foreground)",
                        },
                    },
                },
            },
        },
    },
    plugins: [typography],
} satisfies Config;
