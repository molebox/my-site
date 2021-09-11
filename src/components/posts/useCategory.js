import React from "react";

export default function useCategory(posts) {
  const [categoryQuery, setCategoryQuery] = React.useState({
    filteredData: [],
  });

  const handleCategoryQuery = (category) => {
    const categoryPosts = posts || [];

    const filteredData = categoryPosts.filter((post) => {
      return category === "All"
        ? []
        : post.frontmatter.category.includes(category);
    });
    setCategoryQuery({ filteredData });
  };

  const { filteredData } = categoryQuery;
  const hasSearchResult = filteredData !== [];

  const categories = hasSearchResult ? filteredData : posts;

  return { categories, handleCategoryQuery };
};
