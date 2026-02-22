/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#E67E22",
                "background-light": "#FFFFFF",
                "background-dark": "#0F172A",
                navy: {
                    800: "#1E293B",
                    900: "#0F172A",
                    950: "#020617"
                }
            },
            fontFamily: {
                display: ["Coolvetica", "sans-serif"],
                body: ["Coolvetica", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
            },
        },
    },
    plugins: [
        typography,
        forms,
        containerQueries,
    ],
}
