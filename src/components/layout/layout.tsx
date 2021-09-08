import { Flex, Box } from '@chakra-ui/react';


export default function Layout({ children }) {
  return (
    <Flex direction="column" minH="100vh" h="100%" m="0 auto" bgColor="brand.black">
      <Flex
        as="main"
        direction="column"
        minH="100vh"
        m="0 auto"
      >
        {children}
      </Flex>

    </Flex>
  )
}