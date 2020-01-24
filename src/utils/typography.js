import Typography from "typography"

const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.7,
    scaleRatio: 3,
    headerFontFamily: [
        "Poppins",
        "Helvetica Neue",
        "Segoe UI",
        "Helvetica",
        "Arial",
        "sans-serif",
    ],
    headerColor: "hsl(0, 0%, 0%);",
    bodyFontFamily: [
        "Karla",
        "Georgia", 
        "sans-serif"
    ],
    bodyColor: "hsl(0, 0%, 26%);",
    googleFonts: [
        {
            name: "Poppins",
            styles: [
                "700"
            ]
        },
        {
            name: "Karla",
            styles: [
                "400",
                "500",
                "700"
            ]
        }
    ]
})

export default typography