import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllArticles, getSingleArticle, POSTS_PATH } from "utlis/mdx";
import { components } from "utlis/shortcodes";
import { Flex, Text, Box } from '@chakra-ui/react';
import PostLayout from 'components/post-layout/post-layout';
import Toc from 'components/post-layout/toc';
import ArrowDown from "components/post-layout/arrow-down";


export default function Post({ code, frontmatter }) {
    const Component = React.useMemo(() => getMDXComponent(code), [code]);
    const { title, description } = frontmatter;

    return (
        <PostLayout>
            <Flex direction={["column", "column", "row"]} w="100%" mb={10} borderBottom="solid 2px" borderColor="brand.grey">
                <Flex
                    direction="column"
                    justifyContent="center"
                    h="auto"
                    maxW={["100%", "100%", "60%"]}
                    py={5}
                    px={10}
                    bgColor="brand.black"
                    color="brand.grey"
                    fontWeight={400}
                    transition="all 0.3s ease-in-out"
                    borderRight={["none", "solid 2px"]}
                    borderColor="brand.grey"
                    _hover={{
                        bgColor: "brand.silver",
                        color: "brand.black",
                        fontWeight: 700
                    }}
                    >
        <Box 
        overflow="hidden"
        >
            <Text 
            className="reveal" 
            fontFamily="heading" 
            fontSize={["sm", "sm", "md", "lg"]} 
            letterSpacing={2} 
            // css={`
            // word-spacing: 12px;
            // @keyframes reveal {
            //   0% {
            //     transform: translate(0,100%);
            //   }
            //   100% {
            //     transform: translate(0,0);
            //   }
            // }
            // `} 
            textTransform="uppercase"
            // animation="reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 1s"
            >
              {title}
            </Text>
                </Box>
                    <Text my={[5, 0]} fontFamily="body" fontSize="xs" letterSpacing={2}>{description}</Text>
                </Flex>
                <Toc />
            </Flex>
            <Box maxW={1000} m={["0 2rem", "0 1rem", "0 auto"]}>
                <Flex alignContent="center" justifyContent="center">
                <Text fontFamily="heading" textTransform="uppercase" fontSize="md" letterSpacing={2} color="brand.grey">Content</Text>
                <ArrowDown/>
                </Flex>
                <Component components={components} />
            </Box>
        </PostLayout>
    );
};

// Rendered at build time (server-side) and passes the props
// through to the page
export const getStaticProps = async ({ params }) => {
    const post = await getSingleArticle(POSTS_PATH, params.slug);
    return {
        props: { ...post },
    };
};

// Rendered at build time (server-side) Defines a list of dymanic paths to be rendered
export const getStaticPaths = async () => {
    const paths = getAllArticles(POSTS_PATH).map(({ slug }) => ({ params: { slug } }));
    return {
        paths,
        fallback: false,
    };
};