import { Flex } from '@chakra-ui/react';
import Header from 'components/layout/header';
import Menu from 'components/layout/menu';



export default function PostLayout({ children }) {
  return (
    <Flex direction="column" minH="100vh" h="100%" bgColor="brand.black">
      <Header />
      <Menu />
      <Flex
        as="main"
        direction="column"
        minH="100vh"
        m="0 auto"
        w="100vw"
      >
        {children}
      </Flex>

    </Flex>
  )
}