/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: "#10151D",
                    navbar: {
                        DEFAULT: "#16202de6"
                    }
                },
                border: {
                    DEFAULT: "#808C9C" // #008AC9
                }
            },
            fontFamily: {
                "JetBrains": ['JetBrains', 'sans-serif']
            },
            fontSize: {
                'logo': '75px',
                '4xl': '50px',
                '3xl': '40px',
                '2xl': '30px',
                'xl': '28px',
                'lg': '26px',
                'md': '24px',
                'sm': '22px',
                'xs': '20px',
                '2xs': '18px',
                '3xs': '16px',
                '4xs': '14px',
                '5xs': '12px',
                '6xs': '10px',
                '7xs': '8px',
                '8xs': '6px',
                '9xs': '4px',
                '10xs': '2px',
            },
        },
    },
    plugins: [],
}