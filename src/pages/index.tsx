import React from "react"

import SEO from "../components/seo"
import {Container, Heading, SimpleGrid, GridItem, Img, Box} from '@chakra-ui/react';
import Layout from '../components/layout';
import GatsbyImage from "gatsby-image"

import {graphql, useStaticQuery} from 'gatsby';
import Nav from "../components/nav";

const IndexPage: React.FC = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }`
  )

  return <Layout>
    <SEO title="Home"/>
    <Nav/>
    <Container maxW="1080px">
      <SimpleGrid columns={{base: 1, md: 2}}>
        <GridItem pt="5vh" display={{base: 'block', md: 'none'}}>
          <Box maxW="400px" mx="auto">
            <GatsbyImage style={{marginLeft: 'auto'}} fluid={data.file.childImageSharp.fluid}/>
          </Box>
        </GridItem>
        <GridItem pt={{base: '5rem', md: '20vh'}} textAlign={{base: 'center', md: 'left'}}>
          <Heading color="#545BF3" size="3xl" as="h1" lineHeight="150%">Growth Strategies for SaaS</Heading>
          <Heading as={"h3"}
                   mt={3}
                   fontWeight="regular"
                   color="gray.500"
                   size="md">Get bite-sized tips and actionable strategies for growing SaaS startups. Includes a case
            study to see the strategy implemented in the real world.
          </Heading>
          <Box mt={3} mx={{base: 'auto', md: 0}}>
            <iframe src="https://caelinsutch.substack.com/embed" width="480" height="140"
                    style={{marginLeft: 'auto', marginRight: 'auto'}}
                    frameBorder="0" scrolling="no"/>
          </Box>
        </GridItem>
        <GridItem pt="15vh" display={{base: 'none', md: 'block'}}>
          <Box maxW="400px" pt="5rem" textAlign="left" ml="3rem">
            <GatsbyImage style={{marginLeft: 'auto'}} fluid={data.file.childImageSharp.fluid}/>
          </Box>
        </GridItem>
      </SimpleGrid>
    </Container>
  </Layout>
}

export default IndexPage
