import Head from "next/head";
import Layout from "components/layout/layout";
import { Flex, useTheme, Text } from "@chakra-ui/react";
import Link from "components/link";
import Footer from "components/layout/footer";
import ExternalLink from "components/external-link";

export default function Home() {
  const theme = useTheme()

  return (
    <Layout>
      <Head>
        <title>richardhaines.dev</title>
      </Head>
      <Flex
        as="section"
        w="100%"
        maxW={[300, 800]}
        minH="100vh"
        direction="column"
        justifyContent="center"
        m="0 auto">
        <Text
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
          as="h2"
          fontFamily="body"
          fontSize="mini"
          color="brand.silver"
          fontWeight={400}
          letterSpacing={2}
          textTransform="uppercase"
          my={5}
          borderBottom={`solid 2px ${theme.colors.brand.silver}`}
        >
          chapters
        </Text>
        <Flex direction="column" w="fit-content">
          <Link
            href="/writing"
            text="Writing"
            size={["sm", "md"]}
            uppercase
          />
          <Link
            href="/projects"
            text="Projects"
            size={["sm", "md"]}
            uppercase
          />
          <Link
            href="/who-am-i"
            text="Who am i"
            size={["sm", "md"]}
            uppercase
          />
        </Flex>
        <Text my={5} color="brand.silver" fontSize="mini">
          Made with <ExternalLink font="body" href="https://nextjs.org/" size="mini" text="Next.js" />, <ExternalLink font="body" href="https://github.com/kentcdodds/mdx-bundler" size="mini" text="mdx-bundler" /> and <ExternalLink font="body" href="https://chakra-ui.com/" size="mini" text="Chakra-ui" />
        </Text>
      </Flex>
      <Footer />
    </Layout>
  );
}

// Home.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//       <NestedLayout>{page}</NestedLayout>
//     </Layout>
//   )
// }
