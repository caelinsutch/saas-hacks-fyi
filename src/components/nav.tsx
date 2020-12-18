import React from 'react';
import { Flex, Box, Heading, Spacer, Link } from '@chakra-ui/react';
import {graphql, useStaticQuery} from 'gatsby';
import GatsbyImage from 'gatsby-image/index';

const Nav: React.FC = () => {

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      file(relativePath: { eq: "logo-icon.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(height: 50, width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Flex p="2rem" alignItems="center">
      <Flex alignItems="center">
        <GatsbyImage  fixed={data.file.childImageSharp.fixed}  />
        <Heading color="#545BF3" size="md">saashacks.fyi</Heading>
      </Flex>
      <Spacer/>
      <Box>
        <Link color="gray.500" href="https://caelinsutch.substack.com/">
          See Past Articles
        </Link>
      </Box>
    </Flex>
  );
};

export default Nav;
