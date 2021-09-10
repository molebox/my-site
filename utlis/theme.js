import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
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
        header: "20pt",
    },
    colors: {
        brand: {
            silver: "#959595",
            grey: "#EDEDED",
            orange: "#FF9D00",
            white: "#F4F4F4",
            black: "#1A1A1A"
        },
    },
})