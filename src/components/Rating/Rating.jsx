/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { rateTour } from '../../utils/tour';
import { toast } from 'react-toastify';
import { NotificationSuccess, NotificationError } from '../Notification';

export default function BasicRating({ rate, tourId }) {
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
        <p>...</p>
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
        </>
      )}
    </>
  );
}

export const RatingBox = ({ rate, rateNumber, tourId }) => {
  return (
    <div className="flex-column">
      <div className="d-flex">
        <BasicRating tourId={tourId} rate={rate} rateNumber={rateNumber} />
        <Typography component="legend">{`(${rate}/5)`}</Typography>
      </div>
      <Typography color="text.secondary" component="legend">
        {rateNumber} Ratings
      </Typography>
    </div>
  );
};
