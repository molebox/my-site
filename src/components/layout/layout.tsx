import Header from './header';
import { Flex, Box } from '@chakra-ui/react';
import Footer from './footer';


export default function Layout({ children }) {
  return (
      <Flex direction="column" minH="100vh" h="100%" m="0 auto" bgColor="brand.black">
        {/* <Header/> */}
        <Flex
        as="main"
        direction="column"
        minH="100vh"
        m="0 auto"
        >{children}</Flex>
        {/* <Footer/> */}
      </Flex>
  )
}