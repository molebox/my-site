import "@fontsource/inconsolata/300.css"
import "@fontsource/inconsolata/400.css"
import "@fontsource/inconsolata/700.css"
import { ChakraProvider, Box } from "@chakra-ui/react"
import { MDXEmbedProvider } from 'mdx-embed';
import { theme } from 'utlis/theme'
import Fonts from "../components/fonts"
import Provider from '../../utlis/context'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
        <ChakraProvider theme={theme}>
          <Fonts />
          <MDXEmbedProvider>
            <Component {...pageProps} />
          </MDXEmbedProvider>
        </ChakraProvider>
    </Provider>
  )
}

export default MyApp
