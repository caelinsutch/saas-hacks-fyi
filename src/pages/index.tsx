import React from "react"

import SEO from "../components/seo"
import {Container, Heading, SimpleGrid, GridItem, Img, Box} from '@chakra-ui/react';
import Layout from '../components/layout';
import GatsbyImage from "gatsby-image"

import {graphql} from 'gatsby';
import styled from '@emotion/styled';
import Nav from "../components/nav";

const IndexPage = ({ data}) => (
  <Layout>
    <SEO title="Home" />
    <Nav/>
    <Container maxW="1080px">
      <SimpleGrid columns={2}>
        <GridItem pt="20vh">
          <Heading color="#545BF3" size="3xl" as="h1" lineHeight="150%">Growth Strategies for SaaS</Heading>
          <Heading as={"h3"}
                   mt={3}
                   fontWeight="regular"
                   color="gray.500"
                   size="md">Get bite-sized tips and actionable strategies for growing SaaS startups. Includes a case study to see the strategy implemented in the real world.
          </Heading>
          <Box mt={3}>

            <iframe src="https://caelinsutch.substack.com/embed" width="480" height="140"
                    frameBorder="0" scrolling="no" style={{}}/>
          </Box>
        </GridItem>
        <GridItem pt="15vh" display={{base: 'none', md: 'block'}}>
          <Box maxW="400px" pt="5rem" textAlign="left" ml="3rem">
              <GatsbyImage style={{marginLeft: 'auto'}} fluid={data.file.childImageSharp.fluid}  />
          </Box>
        </GridItem>
      </SimpleGrid>
    </Container>
  </Layout>
)

export const query = graphql`
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
  }
`

export default IndexPage
