import { useEffect, useState } from "react";
import { Flex, Text, List, ListItem, Box } from "@chakra-ui/react";
import Link from "../link";

export type PostDetails = {
  frontmatter: {
    title: string;
    category: string;
    description: string;
    published: boolean;
  };
  slug: string;
};
export interface TocProps {
  previous: PostDetails | null;
  next: PostDetails | null;
}

export default function Toc({ previous, next }: TocProps) {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const headingElements = document.querySelectorAll("h2, h3, h4");

    const callback = ([entry]) => {
      const activeHeading = entry.target;
      const links = Array.from(
        document.querySelectorAll(`.table-of-contents a`)
      );

      links.forEach((link) => {
        // @ts-ignore
        const [, href] = link.href.split("#");
        if (entry.isIntersecting && href === activeHeading.id) {
          links.forEach((l) => l.classList.remove("text-accent"));
          link.classList.add("text-accent");
        }
      });
    };

    const observer = new IntersectionObserver(callback, { threshold: [1.0], rootMargin: '30%' });

    const headings = Array.from(headingElements)
      .filter((heading) => heading.id !== "table-of-contents")
      .map((heading) => {
        observer.observe(heading);
        return {
          // @ts-ignore
          label: heading.innerHTML,
          href: `#${heading.id}`,
          tag: heading.tagName,
        };
      });

    setHeadings(headings);

    return () => {
      Array.from(headingElements).map((heading) => {
        observer.unobserve(heading);
      });
    };
  }, [previous, next]);

  return (
    <Box w={["100%", "40%"]}>
      <Flex
        direction="column"
        my={[10, 0]}
        w="100%"
        h="100%"
        position="relative"
      >
        <Text
          as="h2"
          id="table-of-contents"
          color="brand.grey"
          fontFamily="heading"
          letterSpacing={2}
          fontSize={["header", "xs", "sm", "md"]}
          textDecoration={headings.length > 0 ? "none" : "line-through"}
          mt={10}
          px={10}
        >
          Table of contents
        </Text>
        {headings.length > 0 ? (
          <List my={5} px={10} minH={300} className="table-of-contents">
            {headings.map((heading, i) => (
              <Box key={i}>
                <ListItem key={`heading-${heading.href}`}>
                  <Link
                    font="body"
                    href={heading.href}
                    text={heading.label}
                    size={["xs", "xs", "sm", "xs"]}
                  />
                </ListItem>
              </Box>
            ))}
          </List>
        ) : (
          <Flex direction="column" minH={300} px={10} alignItems={["center", "flex-start"]}>
            <Text
              as="q"
              color="brand.grey"
              fontFamily="heading"
              fontSize="xs"
              mt={[10, 0]}
              letterSpacing={2}
              _before={{
                content: `open-quote`,
              }}
              _after={{
                content: `close-quote`,
              }}
            >
              I love to talk about nothing. It's the only thing I know anything
              about.
            </Text>
            <Text
              color="brand.grey"
              fontFamily="heading"
              fontSize={["xs", "xs", "sm", "sm"]}
              letterSpacing={2}
            >
              - Oscar Wilde
            </Text>
            <Text
              color="brand.black"
              fontFamily="body"
              fontSize={["mini", "xs"]}
              fontWeight={700}
              my={[10, 5]}
              mx={[2, 0]}
              p={2}
              letterSpacing={2}
              bgColor="brand.grey"
              width="max-content"
            >
              This post has no headings. YOLO
            </Text>
          </Flex>
        )}
        <Flex
          borderTop={"solid 2px"}
          borderColor="brand.grey"
          w="100%"
          position={["relative", "absolute"]}
          bottom={0}
          h="auto"
          justifyContent="space-evenly"
          direction={["column", "row"]}
        >
          {previous ? (
            <Flex
              direction="column"
              w={["100%", "100%", "50%", "50%"]}
              p={5}
              borderRight={["none", "solid 2px #EDEDED"]}
              borderBottom={["solid 2px", "none"]}
            >
              <Text color="brand.grey" fontSize="xs" fontWeight={700}>
                Previous...
              </Text>
              <Link
                href={previous.slug}
                text={previous.frontmatter.title}
                size="mini"
                font="body"
              />
            </Flex>
          ) : (
            <Flex direction="column" w={["100%", "100%", "50%", "50%"]} p={5} borderRight={["none", "solid 2px #EDEDED"]} borderBottom={["solid 2px #EDEDED", "none"]}>
              <Text color="brand.grey" fontSize="xs" fontWeight={700}>
                No more content this way...
              </Text>
            </Flex>
          )}

          {next ? (
            <Flex h="100%" direction="column" w={["100%", "100%", "50%", "50%"]} p={5}>
              <Text color="brand.grey" fontSize="xs" fontWeight={700}>
                Next up...
              </Text>
              <Link
                href={next.slug}
                text={next.frontmatter.title}
                size="mini"
                font="body"
              />
            </Flex>
          ) : (
            <Flex direction="column" w={["100%", "100%", "50%", "50%"]} p={5}>
              <Text color="brand.grey" fontSize="xs" fontWeight={700}>
                End of the line...
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Box >
  );
}
