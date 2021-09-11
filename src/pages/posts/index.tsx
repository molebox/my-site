import React from "react";
import { getAllArticles, POSTS_PATH, Frontmatter } from "utlis/mdx";
import Link from "components/link";
import { Flex, List, ListItem, Heading } from "@chakra-ui/react";

import PostLayout from "components/post-layout/post-layout";

export default function BlogPosts({ posts }: any) {
  return (
    <PostLayout>
      <Flex direction="column" m="0 auto" minH="100vh" h="100%">
        <Heading
          borderBottom="solid 2px #EDEDED"
          mt={10}
          p={10}
          letterSpacing={2}
          color="brand.grey"
          textTransform="uppercase"
          fontSize={["sm", "md"]}
        >
          Blog posts
        </Heading>
        <List p={10}>
          {posts.map((post, index) => (
            <ListItem key={index}>
              <Link
                href={`posts/${post.slug}`}
                text={`${post.frontmatter.title}`}
                size={["xs", "sm"]}
                uppercase
                font="body"
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
