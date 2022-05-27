/* eslint-disable react/prop-types */
import React from 'react';
import { Col } from 'react-bootstrap';
import { Button, Chip, Divider, List, ListItem, Typography } from '@mui/material';
import { RatingBox } from '../Rating';
import Impressions from '../Impressions';

const Sidebox = ({ tour, address }) => {
  return (
    <Col className=" p-3">
      <List className="custom-card py-2 w-100 ">
        <ListItem className="p-3">
          <Chip label={`${tour.sold} sold`} color="primary" className="px-2 font-bold" />
        </ListItem>
        <Divider />{' '}
        <ListItem divider className="p-3">
          <RatingBox
            tourId={tour.id}
            rate={tour.ratingsAverage}
            rateNumber={tour.ratingsQuantity}
          />
        </ListItem>
        <ListItem>
          <Typography variant="h5" component="div">
            Impressions
          </Typography>
        </ListItem>
        <ListItem divider>
          <Impressions id={tour.id} address={address} likes={tour.like} dislikes={tour.dislike} />
        </ListItem>
        <ListItem className="p-3">
          <Button className="w-100" size="large" variant="contained">
            PURCHASE
          </Button>
        </ListItem>
      </List>
    </Col>
  );
};

export default Sidebox;
