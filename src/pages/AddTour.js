/* eslint-disable react/prop-types */
import React from 'react';
import Addtour from '../components/AddTour/AddTour';
import { Navbar } from '../components';

const AddTour = ({ address, amount, symbol, destroy }) => {
  return (
    <div>
      <Navbar address={address} amount={amount} symbol={symbol} destroy={destroy} />

      <Addtour />
    </div>
  );
};

export default AddTour;
