import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { IoLocationSharp } from "react-icons/io5";

interface CommunityCardProps {
  community: {
    id: string;
    name: string;
    imgUrl: string;
    group: string;
  };
  homes: Array<{
    id: string;
    communityId: string;
    price: number;
    area: number;
    type: string;
  }>;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ community, homes }) => {
  const communityHomes = homes.filter((home) => home.communityId === community.id);
  const totalPrice = communityHomes.reduce((sum, home) => sum + home.price, 0);
  const averagePrice = (totalPrice / communityHomes.length).toFixed(2);
  const formattedPrice = parseFloat(averagePrice).toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <Box
      m={4}
      p={4}
      width="300px"
      height="280px"
      borderWidth="1px"
      borderRadius="10px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      boxShadow="0 0 10px rgba(0, 0, 0, .15)"
      _hover={{
        boxShadow: "0 0 10px #e47b2d",
        border: "#e47b2d"
      }}
    >
      <Text
        width="100%"
        textAlign="left"
        color="#e47b2d"
        borderRadius="5px"
        fontWeight="bold"
        fontSize="x-large"
        mb={2}
        pl={2}
      >
        {community.name}
      </Text>
      <Flex
        width="266px"
        position="absolute"
        color="#e47b2d"
        fontSize="14px"
        justifyContent="flex-end"
        alignSelf="center"
        pr={2}
        pt={3}
      >
        <Flex>
          <Flex flexDirection="column" justifyContent="center" height="20px">
            <IoLocationSharp color="#e47b2d" />
          </Flex>
          <Text>{community.group}</Text>
        </Flex>
      </Flex>
      <Image
        src={community.imgUrl}
        alt={community.name}
        fallbackSrc='https://placehold.co/266x167?text=Image+Coming+Soon'
        height="167px"
        mb={3}
        borderRadius="5px"
      />
      {totalPrice === 0 ?
        <Text color="gray">Average Price Not Available</Text>
        :
        <Text color="#099" fontWeight="500">Average Price: {formattedPrice}</Text>
      }
    </Box>);
};

export default CommunityCard;