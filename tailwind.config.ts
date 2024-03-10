import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        fontFamily: {
            sans: ["var(--font-inter)", ...fontFamily.sans],
        },
        extend: {},
    },
    plugins: [],
};

export default config;
