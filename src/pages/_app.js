import "@fontsource/inconsolata/300.css"
import "@fontsource/inconsolata/400.css"
import "@fontsource/inconsolata/700.css"
import { ChakraProvider, Box } from "@chakra-ui/react"
import { theme } from 'utlis/theme'
import Fonts from "../components/fonts"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts/>
      <Box >
      {/* <Box bgGradient="linear-gradient(90deg, rgba(26,26,26,1) 0%, rgba(27,27,27,1) 12.5%, rgba(28,28,28,1) 25%, rgba(30,30,30,1) 37.5%, rgba(32,32,32,1) 50%, rgba(25,25,25,1) 62.5%, rgba(29,29,29,1) 75%, rgba(31,31,31,1) 87.5%, rgba(33,33,33,1) 100%)"> */}
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
