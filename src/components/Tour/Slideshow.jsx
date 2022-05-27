/* eslint-disable react/prop-types */
import { Divider, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SlideShow = ({ images }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };

  return (
    <div className="mt-5">
      <Divider />
      <Typography className="mt-5" variant="h4" component="div">
        Gallery
      </Typography>
      <Carousel partialVisbile itemClass="image-item" responsive={responsive}>
        {images.map((image, index) => {
          return <img className="slide-image" key={index} src={image} alt={index} />;
        })}
      </Carousel>
    </div>
  );
};

export default SlideShow;
