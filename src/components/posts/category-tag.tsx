import React from "react";
import { Button, useTheme } from "@chakra-ui/react";
import GlitchText from "components/glitch-text";

const CategoryTag = ({
    category,
    handleCategoryQuery,
    numberOfPosts,
    ...rest
}) => {
    const getCategory = (category) => handleCategoryQuery(category);
    const btnRef = React.useRef();
    const theme = useTheme()

    const handleClick = () => {
        getCategory(category);
    };

    return (
        <Button
            ref={btnRef}
            {...rest}
            bg="brand.silver"
            color="brand.black"
            variant="solid"
            fontFamily="body"
            fontSize="mini"
            justifyContent="center"
            h="25px"
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
                color: "brand.black",
            }}
            className="cat-tag"
        >
            <GlitchText>{category}</GlitchText>
        </Button>
    );
};

export default CategoryTag;