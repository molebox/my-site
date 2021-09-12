import { useContext, useState, useEffect } from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Size } from "utlis/shortcodes";

interface Props {
  href: string;
  text: string;
  size: Size | Size[];
  uppercase?: boolean;
  font?: string;
  isExternal?: boolean;
}

export default function Link({
  text,
  href,
  size,
  uppercase = false,
  font = "heading",
  isExternal
}: Props) {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState(false);

  useEffect(() => {
    if (router.asPath.includes(href)) {
      setCurrentPath(true);
    }
  }, [href, router.asPath]);

  return (
    <NextLink href={isExternal ? '' : href}>
      <ChakraLink
        href={isExternal ? href : ''}
        isExternal={isExternal}
        color={currentPath ? "brand.grey" : "brand.silver"}
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
  );
}
