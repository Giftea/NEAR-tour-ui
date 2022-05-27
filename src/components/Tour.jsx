/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Container } from 'react-bootstrap';
import '../styles/Tour.css';
import { Parallax } from 'react-parallax';
import { Typography } from '@mui/material';

const Tour = ({ tour }) => {
  return (
    <>
      <Parallax blur={4} bgImage={tour.imageCover} bgImageAlt="the cat" strength={500}>
        <div style={{ height: 400 }}>
          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            <Typography variant="h2" component="div">
              {tour.name}
            </Typography>
          </div>
        </div>
      </Parallax>
      <Container>
        <Row>
          <div className="header-cover"></div>

          {tour.name}
        </Row>
      </Container>
    </>
  );
};

export default Tour;
