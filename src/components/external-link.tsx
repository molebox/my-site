import { Box, Link } from "@chakra-ui/react";
import { Size } from "utlis/shortcodes";

interface Props {
  href: string;
  text: string;
  size: Size | Size[];
  uppercase?: boolean;
  font?: string;
}

export default function ExternalLink({
  text,
  href,
  size,
  uppercase = false,
  font = "heading",
}: Props) {
  return (
    <Link
      href={href}
      isExternal
      as="a"
      color="brand.grey"
      fontFamily={font}
      fontSize={size}
      textTransform={uppercase && uppercase ? "uppercase" : "none"}
      letterSpacing={2}
      css={`
        --d: 0;
        &:hover {
          --d: 100%;
        }
      `}
      background="linear-gradient(#FF9D00 0 0) 0 100% /var(--d, 0) 2px no-repeat,linear-gradient(#FF9D00 0 0) 100% calc(100% - 6px) /var(--d, 0) 2px no-repeat"
      transition="0s 0.5s, background-size 0.5s"
      _focus={{
        color: "brand.silver",
      }}
      _hover={{
        cursor: "pointer",
        backgroundPosition: "0% calc(100% - 1px), 100% calc(100% - 1px)",
        transition: "0.3s, background-position 0.3s 0.3s",
      }}
    >
      # {text}
    </Link>
  );
}
