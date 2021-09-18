import React, { useEffect, useCallback, useState } from "react";
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
  // ogImage
}: PostProps) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const { title, description } = frontmatter;
  const [ogImage, setOgImage] = useState('')

  const getImage = useCallback(async () => {
    console.log('getImage called')
    try {
      const response = await axios.post(`https://richardhaines-og-image.vercel.app/api/get-og-image`, {
        title: title,
        description: description,
        slug: slug
      }, {
        headers: {
          'Access-Control-Allow-Methods': ['POST,OPTIONS']
        }
      })

      console.log(response.data)
      if (response) {
        setOgImage(response.data.image)
      }
    } catch (error) {
      console.log({ error })
    }
  }, [description, slug, title])

  useEffect(() => {
    getImage()
  }, [getImage])

  return (
    <PostLayout>
      <NextSeo
        title={title}
        description={description}
        canonical={`https://www.richardhaines.dev/writing/${slug}`}
        openGraph={{
          url: `https://www.richardhaines.dev/writing/${slug}`,
          title: title,
          description: description,
          images: [
            { url: `https://richardhaines-og-image.vercel.app/${ogImage}` },
          ],
          site_name: "richardhaines.dev",
        }}
        twitter={{
          handle: "@studio_hungry",
          site: "https://twitter.com/studio_hungry",
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

  // const response = await axios.post(`https://richardhaines-og-image.vercel.app/api/get-og-image`, {
  //   title: post.frontmatter.title,
  //   description: post.frontmatter.description,
  //   slug: params.slug
  // })

  // const image = response.data.image;

  return {
    props: {
      ...post,
      slug: params.slug,
      // ogImage: image || '',
    }
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
