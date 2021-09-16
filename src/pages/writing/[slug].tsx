import React, {useEffect, useRef} from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { NextSeo } from "next-seo";
import {
  Frontmatter,
  getAllArticles,
  getSingleArticle,
  POSTS_PATH,
} from "utlis/mdx";
import { components } from "utlis/shortcodes";
import { Flex, Text, Box } from "@chakra-ui/react";
import PostLayout from "components/layout/page-layout";
import Toc, { PostDetails } from "components/writing/toc";
import axios from "axios";
import getOgImage from "api/get-og-image";

interface PostProps {
  previousArticle?: PostDetails | null;
  nextArticle?: PostDetails | null;
  code: string;
  frontmatter: Frontmatter;
  slug: string;
  ogImage: string;
}

export default function Post({
  code,
  frontmatter,
  previousArticle,
  nextArticle,
  slug,
  ogImage
}: PostProps) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const { title, description } = frontmatter;

  console.log({ogImage});
  // let ogImage = useRef<string | null>(null);

  // useEffect(() => {
  //   axios.post(`/api/get-og-image`, {
  //     path: `/?title=${title}&description=${description}`})
  //     .then(({ data }) => {
  //       console.log({data})
  //       ogImage.current = data.publicPath;
  //     })
  //     .catch((e) => console.log(e));
  // }, [title, description]);

  return (
    <PostLayout>
      <NextSeo
        title="Using More of Config"
        description="This example uses more of the available config options."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: `https://next-mdx-bundler-chakra-blog.vercel.app/${slug}`,
          title: title,
          description: description,
          images: [
            { url: `https://richardhaines-og-image.vercel.app/${ogImage}` },
          ],
          site_name: "richardhaines.dev",
        }}
        twitter={{
          handle: "@studio_hungry",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Flex
        direction={["column", "column", "column", "row"]}
        w="100%"
        mb={10}
        borderBottom="solid 2px"
        borderColor="brand.grey"
        minH={500}
      >
        <Flex
          direction="column"
          justifyContent="center"
          h="auto"
          w={["100%", "100%", "100%", "60%"]}
          py={5}
          px={10}
          bgColor="brand.silver"
          color="brand.black"
          fontWeight={700}
          borderRight={["none", "none", "none", "solid 2px #EDEDED"]}
        >
          <Box overflow="hidden">
            <Text
              className="reveal"
              fontFamily="heading"
              fontSize={["sm", "sm", "md", "lg"]}
              letterSpacing={2}
              css={`
                word-spacing: 12px;
              `}
              textTransform="uppercase"
            >
              {title}
            </Text>
          </Box>
          <Text
            my={[5, 0]}
            fontFamily="body"
            fontSize={["mini", "xs"]}
            letterSpacing={2}
          >
            {description}
          </Text>
        </Flex>
        <Toc previous={previousArticle} next={nextArticle} />
      </Flex>
      <Box w={[300, 400, 500, 1000]} m={["2rem auto", "0 1rem", "0 auto"]}>
        <Flex
          borderBottom="solid 2px #EDEDED"
          alignContent="center"
          justifyContent="center"
        >
          <Text
            fontFamily="heading"
            textTransform="uppercase"
            fontSize={["sm", "md"]}
            letterSpacing={2}
            color="brand.grey"
          >
            Content
          </Text>
        </Flex>
        <Component components={components} />
      </Box>
    </PostLayout>
  );
}

// Rendered at build time (server-side) and passes the props
// through to the page
export const getStaticProps = async ({ params }) => {
  const post = await getSingleArticle(POSTS_PATH, params.slug);
  const paths = getAllArticles(POSTS_PATH).map(({ slug }) => ({
    params: { slug },
  }));
  const title = post.frontmatter.title;
  const description = post.frontmatter.description;
  // let ogImage: string = 'un-assigned';
  // axios.post(`https://next-mdx-bundler-chakra-blog.vercel.app/api/get-og-image`, {
  //   path: `/?title=${title}&description=${description}`})
  //   .then(({ data }) => {
  //     console.log({data})
  //     ogImage = data.publicPath;
  //   })
  //   .catch((e) => console.log(e));
  // const ogImage = await axios.post(`https://next-mdx-bundler-chakra-blog.vercel.app/api/get-og-image`, {
  //     path: `/?title=${title}&description=${description}`
  // }
  // )
  const ogImage = await getOgImage(`/?title=${title}&description=${description}`);
  console.log({ogImage});
  return {
    props: {
      ...post,
      slug: params.slug,
      ogImage: ogImage || 'something went wrong',
      paths: paths ? paths : null,
    },
    revalidate: 1
  };
};

// Rendered at build time (server-side) Defines a list of dymanic paths to be rendered
export const getStaticPaths = async () => {
  const paths = getAllArticles(POSTS_PATH).map(({ slug }) => ({
    params: { slug },
  }));
  return {
    paths,
    fallback: false,
  };
};
