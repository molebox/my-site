
import { Grid } from '@chakra-ui/react';
import AllCategoryTag from './all-category-tag';
import CategoryTag from './category-tag';
import { PostDetails } from './toc';

interface CategoryBarProps {
  categoriesList: PostDetails[];
  handleCategoryQuery: () => void;
  numberOfPosts: number;
}

export default function CategoryBar({ categoriesList, handleCategoryQuery, numberOfPosts }: CategoryBarProps) {
  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(100px, 1fr))"
      gap={1}
      templateRows={["auto", "1fr"]}
      alignItems="center"
      h="auto"
      w="100%"
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
  )
}