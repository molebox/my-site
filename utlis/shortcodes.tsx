import React from 'react';
import { Heading, Text } from "@chakra-ui/layout";
import { As } from '@chakra-ui/system';

interface HeaderProps {
    as: As<any>;
    size: Size;
    children: any
}

export type Size = "xs" | "sm" | "md" | "lg" | "header"

const Header = ({ children, as, size }: HeaderProps) => {
    const id = children.replace(/ /g, "_").toLowerCase();

    return <Heading id={id} my={10} as={as} fontSize={size} color="brand.grey" letterSpacing={2} textTransform="uppercase">{children}</Heading>
}

// Our components we want to pass into our MDX files to override HTML elemnents
// or custom components
export const components = {
    h1: (props: any) => <Header as="h1" size="lg">{props.children}</Header>,
    h2: (props: any) => <Header as="h2" size="sm">{props.children}</Header>,
    h3: (props: any) => <Header as="h3" size="sm">{props.children}</Header>,
    h4: (props: any) => <Header as="h4" size="sm">{props.children}</Header>,
    p: (props: any) => <Text as="p" my={10} fontSize="xs" {...props} color="brand.grey" />,
}