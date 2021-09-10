import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { Frontmatter, getAllArticles, getSingleArticle, POSTS_PATH } from "utlis/mdx";
import { components } from "utlis/shortcodes";
import { Flex, Text, Box, usePrefersReducedMotion } from "@chakra-ui/react";
import PostLayout from "components/post-layout/post-layout";
import Toc, { PostDetails } from "components/post-layout/toc";
import ArrowDown from "components/post-layout/arrow-down";
import GlitchText from "components/glitch-text";

interface PostProps {
    previousArticle?: PostDetails | null;
    nextArticle?: PostDetails | null;
    code: string;
    frontmatter: Frontmatter
}

export default function Post({ code, frontmatter, previousArticle, nextArticle }: PostProps) {
    const prefersReducedMotion = usePrefersReducedMotion();
    const Component = React.useMemo(() => getMDXComponent(code), [code]);
    const { title, description } = frontmatter;

    return (
        <PostLayout>
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
                            fontSize={["header", "header", "md", "lg"]}
                            letterSpacing={2}
                            css={`
                                word-spacing: 12px;
                            `}
                            textTransform="uppercase"
                        >
                            {title}
                        </Text>
                    </Box>
                    <Text my={[5, 0]} fontFamily="body" fontSize={["mini", "xs"]} letterSpacing={2}>
                        {description}
                    </Text>
                </Flex>
                <Toc previous={previousArticle} next={nextArticle} />
            </Flex>
            <Box maxW={[300, 400, 500, 1000]} m={["2rem auto", "0 1rem", "0 auto"]}>
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
                    {/* {prefersReducedMotion ? (
                        <Text
                            fontFamily="heading"
                            textTransform="uppercase"
                            fontSize={["sm", "md"]}
                            letterSpacing={2}
                            color="brand.grey"
                        >
                            Content
                        </Text>
                    ) : (
                        <Text
                            fontFamily="heading"
                            textTransform="uppercase"
                            fontSize={["sm", "md"]}
                            letterSpacing={2}
                            color="brand.grey"
                        >
                            <GlitchText>Content</GlitchText>
                        </Text>
                    )} */}

                    <ArrowDown />
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
    return {
        props: {
            ...post,
            paths: paths ? paths : null,
        },
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
