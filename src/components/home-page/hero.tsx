import Image from 'next/image'
import { Flex, Text, Box, Link, Heading } from '@chakra-ui/react';


export default function Hero() {

  return (
    <Flex maxW={1000} h={500} alignItems="center">
      <Box alignSelf="center" w={[300, 600]}>
        <Image
        src="/cartoon-me-no-bg.png"
        alt="A cartoon drawing of Rich Haines in an Oasis tee"
        width={600}
        height={900}
        layout="responsive"
      />
      </Box>
      <Box
          px={2}
          wrap="wrap"
          maxW="max-content"
          alignSelf="center"
        >
          <Heading color="brand.black" letterSpacing={5} size="4xl">Hello friend! My name is Rich Haines</Heading>
          <Text
            fontSize={["lg", "lg", "xl"]}
            fontWeight={500}
            my={5}
            color="brand.grey"
          >
            Hello friend! My name is Rich Haines, I'm the Director of Documentation over at <Link isExternal color="brand.orange" href="https://vercel.com/">Vercel</Link>. I've lost track of whether I'm a writer or developer but I enjoy both!
          </Text>
        </Box>
    </Flex>
  )
}