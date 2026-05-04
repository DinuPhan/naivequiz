tailwind.config = {
    darkMode: "class",
    future: { hoverOnlyWhenSupported: true },
    theme: {
        extend: {
            colors: {
                primary: "#436700",
                "on-primary": "#ffffff",
                "primary-container": "#bef158",
                "on-primary-container": "#111f00",
                "secondary-container": "#ccf078",
                "on-secondary-fixed": "#151f00",
                surface: "#fff8ef",
                "surface-container-highest": "#e9e2d3",
                "on-surface-variant": "#4c473e",
                "inverse-surface": "#34302a",
                success: "#436700",
                error: "#ba1a1a"
            },
            fontFamily: {
                headline: ["Plus Jakarta Sans", "sans-serif"],
                body: ["Lexend", "sans-serif"]
            }
        }
    }
};
