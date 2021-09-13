import { useContext, useState, useEffect } from "react";
import { Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import NextLink from "next/link";

interface Props {
    href: string;
    text: string;
    font?: string;
    description: string;
    isExternal?: boolean;
}

export default function IndexLink({
    text,
    href,
    description,
    isExternal
}: Props) {

    return (
        <Flex direction="column" my={5}>
            <NextLink href={isExternal ? '' : href}>
                <ChakraLink
                    href={isExternal ? href : ''}
                    isExternal={isExternal}
                    color="brand.grey"
                    fontFamily="body"
                    fontSize={["xs", "sm"]}
                    textTransform="uppercase"
                    letterSpacing={2}
                    css={`
          --d: 0;
          &:hover {
            --d: 100%;
          }
        `}
                    background="linear-gradient(#FF9D00 0 0) 0 100% /var(--d, 0) 2px no-repeat,linear-gradient(#FF9D00 0 0) 100% calc(100% - 6px) /var(--d, 0) 2px no-repeat"
                    transition="0s 0.5s, background-size 0.5s"
                    _hover={{
                        cursor: "pointer",
                        backgroundPosition: "0% calc(100% - 1px), 100% calc(100% - 1px)",
                        transition: "0.3s, background-position 0.3s 0.3s",
                        color: "brand.grey",
                    }}
                >
                    # {text}
                </ChakraLink>
            </NextLink>
            <Text color="brand.silver" fontSize="mini">{description}</Text>
        </Flex>
    );
}
