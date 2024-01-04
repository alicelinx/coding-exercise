import { Text } from '@chakra-ui/react';
import CommunityList from './components/CommunityList';

function App() {
  return (
    <>
      <Text
        textAlign="center"
        fontSize="36px"
        color="#14625d"
        fontWeight="800"
        py={6}
      >
        Calgary Communities
      </Text>
      <CommunityList />
    </>
  );
}

export default App;
