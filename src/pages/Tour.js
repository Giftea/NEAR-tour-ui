import React, { useEffect, useState, useCallback } from 'react';
// import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { getTour } from '../utils/tour';
import Tour from '../components/Tour';

const TourPage = () => {
  let params = useParams();
  const [tour, setTour] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchTour = useCallback(async (id) => {
    try {
      setLoading(true);
      setTour(await getTour({ id: id }));
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    fetchTour(params.id);
    console.log(tour);
  }, []);
  return <>{loading ? <Loader /> : <Tour tour={tour} />}</>;
};

export default TourPage;
