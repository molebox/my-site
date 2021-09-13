import { Flex, Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box bgColor="brand.black">
      <Flex as="main" direction="column">
        {children}
      </Flex>
    </Box>
  );
}
