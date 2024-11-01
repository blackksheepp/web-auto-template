module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {

            }
        },
    },
    safelist: [
        {
            pattern: /bg-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|500|600|700|800|900)/,
        },
    ],
    plugins: [],
};
