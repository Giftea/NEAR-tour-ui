/* eslint-disable react/prop-types */
import { Button, Typography } from '@mui/material';
import React from 'react';
import '../styles/Home.css';

const style = {
  background: 'floralwhite',
  '&:hover': {
    background: '#c9c9c9'
  }
};

const Home = ({ login }) => {
  return (
    <div
      className="d-flex justify-content-center flex-column text-center home-container"
      style={{ minHeight: '100vh' }}>
      <div className=" text-light mb-5">
        <Typography
          className="mb-3 animate__animated animate__slideInDown animate__delay-1s"
          variant="h3"
          component="div"
          sx={{ flexGrow: 1 }}>
          Welcome to NEAR-Tours
        </Typography>
        <Typography variant="p" component="div" sx={{ flexGrow: 1 }} className='animate__animated animate__animated animate__fadeIn animate__delay-1s'>
          To Explore Tours, Connect wallet
        </Typography>
        <Button
          onClick={login}
          variant="outlined"
          sx={style}
          className="rounded-pill px-3 mt-3 animate__animated animate__slideInUp animate__delay-1s">
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};

export default Home;
