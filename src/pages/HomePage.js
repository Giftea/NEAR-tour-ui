/* eslint-disable react/prop-types */
import React from 'react';
import { Cards, Navbar } from '../components';

const HomePage = ({ address, amount, symbol, destroy }) => {

  return (
    <div>
      <Navbar address={address} amount={amount} symbol={symbol} destroy={destroy} />
      <Cards address={address} />
    </div>
  );
};

export default HomePage;
