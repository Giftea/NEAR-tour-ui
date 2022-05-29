/* eslint-disable react/prop-types */
import { Button } from '@mui/material';
import React from 'react';

export function FileHeader({ file, onDelete }) {
  return (
    <div className="d-flex justify-content-between my-3 align-items-center">
      <div>{file.name}</div>
      <div>
        <Button variant="outlined" size="small" onClick={() => onDelete(file)}>
          Delete
        </Button>
      </div>
    </div>
  );
}
