import React from 'react';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  color: '#fff',
  p: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 0,
  outline: 'none'
};

export default function Loader() {
  return (
    <div>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <CircularProgress color="inherit" />
        </Box>
      </Modal>
    </div>
  );
}
