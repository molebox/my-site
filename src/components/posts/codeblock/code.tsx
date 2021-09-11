import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import { Flex, Grid, Spacer, Box } from "@chakra-ui/react";
import TypeScript from "./typescript";
import JavaScript from "./javascript";
import Bash from "./bash";
import ReactSVG from "./react-svg";
import CopyButton from "../copy-button";
import HTML from "./html";
import CSS from "./css";
import SQL from "./sql";
import JSON from "./json";
import Prisma from "./prisma";
import Git from "./git";
import GraphQL from "./graphql";

const Code = ({ children, className }) => {
  const language =
    className !== undefined && className.replace(/language-/, "");

  const showLanguage = () => {
    switch (language) {
      case "typescript":
        return <TypeScript />;
      case "javascript":
        return <JavaScript />;
      case "js":
        return <JavaScript />;
      case "bash":
        return <Bash />;
      case "jsx":
        return <ReactSVG />;
      case "html":
        return <HTML />;
      case "css":
        return <CSS />;
      case "sql":
        return <SQL />;
      case "json":
        return <JSON />;
      case "prisma":
        return <Prisma />;
      case "diff" || "git":
        return <Git />;
      case "graphql":
        return <GraphQL />;
      default:
        break;
    }
  };

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Flex position="relative" direction="column" my={6}>
          <Grid
            h="50px"
            bg="brand.black"
            mb="-20px"
            borderTop="solid 2px"
            borderTopColor="brand.grey"
            borderLeft="solid 2px"
            borderLeftColor="brand.grey"
            borderRight="solid 2px"
            borderRightColor="brand.grey"
            borderBottom="solid 2px"
            borderBottomColor="brand.grey"
            templateColumns="auto 100px 80px"
            alignItems="center"
            justifyItems="center"
          >
            <Spacer />
            {showLanguage()}
            <CopyButton value={children.trim()} />
          </Grid>
          <Flex
            as="pre"
            className={className}
            direction="column"
            overflow="scroll"
            overflowY="hidden"
            mt={5}
            p={5}
            position="relative"
            bgColor="brand.black"
            borderBottom="solid 2px"
            borderLeft="solid 2px"
            borderRight="solid 2px"
            borderBottomColor="brand.grey"
            borderLeftColor="brand.grey"
            borderRightColor="brand.grey"
            css={`
              &::-webkit-scrollbar {
                width: 5px;
              }
              &::-webkit-scrollbar-track {
                background-color: #ededed;
              }
              &::-webkit-scrollbar-thumb {
                background-color: #1a1a1a;
                border-radius: 10px;
                background-clip: content-box;
                border: 3px solid transparent;
              }
            `}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Flex>
        </Flex>
      )}
    </Highlight>
  );
};

export default Code;
