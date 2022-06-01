/* eslint-disable react/prop-types */
import React from 'react';
import { Fab, Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTour } from '../utils/tour';
import { useHistory } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { grey, blueGrey } from '@mui/material/colors';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const fabStyle = {
  position: 'fixed',
  bottom: 20,
  right: 20,
  zIndex: 10000,
  background: grey[600],
  '&:hover': {
    background: grey[500]
  }
};

const buttonStyle = {
  background: blueGrey[400],
  '&:hover': {
    background: blueGrey[300]
  }
};

export const DeleteTourButton = ({ tour, address }) => {
  const navigate = useHistory();

  const deleteTourById = async () => {
    try {
      await deleteTour({ id: tour.id });
      setTimeout(() => {
        navigate.push('/');
        window.location.reload();
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {tour.owner === address ? (
        <Box sx={{ color: 'white' }}>
          <Fab size="large" sx={fabStyle} color="inherit" aria-label="add" onClick={deleteTourById}>
            <DeleteIcon />
          </Fab>
        </Box>
      ) : (
        <span></span>
      )}
    </>
  );
};

export const AddTourButton = () => {
  const navigate = useHistory();

  return (
    <Fab
      onClick={() => navigate.push('/addtour')}
      variant="extended"
      sx={fabStyle}
      color="primary"
      aria-label="add">
      Add Tour
      <AddIcon />
    </Fab>
  );
};

export const GoToHomePage = () => {
  const navigate = useHistory();

  return (
    <Button
      variant="contained"
      onClick={() => navigate.push('/')}
      sx={buttonStyle}
      startIcon={<ArrowBackIcon />}
      className=" my-4 mx-1">
      Go Back
    </Button>
  );
};


export const HomeButton = () => {

}