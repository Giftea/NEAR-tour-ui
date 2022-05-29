import React from 'react';
import { Box, Typography, Button, FormGroup, TextField, TextareaAutosize } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { array, object, string } from 'yup';
import { MultipleFileUploadField } from '../upload/MultipleFileUploadField';
import { Col, Container, Row } from 'react-bootstrap';
import { createTour } from '../../utils/tour';
import { GoToHomePage } from '../Button';

const AddTour = () => {
  const initialValues = {
    name: '',
    description: '',
    summary: '',
    price: '',
    imageCover: '',
    images: []
  };

  return (
    <>
      <Container className="my-5">
        <div className="mx-md-5 mx-2">
          <GoToHomePage />
        </div>
        <Row className="p-md-5 py-3 card mx-md-5 mx-2">
          <Typography className="mb-4" color='primary' variant="h4" component="div">
            Add Tour
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={object({
              name: string().required().min(2).max(20),
              description: string().required().min(2),
              summary: string().required().min(2).max(60),
              price: string().required().min(1),
              imageCover: string().required().min(1).typeError('Cover Image is required'),
              images: array(string().required()).min(1)
            })}
            onSubmit={(values, helpers) => {
              return new Promise((res) => {
                createTour({ ...values });
                res();
                helpers.resetForm();
              });
            }}>
            {({ isSubmitting, isValidating }) => (
              <Form>
                <Row>
                  <Col md={6} className="my-2">
                    <FormGroup>
                      <Field name="name" as={TextField} label="Name" />
                      <ErrorMessage component="div" className="text-red" name="name" />
                    </FormGroup>
                  </Col>
                  <Col md={6} className="my-2">
                    <FormGroup>
                      <Field name="price" as={TextField} label="Price" />
                      <ErrorMessage component="div" className="text-red" name="price" />
                    </FormGroup>
                  </Col>
                </Row>
                <Typography variant="h6" className="mt-2" component="div">
                  Summary
                </Typography>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field name="summary" as={TextareaAutosize} minRows={3} />
                    <ErrorMessage component="div" className="text-red" name="summary" />
                  </FormGroup>
                </Box>
                <Typography variant="h6" component="div">
                  Description
                </Typography>
                <FormGroup>
                  <Field name="description" as={TextareaAutosize} minRows={5} />
                  <ErrorMessage component="div" className="text-red" name="description" />
                </FormGroup>
                <Typography variant="h6" className="my-2" component="div">
                  Cover Image
                </Typography>
                <Box marginBottom={2}>
                  <MultipleFileUploadField name="imageCover" />
                  <ErrorMessage component="div" className="text-red mt-2" name="imageCover" />
                </Box>
                <Typography variant="h6" className="my-2" component="div">
                  Tour Image Gallery
                </Typography>
                <Box marginBottom={2}>
                  <MultipleFileUploadField name="images" />
                  <ErrorMessage component="div" className="text-red mt-2" name="images" />
                </Box>

                <Button
                  variant="contained"
                  disabled={isSubmitting || isValidating}
                  color="primary"
                  className="w-100 mt-3"
                  type="submit">
                  ADD TOUR
                </Button>
              </Form>
            )}
          </Formik>
        </Row>
      </Container>
    </>
  );
};

export default AddTour;
