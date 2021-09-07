import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    fonts: {
        heading: "Pomfret Web",
        body: "Inconsolata",
    },
    colors: {
        brand: {
            grey: "#EDEDED",
            blue: "#0B315E",
            orange: "#FF9D00",
            white: "#F4F4F4",
            black: "#1A1A1A"
        },
    },
})