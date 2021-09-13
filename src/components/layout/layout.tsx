import { Flex, Box } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <Box bgColor="brand.black" h="100vh">
      {/* <Header /> */}
      <Flex as="main" direction="column">
        {children}
        <Footer/>
      </Flex>
    </Box>
  );
}
