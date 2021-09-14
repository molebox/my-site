import React from "react";
import { Button, useTheme, usePrefersReducedMotion } from "@chakra-ui/react";
import GlitchText from "components/glitch-text";

const CategoryTag = ({
    category,
    handleCategoryQuery,
    numberOfPosts,
    ...rest
}) => {
    const getCategory = (category) => handleCategoryQuery(category);
    const theme = useTheme()
    const prefersReducedMotion = usePrefersReducedMotion()

    const handleClick = () => {
        getCategory(category);
    };

    return (
        <Button
            {...rest}
            bg="brand.silver"
            color='brand.black'
            variant="solid"
            fontFamily="body"
            fontSize="mini"
            justifyContent="center"
            h={50}
            minW="100px"
            borderRadius={0}
            border={`solid 1px ${theme.colors.brand.black}`}
            onClick={handleClick}
            _hover={{
                cursor: "pointer",
                backgroundColor: "brand.grey",
            }}
            _focus={{
                backgroundColor: "brand.grey",
            }}
        >
            {prefersReducedMotion ? category : <GlitchText>{category}</GlitchText>}
        </Button>
    );
};

export default CategoryTag;