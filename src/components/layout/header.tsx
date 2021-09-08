import React from 'react'
import { Button, Flex, Menu, MenuButton, MenuItem, MenuList, Spacer } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import Link from "components/link"


export default function Header() {
    return (
        <Flex as="header" h={100} w="100%" p={3} mx={5} alignItems="center" justifyContent="center">
            <Button>Menu</Button>
        </Flex>
    )
}