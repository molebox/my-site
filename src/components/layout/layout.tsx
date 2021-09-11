import { Flex, Box } from "@chakra-ui/react";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <Box bgColor="brand.black">
      {/* <Header /> */}
      <Flex as="main" direction="column" h="calc(100% - 75px)">
        {children}
      </Flex>
    </Box>
  );
}
