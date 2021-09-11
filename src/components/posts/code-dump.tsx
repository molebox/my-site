import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";

export function CodeDump({ children }) {
  return (
    <Accordion allowToggle my={6}>
      <AccordionItem>
        <p>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text as="h3" fontSize={["xl", "2xl"]}>
                Explore Code Dump
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </p>
        <AccordionPanel>{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
