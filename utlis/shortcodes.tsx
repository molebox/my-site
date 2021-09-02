import { Heading, Text } from "@chakra-ui/layout";

// Our components we want to pass into our MDX files to override HTML elemnents
// or custom components
export const components = {
    h1: (props: any) => <Heading as="h1" fontSize="4xl" {...props} color="brand.green" />,
    h2: (props: any) => <Heading as="h2" fontSize="3xl" {...props} color="brand.green" />,
    h3: (props: any) => <Heading as="h3" fontSize="2xl" {...props} color="brand.green" />,
    p: (props: any) => <Text as="p" fontSize="xl" {...props} color="#00FF00" />,
}