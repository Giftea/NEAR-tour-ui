/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { rateTour } from '../utils/tour';
import { toast } from 'react-toastify';
import { NotificationSuccess, NotificationError } from './Notification';
import Loader from './Loader';

export default function BasicRating({ rate, rateNumber, tourId }) {
  const [value, setValue] = useState(rate);
  const [loading, setLoading] = useState(false);

  const addRate = async (rating) => {
    try {
      setLoading(true);
      rateTour(rating);

      toast(<NotificationSuccess text="Tour added successfully." />);
    } catch (error) {
      console.log(error);
      toast(<NotificationError text="Failed to create a tour." />);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box>
            <Rating
              name="half-rating-read"
              value={rate}
              onChange={(event, rate) => {
                addRate({ tourId, rate });
              }}
            />{' '}
          </Box>
          <Typography className="mb-2" component="legend">
            ({rateNumber}){' '}
          </Typography>
        </>
      )}
    </>
  );
}
