import React, { useEffect, useRef, useState } from "react";
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
import { buildUrl } from 'cloudinary-build-url'
import image from "next/image";

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
  // const [ogImage, setOgImage] = useState<string>('')

  // useEffect(() => {
  //   console.log('useEffect run')

  //   async function createOgImage() {
  //     const response = await axios.post(`https://richardhaines-og-image.vercel.app/api/get-og-image`, {
  //       title: title,
  //       description: description,
  //       slug: slug
  //     },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Access-Control-Allow-Origin': '*',
  //         }
  //       })
  //     console.log('serverless function called')
  //     console.log(response.data)
  //     const { imageExists } = response.data;
  //     if (imageExists) {
  //       const image = buildUrl(`og_images/${slug}`, {
  //         cloud: {
  //           cloudName: 'richardhaines',
  //         },
  //       })

  //       console.log({ image })

  //       setOgImage(image)
  //     }
  //   }

  //   createOgImage()


  // });

  return (
    <PostLayout>
      <NextSeo
        title={title}
        description={description}
        canonical={`https://www.richardhaines.dev/${slug}`}
        openGraph={{
          url: `https://www.richardhaines.dev/${slug}`,
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
  const paths = getAllArticles(POSTS_PATH).map(({ slug }) => ({
    params: { slug },
  }));
  let image = ''

  const response = await axios.post(`https://richardhaines-og-image.vercel.app/api/get-og-image`, {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    slug: params.slug
  },
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    })
  console.log('serverless function called')
  console.log({ response })

  image = buildUrl(`og_images/${params.slug}`, {
    cloud: {
      cloudName: 'richardhaines',
    },
  })

  console.log({ image })

  return {
    props: {
      ...post,
      slug: params.slug,
      ogImage: image,
      paths: paths ? paths : null,
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
