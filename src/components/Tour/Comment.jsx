/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Divider,
  Typography,
  Avatar,
  Button,
  Modal,
  FormGroup,
  TextareaAutosize
} from '@mui/material';
import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { blue } from '@mui/material/colors';
import { Col } from 'react-bootstrap';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { string, object } from 'yup';
import { commentOnTour } from '../../utils/tour';

export const AddComment = ({ id }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialValue = {
    comment: ''
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Comment
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Formik
          validationSchema={object({
            comment: string().required().min(2)
          })}
          initialValues={initialValue}
          onSubmit={(values, formikHelpers) => {
            const value = values.comment;
            console.log({ tourId: id, comment: value });
            return new Promise((res) => {
              commentOnTour({ tourId: id, comment: value });
              console.log(values);
              console.log(formikHelpers);
              res();
            });
          }}>
          {() => (
            <Form>
              <FormGroup>
                <Field name="comment" as={TextareaAutosize} label="Comment" />
                <ErrorMessage name="comment" />
              </FormGroup>
              <Button type="submit">Add Comment</Button>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export const Comment = ({ comment }) => {
  return (
    <>
      <Divider />
      <div className="px-4 py-4">
        <div className=" d-flex align-items-center">
          <Avatar sx={{ bgcolor: blue[500] }}>
            <PersonOutlineIcon />
          </Avatar>

          <Typography className="px-2 font-bold" component="div">
            {comment.commenter}
          </Typography>
        </div>
        <Typography className="pt-2 px-5" component="div">
          {comment.comment}
        </Typography>
      </div>
    </>
  );
};

export const Comments = ({ tour }) => {
  return (
    <div className="px-4">
      <Col md={8} className="custom-card my-4">
        <div className="py-4 px-4 d-flex justify-content-between align-content-center">
          <Typography className="" variant="h4" component="div">
            {tour.comments.length} Comments
          </Typography>
          <div>
            <AddComment id={tour.id} />
          </div>
        </div>
        {tour.comments.map((comment, index) => {
          return <Comment key={index} comment={comment} />;
        })}
      </Col>
    </div>
  );
};
