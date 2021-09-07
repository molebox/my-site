import React from 'react';
import Head from 'next/head'
import Layout from 'components/layout/layout';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Hero from 'components/home-page/hero';
import FeaturedArticles from './../components/home-page/featured-articles';
import Link from './../components/link';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function Home() {

  const hashRef = React.useRef(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

  }, [])

  const rotateOnHover = () => 
    gsap.to(hashRef.current, {
      rotation: 45
    })
  

  return (
      <Layout>
        <Head>
          <title>Home</title>
        </Head>
        <Flex h="100vh" justifyContent="center">

        <Flex maxW={1000} p={1} direction="column" justify="center">
        <Heading color="brand.white" fontWeight={400} letterSpacing={2}>richardhaines.dev</Heading>
        <Link href="/posts" text="# Blog posts"/>
          {/* <Flex>
            <Text mr={3} ref={hashRef}>#</Text>
            <Text letterSpacing={2}>Blog posts</Text>  
          </Flex> */}
        <Link href="/posts" text="# Short stories"/>
        <Link href="/posts" text="# Projects"/>
        </Flex>
        </Flex>
        {/* <Flex maxW={1000} h="500px" my={10}>
          <Text fontFamily="heading" fontSize="7xl" color="brand.white" textTransform="uppercase"> Hello friend! My name is Rich Haines, I'm the Director of Documentation over at Vercel. I've lost track of whether I'm a writer or developer but I enjoy both!</Text>
        </Flex> */}
        {/* <Hero/>
        <Flex gap={10}>
          <FeaturedArticles title="Selected blog posts"/>
          <FeaturedArticles title="Short stories"/>
        </Flex> */}
      </Layout>
  )
}


// Home.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//       <NestedLayout>{page}</NestedLayout>
//     </Layout>
//   )
// }