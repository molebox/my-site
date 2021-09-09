import React from 'react';
import { gsap } from "gsap";
import { Box, Text } from '@chakra-ui/react';

export default function SplitText({text}) {
  
  const splitText = text.split(' ');
  console.log(splitText);
  const createSpans = () => {
    return splitText.map((word, index) => {
      return (
        <Box 
        overflow="hidden"
        >
            <Text 
            className="reveal" 
            fontFamily="heading" 
            fontSize={["xs", "sm", "md", "lg"]} 
            letterSpacing={2} 
            css={`
            word-spacing: 12px;
            @keyframes reveal {
              0% {
                transform: translate(0,100%);
              }
              100% {
                transform: translate(0,0);
              }
            }
            `} 
            textTransform="uppercase"
            animation="reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s"
            >
              {word}
            </Text>
      </Box>
      )
    })
  }

  const targetRef = React.useRef(null);
  
  React.useEffect(() => {
    if (typeof window !== undefined) {

  }
  }, [])

  return (
    createSpans()
  )
}