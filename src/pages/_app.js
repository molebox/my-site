import "@fontsource/inconsolata/300.css"
import "@fontsource/inconsolata/400.css"
import "@fontsource/inconsolata/700.css"
import { ChakraProvider, Box } from "@chakra-ui/react"
import { MDXEmbedProvider } from 'mdx-embed';
import { theme } from 'utlis/theme'
import Fonts from "../components/fonts"
import Provider from '../../utlis/context'
import confetti from "canvas-confetti";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const duration = 10000 * 1000;
    const animationEnd = Date.now() + duration;
    let skew = 1;
  
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    const frame = () => {
      const timeLeft = animationEnd - Date.now();
      const ticks = Math.max(200, 500 * (timeLeft / duration));
      skew = Math.max(0.8, skew - 0.001);
  
      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          // since particles fall down, skew start toward the top
          y: Math.random() * skew - 0.2,
        },
        colors: ["#ffffff"],
        shapes: ["circle"],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 0.5),
        drift: randomInRange(-0.4, 0.4),
        disableForReducedMotion: true,
      });
  
      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    };

      // frame()
    
  }, [])

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
