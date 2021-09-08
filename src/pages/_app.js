import "@fontsource/inconsolata/300.css"
import "@fontsource/inconsolata/400.css"
import "@fontsource/inconsolata/700.css"
import { ChakraProvider } from "@chakra-ui/react"
import { MDXEmbedProvider } from 'mdx-embed';
import { theme } from 'utlis/theme'
import Fonts from "../components/fonts"

function MyApp({ Component, pageProps }) {
  return (
    <MDXEmbedProvider>
      <ChakraProvider theme={theme}>
        <Fonts/>
          <Component {...pageProps} />
      </ChakraProvider>
    </MDXEmbedProvider>
  )
}

export default MyApp
