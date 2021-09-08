import React from 'react';
import { getAllArticles, POSTS_PATH, Frontmatter } from 'utlis/mdx';
import Link from 'components/link';
import { List, ListItem } from '@chakra-ui/react';

import PostLayout from 'components/post-layout/post-layout';

type Post = {
  frontmatter: Frontmatter;
  code: string;
  slug: string;
}

export default function BlogPosts({posts}: Post[]) {
  return (
    <PostLayout>
    <List p={10}>
    {posts.map((post, index) => (
      <li key={index}>
        <Link href={`posts/${post.slug}`} text={`${post.frontmatter.title}`} size={["xs", "sm", "md"]} uppercase/>
      </li>
    ))}
  </List>
  </PostLayout>
  );
}

export async function getStaticProps() {
  
  const posts = getAllArticles(POSTS_PATH)

  return {
    props: {
      posts
    },
  };
}