/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Container } from 'react-bootstrap';
import '../../styles/Tour.css';
import { Parallax } from 'react-parallax';
import { Typography } from '@mui/material';
import Description from './Description';
import Sidebox from './Sidebox';
import { Comments } from './Comment';

const Tour = ({ tour, address }) => {
  return (
    <>
      <Parallax blur={4} bgImage={tour.imageCover} bgImageAlt="the cat" strength={500}>
        <div style={{ height: 400 }}>
          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            <Typography variant="h2" className="font-bold" component="div">
              {tour.name}
            </Typography>
          </div>
        </div>
      </Parallax>
      <Container>
        <Row className=" my-5">
          <Description desc={tour.description} images={tour.images} />
          <Sidebox tour={tour} address={address} />
        </Row>
        <Row>
          <Comments />
        </Row>
      </Container>
    </>
  );
};

export default Tour;
