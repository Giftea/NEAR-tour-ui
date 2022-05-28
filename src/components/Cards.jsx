/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import Card from './Card';
import { NotificationSuccess, NotificationError } from './Notification';
import { getTours, createTour } from '../utils/tour';
import { Container, Row } from 'react-bootstrap';
import Loader from './Loader';
import { Divider, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import AddTour from './AddTour';

const Cards = ({ address }) => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTours = useCallback(async () => {
    try {
      setLoading(true);
      setTours(await getTours());
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  });

  const addTour = async (data) => {
    try {
      setLoading(true);
      createTour(data).then((resp) => {
        fetchTours();
      });
      toast(<NotificationSuccess text="Tour added successfully." />);
    } catch (error) {
      console.log({ error });
      toast(<NotificationError text="Failed to create a tour." />);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);
  return (
    <>
      {!loading ? (
        <Container className=" my-5">
          <Divider className="my-3">
            <Typography variant="h4" sx={{ color: blue[700] }} component="div">
              ~ Explore Tours ~
            </Typography>
          </Divider>
          <AddTour />
          <Row xs={1} sm={2} lg={3} className="mt-5 mx-3 justify-content-between">
            {tours.map((_tour) => (
              <Card key={_tour.id} tour={_tour} address={address} />
            ))}
            {tours.map((_tour) => (
              <Card key={_tour.id} tour={_tour} address={address} />
            ))}
            {tours.map((_tour) => (
              <Card key={_tour.id} tour={_tour} address={address} />
            ))}
            {tours.map((_tour) => (
              <Card key={_tour.id} tour={_tour} address={address} />
            ))}
          </Row>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Cards;
