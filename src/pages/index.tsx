import Head from "next/head";
import Layout from "components/layout/layout";
import { Flex, useTheme, Text } from "@chakra-ui/react";
import Link from "components/link";
import uniqBy from 'lodash.uniqby'
import { getAllArticles, POSTS_PATH } from "utlis/mdx";

export default function Home({ allArticles }) {
  const theme = useTheme()
  console.log({ allArticles })
  const articles = uniqBy(allArticles, 'frontmatter.category')
  console.log({ articles })
  return (
    <Layout>
      <Head>
        <title>richardhaines.dev</title>
      </Head>
      <Flex w="100%" maxW={[400, 800]} as="section" minH="100vh" direction="column" justifyContent="center" m="0 auto">
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
            size={["xs", "sm", "md"]}
            uppercase
          />
          <Link
            href="/writing"
            text="Projects"
            size={["xs", "sm", "md"]}
            uppercase
          />
          <Link
            href="/writing"
            text="Who am i"
            size={["xs", "sm", "md"]}
            uppercase
          />
        </Flex>
        <Text my={5} color="brand.silver" fontSize="mini">
          Made with <Link isExternal font="body" href="https://nextjs.org/" size="mini" text="Next.js" />, <Link isExternal font="body" href="https://github.com/kentcdodds/mdx-bundler" size="mini" text="mdx-bundler" /> and <Link isExternal font="body" href="https://chakra-ui.com/" size="mini" text="Chakra-ui" />
        </Text>
      </Flex>
    </Layout>
  );
}

export async function getStaticProps() {
  const allArticles = getAllArticles(POSTS_PATH)

  return {
    props: {
      allArticles,
    },
  };
}

// Home.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//       <NestedLayout>{page}</NestedLayout>
//     </Layout>
//   )
// }
