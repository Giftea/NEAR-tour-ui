/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { getTours } from '../../utils/tour';
import { Col, Container, Row } from 'react-bootstrap';
import Loader from '../Loader';
import { Divider, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { AddTourButton } from '../Button';

const Cards = ({ address }) => {

  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTours = async () => {
    try {
      setLoading(true);
      setTours(await getTours());
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);
  return (
    <>
      <AddTourButton/>
      {!loading ? (
        <Container className=" my-5">
          <Divider className="my-3">
            <Typography variant="h4" sx={{ color: blue[700] }} component="div">
              ~ Explore Tours ~
            </Typography>
          </Divider>
          <Row xs={1} sm={2} lg={3} className="mt-5 mx-3">
            {tours.map((_tour) => (
              <Col key={_tour.id}>
                <Card tour={_tour} address={address} />
              </Col>
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
