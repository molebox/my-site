import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg="brand.blue"
      rounded={"full"}
      color="brand.orange"
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "brand.orange",
        color: "brand.blue",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const date = new Date().getFullYear();

export default function Footer() {
  return (
    <Box
    // bg={useColorModeValue('gray.50', 'gray.900')}
    // color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text color="brand.grey">© {date} Rich Haines</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"GitHub"} href={"https://github.com/molebox"}>
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={"Twitter"}
            href={"https://twitter.com/studio_hungry"}
          >
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"https://www.instagram.com/butteronmyhat/"}
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
