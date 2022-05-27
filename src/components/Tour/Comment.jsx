import { Divider, Typography, Avatar, Button } from '@mui/material';
import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { blue } from '@mui/material/colors';
import { Col } from 'react-bootstrap';

export const Comment = () => {
  return (
    <>
      <Divider />
      <div className="px-4 py-4">
        <div className=" d-flex align-items-center">
          <Avatar sx={{ bgcolor: blue[500] }}>
            <PersonOutlineIcon />
          </Avatar>

          <Typography className="px-2 font-bold" component="div">
            giftea
          </Typography>
        </div>
        <Typography className="pt-2 px-5" component="div">
          Lorem ipsum dolor sit amet.
        </Typography>
      </div>
    </>
  );
};

export const Comments = () => {
  return (
    <div className="px-4">
      <Col md={8} className="custom-card my-4">
        <div className="py-4 px-4 d-flex justify-content-between align-content-center">
          <Typography className="" variant="h4" component="div">
            2 Comments
          </Typography>
          <div>
            <Button className="" variant="outlined">
              Comment
            </Button>
          </div>
        </div>
        <Comment />
        <Comment />
      </Col>
    </div>
  );
};
