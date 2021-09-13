import React from "react";
import { useClipboard } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export default function CopyButton({ value }) {
  const { onCopy, hasCopied } = useClipboard(value);
  return (
    <Button
      color="brand.silver"
      aria-label="Copy text"
      textTransform="uppercase"
      letterSpacing={2}
      role="button"
      onClick={onCopy}
      fontSize="mini"
      bgColor="brand.black"
      fontFamily="body"
      mr={10}
      p={1}
      _hover={{
        bgColor: "brand.black",
        color: "brand.orange",
      }}
    >
      {hasCopied ? "Roger" : "Copy"}
    </Button>
  );
}
