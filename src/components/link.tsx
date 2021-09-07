import React from 'react';
import {  Box, css } from "@chakra-ui/react"
import NextLink from "next/link"

interface Props {
    href: string;
    text: string;
    // children: React.ReactNode;
    
}

export default function Link({ text, href }: Props) {

    const background = `linear-gradient(currentColor 0 0) bottom 0   left  0 / 100% 3px no-repeat,
    linear-gradient(currentColor 0 0) bottom 6px right 0 / 100% 3px no-repeat`
    const transition = `0s 0.5s, background-size 0.5s`
    const backgroundPosition = `bottom 0 right 0, bottom 6px left 0`
    const hoverTransition = `0.5s, background-position 0s 0.5s`

    return (
        <NextLink 
        href={href}
        passHref
        // css={`
        // --d: 100%;
        // background: linear-gradient(currentColor 0 0) 0 100% /var(--d, 0) 3px no-repeat,linear-gradient(currentColor 0 0) 100% calc(100% - 6px) /var(--d, 0) 3px no-repeat;
        // transition: 0s 0.5s, background-size 0.5s;
        // &:hover {
        //     --d: 100%;
        //     background-position: 0% calc(100% - 3px), 100% calc(100% - 3px);
        //     transition: 0.3s, background-position 0.3s 0.3s;
        // }
        // `}
        >
            <Box 
            as="a" 
            color="brand.grey"
            fontFamily="heading"
            fontSize="7xl"
            textTransform="uppercase"
            css={`
            --d: 0;
            &:hover {
                --d: 100%;
            }
            `}
            background="linear-gradient(currentColor 0 0) 0 100% /var(--d, 0) 2px no-repeat,linear-gradient(currentColor 0 0) 100% calc(100% - 6px) /var(--d, 0) 2px no-repeat"
            transition="0s 0.5s, background-size 0.5s"
            _hover={{
                
                cursor: "pointer",
                backgroundPosition: "0% calc(100% - 3px), 100% calc(100% - 3px)",
                transition: "0.3s, background-position 0.3s 0.3s"
            }}
            >
                {text}
            </Box>
        </NextLink>
    )
}