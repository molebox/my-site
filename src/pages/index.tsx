import Head from "next/head";
import Layout from "components/layout/layout";
import { Flex, useTheme, Text } from "@chakra-ui/react";
import Link from "components/link";
import Footer from "components/layout/footer";
import ExternalLink from "components/external-link";
import { GetServerSideProps } from "next";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import { Sun } from "components/sun";

export default function Home({weather}) {
  const theme = useTheme();

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

      if (weather.toLowerCase().includes("rain") || weather.toLowerCase().includes("drizzle")) {
        confetti({
          particleCount: 2,
          startVelocity: 0,
          ticks: ticks,
          origin: {
            x: Math.random(),
            y: 0
          },
          colors: ["#808080"],
          shapes: ["circle"],
          gravity: randomInRange(4.4, 2.6),
          scalar: randomInRange(0.4, 0.5),
          drift: randomInRange(-0.4, 0.4),
          disableForReducedMotion: true,
        });
    
        if (timeLeft > 0) {
          requestAnimationFrame(frame);
        }
      } else if (weather.toLowerCase().includes("snow") || weather.toLowerCase().includes("sleet") || weather.toLowerCase().includes("ice")) {
        confetti({
          particleCount: 1,
          startVelocity: 0,
          ticks: ticks,
          origin: {
            x: Math.random(),
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
      }

      frame()
    
  }, [weather])
  return (
    <Layout>
      <Head>
        <title>richardhaines.dev</title>
      </Head>
      {weather.toLowerCase().includes("sunny") || weather.toLowerCase().includes("clear") && <Sun />}
      <Sun/>
      <Flex
        as="section"
        w="100%"
        maxW={[300, 800]}
        minH="100vh"
        direction="column"
        justifyContent="center"
        m="0 auto"
      >
        <Text
          className="title"
          as="h1"
          fontFamily="heading"
          fontSize={["xs", "xs", "sm", "sm"]}
          color="brand.grey"
          fontWeight={400}
          letterSpacing={2}
        >
          richardhaines.dev
        </Text>
        <Text
          className="chapters"
          as="h2"
          fontFamily="body"
          fontSize="mini"
          color="brand.silver"
          fontWeight={400}
          letterSpacing={2}
          textTransform="uppercase"
          my={5}
          borderBottom={`solid 2px ${theme.colors.brand.silver}`}
          animation="expand border-bottom .5s ease-in"
          css={`
            @keyframes expand {
              from: {
                transform: scale(0);
              }
              to: {
                transform: scale(1);
              }
            }
          `}
        >
          chapters
        </Text>
        <Flex direction="column" w="fit-content">
          <Link
            className="writing"
            href="/writing"
            text="Writing"
            size={["sm", "md"]}
            uppercase
          />
          <Link
            className="projects"
            href="/projects"
            text="Projects"
            size={["sm", "md"]}
            uppercase
          />
          <Link
            className="who"
            href="/who-am-i"
            text="Who am i"
            size={["sm", "md"]}
            uppercase
          />
        </Flex>
        <Text my={5} color="brand.silver" fontSize="mini">
          Made with{" "}
          <ExternalLink
            font="body"
            href="https://nextjs.org/"
            size="mini"
            text="Next.js"
          />
          ,{" "}
          <ExternalLink
            font="body"
            href="https://github.com/kentcdodds/mdx-bundler"
            size="mini"
            text="mdx-bundler"
          />{" "}
          and{" "}
          <ExternalLink
            font="body"
            href="https://chakra-ui.com/"
            size="mini"
            text="Chakra-ui"
          />
        </Text>
      </Flex>
      <Footer />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({req}) => {
  console.log(req.headers)
  const weather: string | string[] = req.headers['x-visitors-weather'] || 'No weather'
  console.log(weather)
  return {
    props: {
      weather
    },
  }
}
