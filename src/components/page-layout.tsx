import { Flex } from "@chakra-ui/react";
import Header from "components/layout/header";
import Menu from "components/layout/menu";

export default function PageLayout({ children }) {
  return (
    <Flex direction="column" h="calc(100% - 70px)" bgColor="brand.black">
      <Header />
      <Menu />
      <Flex as="main" direction="column" pt="4.5rem">
        {children}
      </Flex>
    </Flex>
  );
}
