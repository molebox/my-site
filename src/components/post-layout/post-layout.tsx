import { Flex } from '@chakra-ui/react';
import Header from 'components/layout/header';
import Menu from 'components/layout/menu';



export default function PostLayout({ children }) {
  return (
    <Flex direction="column" h="100%" bgColor="brand.black">
      <Header />
      <Menu />
      <Flex
        as="main"
        direction="column"
        m="0 auto"
        w="100vw"
        pt="4.5rem"
      >
        {children}
      </Flex>

    </Flex>
  )
}