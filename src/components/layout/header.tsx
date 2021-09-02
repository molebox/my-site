import { Flex, Spacer } from "@chakra-ui/react"
import Link from "components/link"

export default function Header() {

    return (
        <Flex>
            <Link href="/">
                richardhaines.dev
            </Link>
        </Flex>
    )
}