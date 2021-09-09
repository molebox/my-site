import { useContext } from 'react';
import { Flex, Text } from '@chakra-ui/react'
import Link from 'components/link';
import { StateContext } from 'utlis/context';
import NavLink from './nav-link';


export default function Menu() {
    const state = useContext(StateContext);

    return (
        <Flex
            as="section"
            h="100vh"
            justifyContent="center"
            sx={{
                top: state.menuOpen ? 0 : -1000,
                transition: "top 650ms ease-in-out",
                position: "fixed",
                bottom: 0,
                width: "100vw",
                height: "100%",
                padding: 1,
                flexGrow: 1,
                flexBasis: "sidebar",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "brand.black",
                zIndex: 100,
            }}
        >
            <Flex maxW={1000} p={1} direction="column" justify="center">
                <Text as="h1" fontFamily="heading" fontSize={["xs", "xs", "sm", "sm"]} color="brand.white" fontWeight={400} letterSpacing={2}>richardhaines.dev</Text>
                <NavLink href="/posts" text="Blog posts" size={["xs", "sm", "md"]} uppercase />
                <NavLink href="/posts" text="Short stories" size={["xs", "sm", "md"]} uppercase />
                <NavLink href="/posts" text="Projects" size={["xs", "sm", "md"]} uppercase />
                <NavLink href="/posts" text="Who am i" size={["xs", "sm", "md"]} uppercase />
            </Flex>
        </Flex>


    )
}