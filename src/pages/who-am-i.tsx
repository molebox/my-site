
import { Flex, Text, Box, useTheme } from '@chakra-ui/react';
import ExternalLink from 'components/external-link';
import WhoAmILayout from "components/layout/page-layout";
import Image from 'next/image'
import imageOfme from "../../public/cartoon-me-no-bg.png"


export default function WhoAmI() {
  const theme = useTheme()

  return (
    <WhoAmILayout>
      <Flex
        as="section"
        w="100%"
        justifyContent="center"
        alignItems="center"
        borderBottom="solid 2px"
        borderColor="brand.grey"
        minH={300}>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          h="auto"
          w={["100%", "100%", "100%", "70%"]}
          py={5}
          px={10}
          bgColor="brand.black"
          color="brand.grey"
          fontWeight={700}
          borderRight={["none", "none", "none", `solid 2px ${theme.colors.brand.black}`]}
        >
          <Box position="relative">
            <Text
              className="reveal"
              fontFamily="heading"
              fontSize={["md", "md", "lg", "massive"]}
              letterSpacing={2}
              fontWeight={400}
              css={`
                word-spacing: 12px;
              `}
              textTransform="uppercase"
              _before={{
                content: '""',
                height: "100%",
                width: "100%",
                borderLeft: `solid 2px ${theme.colors.brand.silver}`,
                position: "absolute",
                top: 0,
                left: -5,
                visibility: ["hidden", "hidden", "hidden", "visible"],
              }}
              _after={{
                content: '""',
                height: "100%",
                width: "100%",
                borderBottom: `solid 2px ${theme.colors.brand.silver}`,
                position: "absolute",
                bottom: 5,
                left: -10,
                visibility: ["hidden", "hidden", "hidden", "visible"],
              }}
            >
              Who am i
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex
        direction={["column", "column", "column", "row"]}
        minH={600}
        h="auto"
        justifyContent="center"
        alignItems="center"
        w={[300, 400, 500, 1440]}
        m="0 auto"
        pb={10}
      >
        <Box opacity={0.7}>
          <Image src={imageOfme} alt="A hand drawn image of Rich Haines wearing an Oasis tee" width={400} height={600} placeholder="blur" />
        </Box>
        <Flex
          direction="column"
          maxW={500}
          mt={[0, 20]}
        >
          <Text my={5} color="brand.grey" fontSize={["mini", "xs"]}>Hey friends! My name is Rich Haines, I'm the Director of Documentation at <ExternalLink href="https://vercel.com/" text="Vercel" font="body" size={["mini", "xs"]} />.</Text>
          <Text my={5} color="brand.grey" fontSize={["mini", "xs"]}>When I'm not creating random side projects and delving into docs, I enjoy chilling with my family (I've got 3 little rascals), playing guitar and watching my beloved <ExternalLink href="https://www.tottenhamhotspur.com/" text="Tottenham Hotspur" font="body" size={["mini", "xs"]} />.</Text>
          <Text my={10} color="brand.silver" fontSize="mini">(Psst, you see that cool picture of me? My wife draw that! She's super talented isn't she!)</Text>
        </Flex>
      </Flex>
    </WhoAmILayout>
  )
}