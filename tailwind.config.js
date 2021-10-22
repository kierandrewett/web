module.exports = {
    purge: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or "media" or "class"
    theme: {
        extend: {},
        screens: {
            xs: "240px",
            sm: "480px",
            md: "768px",
            lg: "976px",
            lg2: "1280px",
            xl: "1920px",
        },
        fontFamily: {
            sans: [
                "Clash",
                "-apple-system", 
                "BlinkMacSystemFont", 
                "Segoe UI", 
                "Roboto", 
                "Oxygen", 
                "Ubuntu", 
                "Cantarell", 
                "Open Sans", 
                "Helvetica Neue", 
                "sans-serif"
            ]
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
