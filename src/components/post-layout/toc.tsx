import { useEffect, useState } from "react";
import { Flex, Text, List, ListItem } from '@chakra-ui/react';
import Link from './../link';

export default function Toc() {
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

    const observer = new IntersectionObserver(callback, { threshold: [1.0] });

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
  }, []);

  return (
    <Flex direction="column" mx={10} p={[0, 5]}>
      <Text as="h2" id="table-of-contents" color="brand.grey" fontFamily="heading" letterSpacing={2}
      fontSize={["xs", "xs", "sm", "md"]}
      textDecoration={headings.length > 0 ? "none" : "line-through"}
      >
        Table of contents
      </Text>
      {headings.length > 0 ? (
      <List my={5} className="table-of-contents">
      {headings.map((heading, i) => (
        <div key={i}>
          <ListItem
            key={`heading-${heading.href}`}
          >
            <Link href={heading.href} text={heading.label} size={["xs", "xs", "sm", "header"]}/>
          </ListItem>
        </div>
      ))}
    </List>
      ) : (
        <Flex direction="column">
        <Text 
        as="q"
        color="brand.grey" 
        fontFamily="heading" 
        fontSize="xs" 
        letterSpacing={2}
        _before={{
          content: `open-quote`,
        }}
        _after={{
          content: `close-quote`,
        }}
        >
          I love to talk about nothing. It's the only thing I know anything about.
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
          fontFamily="heading"
          fontSize="xs"
          fontWeight={700}
          mt={5}
          p={2}
          letterSpacing={2}
          bgColor="brand.grey"
          width="max-content"
          >
            This post has no headings. YOLO
          </Text>
        </Flex>
      )}

    </Flex>
  );
};
