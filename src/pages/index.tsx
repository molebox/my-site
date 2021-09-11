import Head from "next/head";
import Layout from "components/layout/layout";
import { Flex, useTheme, Text } from "@chakra-ui/react";
import Link from "components/link";
import uniqBy from 'lodash.uniqby'
import { getAllArticles, POSTS_PATH } from "utlis/mdx";

export default function Home({ allArticles }) {
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
          color="brand.white"
          fontWeight={400}
          letterSpacing={2}
        >
          richardhaines.dev
        </Text>
        <Link
          href="/posts"
          text="Blog posts"
          size={["xs", "sm", "md"]}
          uppercase
        />
        <Link
          href="/posts"
          text="Short stories"
          size={["xs", "sm", "md"]}
          uppercase
        />
        <Link
          href="/posts"
          text="Projects"
          size={["xs", "sm", "md"]}
          uppercase
        />
        <Link
          href="/posts"
          text="Who am i"
          size={["xs", "sm", "md"]}
          uppercase
        />
        <Text my={5} color="brand.silver" fontSize="mini">(Why complicate things?)</Text>
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
