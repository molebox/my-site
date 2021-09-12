import React from "react";
import { getAllArticles, POSTS_PATH, Frontmatter } from "utlis/mdx";
import PostIndexLink from "components/posts/post-index-link";
import useSearchBar from "components/posts/useSearchbar"
import useCategory from "components/posts/useCategory"
import Searchbar from "components/posts/searchbar"
import { Flex, List, ListItem, Heading } from "@chakra-ui/react";
import uniqBy from 'lodash.uniqby'

import PostLayout from "components/posts/post-layout";
import Categories from "components/posts/categories";

export default function BlogPosts({ posts }: any) {
  const { articles, handleSearchQuery } = useSearchBar(posts);
  const [filteredPosts, setFilteredPosts] = React.useState([]);
  const { categories, handleCategoryQuery } = useCategory(posts);


  // Get a unique list of all the categories from the frontmatter
  const categoriesList = uniqBy(articles, 'frontmatter.category')
  console.log({ categoriesList })

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
      <Flex p={10} direction="column" m="0 auto" minH="100vh" h="100%" w={[300, 400, 500, 1000]}>
        <Heading
          mt={10}
          letterSpacing={2}
          color="brand.grey"
          textTransform="uppercase"
          fontSize={["sm", "md"]}
        >
          Blog posts
        </Heading>
        <Searchbar
          handleSearchQuery={handleSearchQuery}
        />
        <Categories
          categoriesList={categoriesList}
          numberOfPosts={filteredPosts.length}
          handleCategoryQuery={handleCategoryQuery}
        />
        <List>
          {filteredPosts.map((post, index) => (
            <ListItem my={5} key={index} w="fit-content">
              <PostIndexLink
                href={`posts/${post.slug}`}
                text={`${post.frontmatter.title}`}
                description={post.frontmatter.description}
              />
            </ListItem>
          ))}
        </List>
      </Flex>
    </PostLayout>
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
