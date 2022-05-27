/* eslint-disable react/prop-types */
import { Button, Typography } from '@mui/material';
import React from 'react';
import '../styles/Home.css';

const Home = ({ login }) => {
  return (
    <div
      className="d-flex justify-content-center flex-column text-center home-container"
      style={{ minHeight: '100vh' }}>
      <div className=" text-light mb-5">
        <Typography className="mb-3" variant="h3" component="div" sx={{ flexGrow: 1 }}>
          Welcome to tours
        </Typography>
        <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
          To Explore Tours, connect wallet
        </Typography>
        <Button onClick={login} variant="outlined" className="rounded-pill px-3 mt-3">
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};

export default Home;
