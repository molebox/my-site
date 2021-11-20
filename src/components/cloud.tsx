import { Box } from "@chakra-ui/layout";

export function Cloud() {
  return (
    <>
    <Box
      w="200px"
      h="75px"
      borderRadius="50%"
      filter="url(#filter)"
      boxShadow="400px 400px 60px 0px #fff"
      position="absolute"
      top="-320px"
      right="420px"
    />
    <svg width="0" height="0"> 
      <filter id="filter">
        <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="10" />
        <feDisplacementMap in="SourceGraphic" scale="180" />
      </filter>
    </svg>
    </>
  )

}