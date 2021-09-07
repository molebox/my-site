import React from 'react'
import { Button, Flex, Menu, MenuButton, MenuItem, MenuList, Spacer } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import Link from "components/link"

// interface HightlightProps {
//     children: React.ReactNode;
//     hovered: boolean;
// }

// const Highlight = ({children, hovered}: HightlightProps) => {
//     return (
//     <RoughNotation 
//     type="bracket" 
//     color="#FF9D00" 
//     brackets={["left", "right"]} 
//     strokeWidth={2}
//     show={hovered}
//     padding={3}
//     >
//         {children}
//     </RoughNotation>
//     )
// }

const HeaderMenuButton = () => {
    return (
        <MenuButton 
        as={Button} 
        rightIcon={<ChevronDownIcon />}
        transition="all 0.2s"
        color="brand.grey"
        fontWeight="400"
        bgColor="brand.blue"
        _hover={{ color: "#FF9D00" }}
        _expanded={{ bgColor: "brand.blue"  }}
        _focus={{ boxShadow: "outline"}}
        >
            Writing
        </MenuButton>
)
}

const Item = ({children}) => (
    <MenuItem
    _hover={{ color: "#FF9D00" }}
    _expanded={{ bgColor: "brand.blue"  }}
    _focus={{ color: "brand.orange"}}
    >
        {children}
    </MenuItem>
)

export default function Header() {
    return (
        <Flex as="header" h={100} w="100%" p={3} mx={5} alignItems="center" justifyContent="center">
            <Flex as="nav" align="center" w="100%" mx={3}>
                <Link href="/">
                    richardhaines.dev
                </Link>
                <Spacer/>
                <Flex maxW={500} w="100%" justify="space-evenly" align="center">
                <Menu>
                <HeaderMenuButton />
                <MenuList
                bgColor="brand.blue"
                border="none"
                >
                    <Item>
                        <Link href="/posts">
                            Blog posts
                        </Link>
                    </Item>
                    <Item>
                        <Link href="/short-stories">
                            Short stories
                        </Link>
                    </Item>
                </MenuList>
                </Menu>
                <Link href="/projects">
                    Projects
                </Link>
                <Link  href="/contact">
                    Contact
                </Link>
                </Flex>
            </Flex>
        </Flex>
    )
}