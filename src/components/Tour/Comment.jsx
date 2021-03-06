/* eslint-disable react/prop-types */
import {
  Divider,
  Typography,
  Avatar,
  Button,
  Modal,
  FormGroup,
  TextareaAutosize,
  Box
} from '@mui/material';
import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { blue, green } from '@mui/material/colors';
import { Col } from 'react-bootstrap';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { string, object } from 'yup';
import { commentOnTour } from '../../utils/tour';
import { Send } from '@mui/icons-material';
import DateUtil from '../../utils/DateUtils';

export const AddComment = ({ id }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const initialValue = {
    comment: ''
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Comment
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography className="" variant="h5" component="div">
            Add Comment
          </Typography>
          <Formik
            validationSchema={object({
              comment: string().required().min(2)
            })}
            initialValues={initialValue}
            onSubmit={(values) => {
              const value = values.comment;
              return new Promise((res) => {
                commentOnTour({ tourId: id, comment: value });
                res();
              });
            }}>
            {() => (
              <Form>
                <FormGroup>
                  <Field name="comment" as={TextareaAutosize} minRows={3} label="Comment" />
                  <ErrorMessage name="comment" />
                </FormGroup>
                <div className="d-flex flex-row-reverse">
                  <Button
                    className="mt-2"
                    variant="contained"
                    endIcon={<Send />}
                    sx={{ bgcolor: green[400] }}
                    type="submit">
                    Add
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};

export const Comment = ({ comment }) => {
  return (
    <>
      <Divider />
      <div className="px-4 py-4">
        <div className=" d-flex  align-items-center">
          <Avatar sx={{ bgcolor: blue[300], width: 56, height: 56 }}>
            <PersonOutlineIcon />
          </Avatar>

          <Box className="mx-3">
            <Typography className="font-bold" component="div">
              {comment.commenter}
            </Typography>
            <Typography gutterBottom color="text.secondary" variant="small" component="small">
              {DateUtil(comment.createdAt)}
            </Typography>
          </Box>
        </div>
        <div>
          <Typography className="pt-2 mx-4 px-5 pr-0" component="div">
            {comment.comment}
          </Typography>
        </div>
      </div>
    </>
  );
};

export const Comments = ({ tour }) => {
  return (
    <div className="px-4">
      <Col md={8} className="custom-card my-4">
        <div className="py-4 px-4 d-flex justify-content-between align-content-center">
          <Typography className="" variant="h5" component="div">
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
