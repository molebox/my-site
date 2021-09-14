
import { Flex, Text, useTheme, Box } from '@chakra-ui/react';
import ProjectsLayout from 'components/page-layout';
import ProjectIndexLink from 'components/index-link'

export default function Projects() {
  const theme = useTheme()

  return (
    <ProjectsLayout>
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
              Projects
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex
        as="section"
        w="100%"
        maxW={[300, 800]}
        minH="100vh"
        direction="column"
        justifyContent="center"
        m="0 auto"
        px={10}
        py={5}
      >
        <Text
          as="h2"
          fontFamily="body"
          fontSize="mini"
          color="brand.silver"
          fontWeight={400}
          letterSpacing={2}
          textTransform="uppercase"
          my={5}
          borderBottom={`solid 2px ${theme.colors.brand.silver}`}
        >
          Selected open source projects
        </Text>
        <ProjectIndexLink
          isExternal
          href="https://github.com/molebox/tweespaces"
          text="Tweespaces"
          description="A node CLI for querying the Twitter spaces API."
        />
        <ProjectIndexLink
          isExternal
          href="https://github.com/molebox/gatsby-starter-sell-stuff"
          text="gatsby-starter-sell-stuff"
          description="An ecommerce Gatsby starter built with Stripe, Sanity, Theme-ui and Netlify."
        />
        <ProjectIndexLink
          isExternal
          href="https://github.com/molebox/serverless-graphql-potter"
          text="serverless-graphql-potter"
          description="Serverless Potterverse project. Built with Gatsby, Netlify functions, Apollo and FaunaDB. Data provided via the Potter API.

          "
        />
        <ProjectIndexLink
          isExternal
          href="https://github.com/molebox/3d-product-page"
          text="3D Product landing page"
          description="A product page made with snowpack, mdx, chakra and three js."
        />
        <ProjectIndexLink
          isExternal
          href="https://github.com/molebox/gatsby-theme-pocket"
          text="gatsby-theme-pocket"
          description="A Gatsby theme that adds your saved pocket articles to your gatsby site with inbuilt SEO."
        />
        <ProjectIndexLink
          isExternal
          href="https://github.com/molebox/humix-ui"
          text="Humix-ui"
          description="A Small. Simple component library with nice props and easy config. Built with Stiches."
        />
      </Flex>
    </ProjectsLayout>
  )
}