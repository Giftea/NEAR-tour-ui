/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import Card from './Card';
import { NotificationSuccess, NotificationError } from './Notification';
import { getTours, buyTour, createTour } from '../utils/tour';
import { Container, Row } from 'react-bootstrap';
import Loader from './Loader';

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

  const buy = async (id, price) => {
    try {
      await buyTour({
        id,
        price
      }).then((resp) => fetchTours());
      toast(<NotificationSuccess text="Product bought successfully" />);
    } catch (error) {
      toast(<NotificationError text="Failed to purchase product." />);
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
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="fs-4 fw-bold mb-0">Tours</h1>
            {/* <AddProduct save={addProduct} /> */}
          </div>
          <Row xs={1} sm={2} lg={3} className="g-3  mb-5 g-xl-4 g-xxl-5">
            {tours.map((_tour) => (
              <Card key={_tour.id} tour={_tour} buy={buy} address={address} />
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
