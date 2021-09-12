import React from "react";
import { Grid } from "@chakra-ui/react";
import AllCategoryTag from "./all-category-tag";
import CategoryTag from "./category-tag";

const Categories = ({ categoriesList, handleCategoryQuery, numberOfPosts }) => {

    return (
        <Grid
            templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
            gap={0}
            templateRows={["auto", "1fr"]}
            alignItems="center"
            h="auto"
            w={["100%", "30%"]}
        >
            <AllCategoryTag handleCategoryQuery={handleCategoryQuery} />
            {categoriesList.map(({ frontmatter }, index) => (
                <CategoryTag
                    key={frontmatter.category + index}
                    category={frontmatter.category}
                    numberOfPosts={numberOfPosts}
                    handleCategoryQuery={handleCategoryQuery}
                />
            ))}
        </Grid>
    );
};

export default Categories;