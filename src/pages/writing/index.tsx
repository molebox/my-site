import React from "react";
import { getAllArticles, POSTS_PATH, Frontmatter } from "utlis/mdx";
import PostIndexLink from "components/index-link";
import useSearchBar from "components/writing/useSearchbar"
import useCategory from "components/writing/useCategory"
import Searchbar from "components/writing/searchbar"
import { Flex, List, ListItem, useTheme, Box, Text } from "@chakra-ui/react";
import uniqBy from 'lodash.uniqby'

import PostLayout from "components/layout/page-layout";
import CategoryBar from "components/writing/category-bar";
import { PostDetails } from "components/writing/toc";

interface BlogPostsProps {
  posts: PostDetails[]
}

export default function BlogPosts({ posts }: BlogPostsProps) {
  const { articles, handleSearchQuery } = useSearchBar(posts);
  const [filteredPosts, setFilteredPosts] = React.useState([]);
  const { categories, handleCategoryQuery } = useCategory(posts);
  const theme = useTheme()

  // Get a unique list of all the categories from the frontmatter
  const categoriesList = uniqBy(posts, 'frontmatter.category')

  React.useEffect(() => {
    let result = articles;
    if (categories.length === articles.length) {
      result = articles;
    } else if (categories.length && categories.length < articles.length) {
      result = categories;
    }

    setFilteredPosts(result);
  }, [categories, articles]);

  return (
    <PostLayout>
      <Flex
        as="section"
        w="100%"
        justifyContent="center"
        alignItems="center"
        borderBottom="solid 2px"
        borderColor="brand.grey"
        minH={[200, 300]}>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          h="auto"
          w={["100%", "100%", "100%", "70%"]}
          py={5}
          px={10}
          bgColor="brand.black"
          color="brand.grey"
          fontWeight={700}
          borderRight={["none", "none", "none", `solid 2px ${theme.colors.brand.black}`]}
        >
          <Box position="relative">
            <Text
              fontFamily="heading"
              fontSize={["md", "md", "lg", "massive"]}
              letterSpacing={2}
              fontWeight={400}
              css={`
                word-spacing: 12px;
                @keyframes blink {
                  0%{opacity: 0;}
                  50%{opacity: .5;}
                  100%{opacity: 1;}
                  }
              `}
              textTransform="uppercase"
              _before={{
                content: '""',
                height: "100%",
                width: "100%",
                borderLeft: `solid 2px ${theme.colors.brand.silver}`,
                position: "absolute",
                top: 0,
                left: -5,
                visibility: ["hidden", "hidden", "hidden", "visible"],
                animation: "blink 0.6s linear alternate infinite"
              }}
              _after={{
                content: '""',
                height: "100%",
                width: "100%",
                borderBottom: `solid 2px ${theme.colors.brand.silver}`,
                position: "absolute",
                bottom: 5,
                left: -10,
                visibility: ["hidden", "hidden", "hidden", "visible"],
              }}
            >
              Writing
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Box as="section" w={[300, 400, 500, 1000]} minH="100vh" h="100%" m={["2rem auto", "0 1rem", "0 auto"]}>
        <Searchbar
          handleSearchQuery={handleSearchQuery}
        />
        <CategoryBar
          categoriesList={categoriesList}
          numberOfPosts={filteredPosts.length}
          handleCategoryQuery={handleCategoryQuery}
        />
        <List>
          {filteredPosts.map((post, index) => (
            <ListItem my={5} key={index} w="fit-content">
              <PostIndexLink
                href={`writing/${post.slug}`}
                text={`${post.frontmatter.title}`}
                description={post.frontmatter.description}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </PostLayout >
  );
}

export async function getStaticProps() {
  const posts = getAllArticles(POSTS_PATH);

  return {
    props: {
      posts,
    },
  };
}
