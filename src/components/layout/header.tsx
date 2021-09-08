import { Flex } from "@chakra-ui/react"
import Burger from './burger'


export default function Header() {
    return (
        <Flex
            as="header"
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
    )
}