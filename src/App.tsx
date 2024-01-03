import React from 'react';
import { Flex } from '@chakra-ui/react';
import CommunityList from './components/CommunityList';

function App() {
  return (
    <>
      <Flex
        color="red"
        justifyContent="center"
      >Hello World</Flex>
      <CommunityList />
    </>
  );
}

export default App;
