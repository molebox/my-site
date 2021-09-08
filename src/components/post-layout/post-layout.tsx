import { Flex } from '@chakra-ui/react';



export default function PostLayout({ children }) {
  return (
      <Flex direction="column" minH="100vh" h="100%" bgColor="brand.black">

        <Flex
        as="main"
        direction="column"
        minH="100vh"
        >
          {children}
        </Flex>

      </Flex>
  )
}