import React from "react";

export default function useSearchBar(posts) {
  const allPosts = posts;
  const emptyQuery = "";
  const [searchQuery, setSearchQuery] = React.useState({
    filteredData: [],
    query: emptyQuery,
  });

  const handleSearchQuery = (e) => {
    const query = e.target.value;

    const articles = posts || [];

    const filteredData = articles.filter((post) => {
      const { title } = post.frontmatter;
      return title.toLowerCase().includes(query.toLowerCase());
    });

    setSearchQuery({ filteredData, query });
  };

  const { filteredData, query } = searchQuery;
  const hasSearchResult = filteredData && query !== emptyQuery;
  const articles = hasSearchResult ? filteredData : allPosts;

  return { articles, handleSearchQuery };
};
