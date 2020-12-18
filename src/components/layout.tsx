import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';

const Layout: React.FC = ({ children }) => {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  );
};

export default Layout;
