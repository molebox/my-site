import React, { useRef } from "react";
import {
    Flex,
    Box,
    Text
} from "@chakra-ui/react";
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
                borderColor="brand.grey"
            >
                {/* <Text
                    as="h1"
                    fontFamily="heading"
                    fontSize={["xs", "xs", "sm", "sm"]}
                    color="brand.white"
                    fontWeight={400}
                    letterSpacing={2}
                >
                    richardhaines.dev
                </Text> */}
                <Link href="/" text="richardhaines.dev" size="xs" font="body" />
                <Link href="/posts" text="Blog posts" size="xs" uppercase font="body" />
                {/* <Link href="/posts" text="Short stories" size="xs" uppercase font="body" /> */}
                <Link href="/posts" text="Projects" size="xs" uppercase font="body" />
                <Link href="/posts" text="Who am i" size="xs" uppercase font="body" />

                {/* <Menu>
                    <MenuButton as={<Searchbar ref={searchRef.current} />} />
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu> */}
            </Flex>
        </Box>
    );
}
