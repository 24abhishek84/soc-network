import React from 'react'

import { Modal, Button, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

import DateTimePicker from 'react-widgets/lib/DateTimePicker';

import './ProfileModal.css';

const WorkExperienceSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  company: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  location: Yup.string().min(2, "Too Short!").max(20, "Too Long!").required("Required"),
  currentlyWorking: Yup.string().min(2, "Too Short!").max(20, "Too Long!").required("Required"),
  startDate: Yup.string().required("Required"),
  endDate: Yup.string().when('currentlyWorking', (currentlyWorking, endDateSchema) => currentlyWorking ? endDateSchema.required('Required') : endDateSchema),
});

const WorkExperienceModal = ({ show, onHide, onSubmit }) => {

  const handleFormSubmit = async (values) => {
    onSubmit(values);
    await onHide();
  }

  let submitMyForm = null;

  const handleSubmitMyForm = (e) => {
    if (submitMyForm) {
      submitMyForm(e);
    }
  };

  const bindSubmitForm = (submitForm) => {
    submitMyForm = submitForm;
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName="mw-100"
      className="work-experience-modal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add experience
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '50vh', overflowY: 'auto' }}>
        <Formik
          enableReinitialize
          initialValues={{
            title: '',
            company: '',
            location: '',
            currentlyWorking: true,
            startDate: '',
            endDate: '',
          }}
          validationSchema={WorkExperienceSchema}
          onSubmit={(values) => handleFormSubmit(values)}
          render={(renderProps) => {
            const { submitForm, setFieldValue, values: allValues } = renderProps;
            bindSubmitForm(submitForm);
            return (
              <Form className="take-part-form" onSubmit={renderProps.handleSubmit}>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="title" required>Title</label>
                      <Field type="text" className="form-control input-field shadow-none" name="title" id="title" placeholder="Ex: Administrative Associate" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="title" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="company">Company</label>
                      <Field type="text" className="form-control input-field shadow-none" name="company" id="company" placeholder="Ex: Microsoft" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="company" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="location">Location</label>
                      <Field type="text" className="form-control input-field shadow-none" name="location" id="location" placeholder="Ex: London, United KingdomAns" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="location" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="currentlyWorking">
                        <Field type="checkbox" className="input-field shadow-none" name="currentlyWorking" id="currentlyWorking" checked={allValues.currentlyWorking} /> I am currently working in this role
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={4}>
                    <label className="font-size-14" htmlFor="startDate">Start Date</label>
                    <DateTimePicker
                      onChange={(date) => setFieldValue('startDate', date)}
                      name="startDate"
                      value={allValues.startDate}
                    />
                    <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="startDate" component="div" />
                  </Col>
                    <Col sm={4}>
                      <label className="font-size-14" htmlFor="endDate">End Date</label>
                        {!allValues.currentlyWorking ?
                          <React.Fragment>
                            <DateTimePicker
                              onChange={(date) => setFieldValue('endDate', date)}
                              name="endDate"
                              value={allValues.endDate}
                              min={allValues.startDate}
                            />
                            <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="endDate" component="div" />
                          </React.Fragment>
                          :
                          <div className="font-size-12 mt-2">Present</div>
                        }
                    </Col>
                </Row>
              </Form>
            )
          }}
        />
      </Modal.Body>
      <Modal.Footer className="p-1">
        <Button onClick={handleSubmitMyForm} className="font-size-16 rounded-0" variant="primary">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default WorkExperienceModal
