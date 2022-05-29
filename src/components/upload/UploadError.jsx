/* eslint-disable react/prop-types */
import { LinearProgress, Typography } from '@mui/material';
import React from 'react';
import { FileHeader } from './FileHeader';

export function UploadError({ file, onDelete, errors }) {
  return (
    <div style={{ color: 'red' }}>
      <FileHeader file={file} onDelete={onDelete} />
      <LinearProgress color="inherit" variant="determinate" value={100} />
      {errors.map((error) => (
        <div key={error.code}>
          <Typography color="error">{error.message}</Typography>
        </div>
      ))}
    </div>
  );
}
