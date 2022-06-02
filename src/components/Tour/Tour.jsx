/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import { Typography } from '@mui/material';
import Description from './Description';
import Sidebox from './Sidebox';
import { Comments } from './Comment';
import { buyTour } from '../../utils/tour';
import { toast } from 'react-toastify';
import { NotificationSuccess, NotificationError } from '../Notification';
import { DeleteTourButton, GoToHomePage } from '../Button';

const Tour = ({ tour, address }) => {
  const buy = async (id, price) => {
    try {
      await buyTour({
        id,
        price
      });
      toast(<NotificationSuccess text="Product bought successfully" />);
    } catch (error) {
      toast(<NotificationError text="Failed to purchase product." />);
    }
  };
  return (
    <>
      <DeleteTourButton tour={tour} address={address} />
      <Parallax blur={4} bgImage={tour.imageCover} bgImageAlt="the cat" strength={500}>
        <div style={{ height: 400 }}>
          <div className="w-100 h-100 d-flex text-center align-items-center justify-content-center">
            <Typography variant="h2" className="font-bold text-shad " component="div">
              {tour.name}
            </Typography>
          </div>
        </div>
      </Parallax>
      <Container className=" my-5">
       <GoToHomePage/>
        <Row>
          <Description desc={tour.description} images={tour.images} />
          <Sidebox tour={tour} address={address} buy={buy} />
        </Row>
        <Row>
          <Comments tour={tour} />
        </Row>
      </Container>
    </>
  );
};

export default Tour;
