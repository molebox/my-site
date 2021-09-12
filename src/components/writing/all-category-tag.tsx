import React from "react";
import { Button, useTheme } from "@chakra-ui/react";

const AllCategoryTag = ({ handleCategoryQuery, ...rest }) => {
    const getCategory = (category) => handleCategoryQuery(category);
    const theme = useTheme()
    return (
        <Button
            {...rest}
            bg="brand.silver"
            color="brand.black"
            variant="solid"
            fontFamily="body"
            fontSize="mini"
            justifyContent="center"
            h={["50px", "150px"]}
            minW="100px"
            borderRadius={0}
            border={`solid 1px ${theme.colors.brand.black}`}
            onClick={() => getCategory("All")}
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
            All
        </Button>
    );
};

export default AllCategoryTag;