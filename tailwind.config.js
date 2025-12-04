/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                    950: '#0f172a',
                    900: '#1e3a8a',
                    800: '#1e40af',
                    500: '#3b82f6',
                },
                purple: {
                    900: '#581c87',
                    500: '#a855f7',
                }
            }
        },
    },
    plugins: [],
}
