import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommunityList: React.FC = () => {
  const [communities, setCommunities] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          '/api/communities.json'
        );
        console.log(res.data);
        setCommunities(res.data);
      } catch (err) {
        console.log('Error:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>CommunityList</div>
  );
};

export default CommunityList;