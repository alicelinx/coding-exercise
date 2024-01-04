import { Alert, AlertIcon, Flex, Skeleton } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CommunityCard from './CommunityCard';

interface Community {
  id: string;
  name: string;
  imgUrl: string;
  group: string;
}

interface Home {
  id: string;
  communityId: string;
  price: number;
  area: number;
  type: string;
}

const CommunityList: React.FC = () => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [homes, setHomes] = useState<Home[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCommunities = async () => {
      setLoading(true);
      try {
        const communitiesRes = await axios.get<Community[]>(
          '/api/communities.json'
        );

        const sortedCommunities = communitiesRes.data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setCommunities(sortedCommunities);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
    };

    const fetchHomes = async () => {
      setLoading(true);
      try {
        const homesRes = await axios.get<Home[]>(
          '/api/homes.json'
        );
        setHomes(homesRes.data);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
    };

    fetchCommunities();
    fetchHomes();
  }, []);

  return (
    <>
      {error ?
        (
          <Flex justifyContent="center">
            <Alert status='error' width="40%">
              <AlertIcon />
              There is an error, please try again later
            </Alert>
          </Flex>
        ) : loading ? (
          <Flex flexWrap="wrap" justifyContent="center">
            {communities.map((community) => (
              <Skeleton
                key={community.id}
                m={4}
                width="300px"
                height="280px"
                borderWidth="1px"
                borderRadius="10px"
              />
            ))}
          </Flex>
        ) : (
          <Flex flexWrap="wrap" justifyContent="center">
            {communities.map((community) => (
              <CommunityCard key={community.id} community={community} homes={homes} />
            ))}
          </Flex>
        )
      }
    </>
  );
};

export default CommunityList;