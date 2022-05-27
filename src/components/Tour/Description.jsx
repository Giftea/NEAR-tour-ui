/* eslint-disable react/prop-types */
import { Typography } from '@mui/material';
import React from 'react';
import { Col } from 'react-bootstrap';
import SlideShow from './Slideshow';

const Description = ({ desc, images }) => {
  return (
    <Col className=" p-3 " md={8}>
      <div className="custom-card  py-4 px-4">
        <Typography variant="h4" component="div">
          Description
        </Typography>

        <p className="mt-3">{desc}</p>
        <SlideShow images={images} />
      </div>
    </Col>
  );
};

export default Description;
