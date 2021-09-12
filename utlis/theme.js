import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    styles: {
        global: {
            "html, body": {
                scrollBehavior: "smooth"
            },
        },
    },
    fonts: {
        heading: "Pomfret Web",
        body: "Inconsolata",
    },
    fontSizes: {
        mini: "12pt",
        xs: "16pt",
        sm: "20pt",
        md: "50pt",
        lg: "80pt",
        massive: "100pt",
        header: "20pt",
    },
    colors: {
        brand: {
            silver: "#959595",
            // silver: "#7A7A7A",
            grey: "#EDEDED",
            orange: "#FF9D00",
            white: "#F4F4F4",
            black: "#1A1A1A"
        },
    },
})