import { Link as ChakraLink } from "@chakra-ui/react"
import NextLink from "next/link"
import React from "react"

interface Props {
    href: string;
    children: React.ReactNode
}

export default function Link({ children, href }: Props) {
    return (
        <ChakraLink as={NextLink} href={href}>
            <a>{children}</a>
        </ChakraLink>
    )
}