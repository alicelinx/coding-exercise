import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommunityList: React.FC = () => {
  const [communities, setCommunities] = useState();
  const [homes, setHomes] = useState();

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const communitiesRes = await axios.get(
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
        const homesRes = await axios.get(
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
    <div>CommunityList</div>
  );
};

export default CommunityList;