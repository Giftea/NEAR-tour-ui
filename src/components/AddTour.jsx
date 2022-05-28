import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Fab, Modal, Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const fabStyle = {
  position: 'fixed',
  bottom: 20,
  right: 20,
  background: grey[800]
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

const AddTour = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Fab onClick={handleOpen} variant="extended" sx={fabStyle} color="primary" aria-label="add">
        Add Tour
        <AddIcon />
      </Fab>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography className="" variant="h5" component="div">
            Add Tour
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default AddTour;
