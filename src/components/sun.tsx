import { Box } from "@chakra-ui/layout";

export function Sun() {
  return (
    <Box
    position="absolute"
    top="50px"
    right="50px"
    w="40px"
    h="40px"
    borderRadius="50%"
    bg="#fff"
    boxShadow={`
    0 0 60px 30px #fff,  /* inner white */
    0 0 100px 60px #f0f, /* middle magenta */
    0 0 140px 90px #0ff; /* outer cyan */
    `}
    />
  )
}