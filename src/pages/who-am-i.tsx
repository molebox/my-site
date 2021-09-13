
import { Flex, Text, Box, useTheme } from '@chakra-ui/react';
import WhoAmILayout from "components/page-layout";


export default function WhoAmI() {
  const theme = useTheme()

  return (
    <WhoAmILayout>
      <Flex
        as="section"
        direction={["column", "column", "column", "row"]}
        w="100%"
        mb={10}
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
    </WhoAmILayout>
  )
}