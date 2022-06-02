/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Divider,
  Box
} from '@mui/material';
import { RatingBox } from '../Rating/Rating';
import Impressions from '../Impressions';
import { Link } from 'react-router-dom';
import DateUtil from '../../utils/DateUtils';
import { motion } from 'framer-motion/dist/framer-motion';

const TourCard = ({ tour, address }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Card className="p-0 m-3" sx={{ maxWidth: 345 }}>
        <Link to={`/tour/${tour.id}`}>
          <CardActionArea>
            <CardMedia component="img" height="140" image={tour.imageCover} alt="green iguana" />
            <CardContent>
              <Box className="d-flex align-items-center justify-content-between">
                <Typography gutterBottom color="text.primary" variant="h6" component="div">
                  {tour.name}
                </Typography>
                <Typography gutterBottom color="primary" variant='small' component="small">
                  • {DateUtil(tour.createdAt)}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {tour.summary}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <Divider />
        <CardActions className="justify-content-between px-3">
          <RatingBox
            tourId={tour.id}
            rate={tour.ratingsAverage}
            rateNumber={tour.ratingsQuantity}
          />
          <Impressions id={tour.id} address={address} likes={tour.like} dislikes={tour.dislike} />
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default TourCard;
