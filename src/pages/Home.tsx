import React from "react";
import "../styles/Home.css"

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Information Website for Open Breweries</h1>
      <h2 className="home-subtitle">This is the Homepage</h2>
      <p className="home-author">Created by Anh Ha</p>
    </div>
  );
};

export default Home;
