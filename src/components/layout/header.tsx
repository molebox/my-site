import React, { useRef } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Burger from "./burger";
import Link from "components/link";

export default function Header() {
  return (
    <Box as="header" zIndex={99999} position="fixed" w="100%" top={0} h={70}>
      <Flex
        visibility={["visible", "visible", "visible", "hidden"]}
        display={["flex", "flex", "flex", "none"]}
        as="nav"
        h={75}
        w="100%"
        zIndex={9999}
        p={3}
        bgColor="brand.black"
        alignItems="center"
        justifyContent="flex-start"
        borderBottom="solid 2px"
        borderColor="brand.grey"
      >
        <Burger />
      </Flex>
      <Flex
        visibility={["hidden", "hidden", "hidden", "visible"]}
        display={["none", "none", "flex", "flex"]}
        as="nav"
        h={75}
        w="100%"
        zIndex={9999}
        p={3}
        bgColor="brand.black"
        alignItems="center"
        justifyContent="space-evenly"
        borderBottom="solid 2px"
        borderColor="brand.silver"
      >
        <Link href="/" text="richardhaines.dev" size="mini" font="body" />
        <Link
          href="/writing"
          text="Writing"
          size="mini"
          uppercase
          font="body"
        />
        <Link
          href="/projects"
          text="Projects"
          size="mini"
          uppercase
          font="body"
        />
        <Link
          href="/who-am-i"
          text="Who am i"
          size="mini"
          uppercase
          font="body"
        />
      </Flex>
    </Box>
  );
}
