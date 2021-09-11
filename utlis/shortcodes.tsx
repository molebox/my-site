/* eslint-disable react/display-name */
import React from 'react';
import { Heading, Text, Code as CharkaCode, Box, UnorderedList, ListItem } from "@chakra-ui/layout";
import { As } from '@chakra-ui/system';
import Image from 'next/image'
import Code from 'components/posts/codeblock/code';
import Link from 'components/link'
import { CodeDump } from '../src/components/posts/code-dump';
import ExternalLink from 'components/external-link';

interface HeaderProps {
    as: As<any>;
    size: Size;
    children: any
}

export type Size = "mini" | "xs" | "sm" | "md" | "lg" | "header"

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
    code: (props: any) => <Code {...props} />,
    i: (props: any) => <CharkaCode colorScheme="brand" {...props} />,
    img: (props: any) => <Image loading="lazy" {...props} />,
    ul: (props: any) => <UnorderedList my={2}>{props.children}</UnorderedList>,
    li: (props: any) => <ListItem color="brand.silver" fontFamily="body" fontSize="xs">{props.children}</ListItem>,
    a: (props: any) => <ExternalLink href={props.href} text={props.children} size="xs" font="body" />,
    CodeDump: (props: any) => <CodeDump>{props.children}</CodeDump>
}