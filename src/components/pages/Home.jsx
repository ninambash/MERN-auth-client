import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div className="home-container">
      <h1>Create</h1>
      <Link to="/NewCampaign">
        <button>Create a New Campaign</button>
      </Link>
    </div>
  );
};

export default Home;
