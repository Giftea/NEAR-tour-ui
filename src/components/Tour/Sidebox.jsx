/* eslint-disable react/prop-types */
import React from 'react';
import { Col } from 'react-bootstrap';
import { Button, Chip, Divider, List, ListItem, Typography } from '@mui/material';
import { RatingBox } from '../Rating/Rating';
import Impressions from '../Impressions';
import { utils } from 'near-api-js';
import { red } from '@mui/material/colors';

const Sidebox = ({ tour, address, buy }) => {
  const { id, price } = tour;

  const triggerBuy = () => {
    buy(id, price);
  };

  return (
    <Col className=" p-3">
      <List className="custom-card py-2 w-100 ">
        <ListItem className="p-3 justify-content-between">
          <Chip label={`${tour.sold} sold`} sx={{ bgcolor: red[200] }} className="px-2 font-bold" />
          <Typography>{utils.format.formatNearAmount(price)} NEAR</Typography>
        </ListItem>
        <Divider />{' '}
        <ListItem>
          <Typography variant="h5" component="div">
            Rating
          </Typography>
        </ListItem>
        <ListItem className="p-3 pt-0" divider>
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
          <Button className="w-100" size="large" onClick={triggerBuy} variant="contained">
            PURCHASE
          </Button>
        </ListItem>
      </List>
    </Col>
  );
};

export default Sidebox;
