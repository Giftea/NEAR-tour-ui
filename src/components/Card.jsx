/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
// import { utils } from "near-api-js";

import {
  Card,
  Button,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box
} from '@mui/material';
import BasicRating from './Rating';
import Impressions from './Impressions';
import { Link } from 'react-router-dom';

const TourCard = ({ tour, buy, address }) => {
  useEffect(() => {
    // console.log(tour);
  });
  return (
    <Card className="p-0" sx={{ maxWidth: 345 }}>
      <Link to={`/tour/${tour.id}`}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={tour.imageCover} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom color="text.primary" variant="h5" component="div">
              {tour.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {tour.summary}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <BasicRating
          tourId={tour.id}
          rate={tour.ratingsAverage}
          rateNumber={tour.ratingsQuantity}
        />
        <Impressions id={tour.id} address={address} likes={tour.like} dislikes={tour.dislike} />
      </CardActions>
    </Card>
  );
};

export default TourCard;
