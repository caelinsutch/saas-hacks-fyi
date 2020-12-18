import React from 'react';
import { Flex, Box, Heading, Spacer, Link } from '@chakra-ui/react';

const Nav: React.FC = () => {
  return (
    <Flex p="2rem">
      <Box>
        <Heading color="#545BF3" size="lg">SaaSHacks.fyi</Heading>
      </Box>
      <Spacer/>
      <Box>
        <Link color="gray.500">
          See Past Articles
        </Link>
      </Box>
    </Flex>
  );
};

export default Nav;
