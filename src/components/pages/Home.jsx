import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${process.env.REACT_APP_SERVER_URL}/campaign`);
      setCampaigns(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <h1>Campaigns</h1>
      <Link to="/NewCampaign">
        <button>Create a New Campaign</button>
      </Link>
      <div className="campaign-list">
        {campaigns.map(campaign => (
          <div className="campaign-item" key={campaign.id}>
            <h2>{campaign.name}</h2>
            <p>{campaign.description}</p>
            <Link to={`/EditCampaign/${campaign.id}`}>
              <button>Edit Campaign</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
