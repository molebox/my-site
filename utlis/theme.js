import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    fonts: {
        heading: "Pomfret Web",
        body: "Inconsolata",
    },
    fontSizes: {
        xs: "16pt",
        sm: "30pt",
        md: "60pt",
        lg: "90pt",
        header: "20pt"
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