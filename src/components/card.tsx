import { Box } from '@chakra-ui/react';

interface CardProps {
  children: React.ReactNode;
}

export default function Card({children, ...rest}: CardProps) {

  return (
    <Box
    p={4}
    bgColor="brand.blue"
    borderRadius="md"
    {...rest}
    >
      {children}
    </Box>
  )
}