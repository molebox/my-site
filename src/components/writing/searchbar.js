import React from "react";
import {
  Input,
  Flex,
  VisuallyHidden,
} from "@chakra-ui/react";

export default function SearchBar({ handleSearchQuery }) {
  return (
    <Flex
      justify="center"
      alignItems="center"
      my={10}
      position="sticky"
      top="75px"
      bgColor="brand.black"
    >
      <VisuallyHidden as="label" htmlFor="search-posts">
        Search Posts
      </VisuallyHidden>
      <Input
        focusBorderColor="brand.orange"
        fontFamily="body"
        fontSize="mini"
        type="text"
        id="search-posts"
        placeholder="Search content.."
        onChange={handleSearchQuery}
        variant="flushed"
        color="brand.grey"
        _placeholder={{
          color: "brand.grey",
        }}
      />
    </Flex>
  );
};
