import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllArticles, getSingleArticle, POSTS_PATH } from "utlis/mdx";
import { components } from "utlis/shortcodes";
import { Flex, Text, Box } from '@chakra-ui/react';
import PostLayout from 'components/post-layout/post-layout';
import Toc from 'components/post-layout/toc';


export default function Post({ code, frontmatter }) {
    const Component = React.useMemo(() => getMDXComponent(code), [code]);
    const {title, description} = frontmatter;

    return (
        <PostLayout>
            <Flex direction={["column", "column", "row"]} w="100%" mb={10} borderBottom="solid 2px" borderColor="brand.grey">
                <Flex 
                direction="column" 
                justifyContent="center" 
                h="auto" 
                maxW={["100%", "100%", "60%"]} 
                p={5} 
                bgColor="brand.black"
                color="brand.grey"
                fontWeight={400}
                transition="all 0.3s ease-in-out"
                borderRight="solid 2px"
                borderColor="brand.grey"
                _hover={{
                    bgColor: "brand.silver",
                    color: "brand.black",
                    fontWeight: 700
                }}
                >
                    <Text fontFamily="heading" fontSize={["xs", "sm", "md", "lg"]} letterSpacing={2} textTransform="uppercase">{title}</Text>
                    <Text fontFamily="heading" fontSize={["xs", "xs", "sm", "sm"]} letterSpacing={2}>{description}</Text>
                </Flex>
                <Toc/>
            </Flex>
            <Box maxW={1000} m={["0 1rem", "0 1rem", "0 auto"]}>
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