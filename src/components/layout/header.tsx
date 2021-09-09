import { Flex, Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import Burger from './burger'
import Link from "components/link"
import { SearchIcon } from "@chakra-ui/icons"


export default function Header() {
    return (
        <Box as="header" zIndex={99999}>
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
                <Link href="/" text="Home" size="header" uppercase font="body" />
                <Link href="/posts" text="Blog posts" size="header" uppercase font="body" />
                {/* <Link href="/posts" text="Short stories" size="header" uppercase font="body" /> */}
                <Link href="/posts" text="Projects" size="header" uppercase font="body" />
                <Link href="/posts" text="Who am i" size="header" uppercase font="body" />
                <Flex maxW={300}>
                    <InputGroup>
                        <InputRightElement
                            pointerEvents="none"
                            // eslint-disable-next-line react/no-children-prop
                            children={<SearchIcon fontSize="xs" color="brand.silver" />}
                        />
                        <Input focusBorderColor="brand.orange" color="brand.grey" type="text" fontSize="xs" fontFamily="body" variant="flushed" placeholder="Search posts" />
                    </InputGroup>
                </Flex>
            </Flex>
        </Box>
    )
}