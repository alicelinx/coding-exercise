import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommunityCard from './CommunityCard';

interface Community {
  id: string;
  name: string;
  imageUrl: string;
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

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const communitiesRes = await axios.get<Community[]>(
          '/api/communities.json'
        );
        console.log(communitiesRes.data);
        setCommunities(communitiesRes.data);
      } catch (err) {
        console.log('Error fetching communities: ', err);
      }
    };

    const fetchHomes = async () => {
      try {
        const homesRes = await axios.get<Home[]>(
          '/api/homes.json'
        );
        console.log(homesRes.data);
        setHomes(homesRes.data);
      } catch (err) {
        console.log('Error fetching homes: ', err);
      }
    };

    fetchCommunities();
    fetchHomes();
  }, []);

  return (
    <div>
      {communities.map((community) => (
        <CommunityCard key={community.id} community={community} homes={homes} />
      ))}
    </div>
  );
};

export default CommunityList;