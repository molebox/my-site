import { Flex, Text } from "@chakra-ui/react";
import NavLink from "./nav-link";

export default function MenuItemSection() {
  return (
    <Flex as="section" h="100vh" justifyContent="center">
      <Flex maxW={1000} p={1} direction="column" justify="center">
        <Text
          as="h1"
          fontFamily="heading"
          fontSize={["xs", "xs", "sm", "sm"]}
          color="brand.white"
          fontWeight={400}
          letterSpacing={2}
        >
          richardhaines.dev
        </Text>
        <NavLink
          href="/posts"
          text="Blog posts"
          size={["xs", "sm", "md"]}
          uppercase
        />
        <NavLink
          href="/posts"
          text="Short stories"
          size={["xs", "sm", "md"]}
          uppercase
        />
        <NavLink
          href="/posts"
          text="Projects"
          size={["xs", "sm", "md"]}
          uppercase
        />
        <NavLink
          href="/posts"
          text="Who am i"
          size={["xs", "sm", "md"]}
          uppercase
        />
      </Flex>
    </Flex>
  );
}
