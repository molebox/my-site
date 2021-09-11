import React, { useRef } from "react";
import {
  Flex,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Burger from "./burger";
import Link from "components/link";
import { SearchIcon } from "@chakra-ui/icons";

export default function Header() {
  const searchRef = useRef(null);

  // eslint-disable-next-line react/display-name
  // const Searchbar = React.forwardRef((ref) => {

  //     return (
  //         <Flex maxW={300}>
  //             <InputGroup>
  //                 <InputRightElement
  //                     pointerEvents="none"
  //                     // eslint-disable-next-line react/no-children-prop
  //                     children={<SearchIcon fontSize="xs" color="brand.silver" />}
  //                 />
  //                 <Input ref={ref} focusBorderColor="brand.orange" color="brand.grey" type="text" fontSize="16px" fontFamily="body" variant="flushed" placeholder="Search posts" />
  //             </InputGroup>
  //         </Flex>
  //     )
  // })

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
        <Link href="/" text="Home" size="xs" uppercase font="body" />
        <Link href="/posts" text="Blog posts" size="xs" uppercase font="body" />
        {/* <Link href="/posts" text="Short stories" size="xs" uppercase font="body" /> */}
        {/* <Link href="/posts" text="Projects" size="xs" uppercase font="body" /> */}
        <Link href="/posts" text="Who am i" size="xs" uppercase font="body" />
        <Flex maxW={300}>
          <InputGroup>
            <InputRightElement
              pointerEvents="none"
              // eslint-disable-next-line react/no-children-prop
              children={<SearchIcon fontSize="xs" color="brand.silver" />}
            />
            <Input
              focusBorderColor="brand.orange"
              color="brand.grey"
              type="text"
              fontSize="16px"
              fontFamily="body"
              variant="flushed"
              placeholder="Search posts"
            />
          </InputGroup>
        </Flex>
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
