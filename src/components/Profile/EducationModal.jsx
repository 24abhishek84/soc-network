import React from 'react'

import { Modal, Button, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const EducationSchema = Yup.object().shape({
  school: Yup.string().min(2, "Too Short!").max(60, "Too Long!").required("Required"),
});

const EducationModal = ({ show, onHide, onSubmit }) => {

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
          Add education
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
        <Formik
          enableReinitialize
          initialValues={{
            school: '',
            degree: '',
            fieldOfStudy: '',
            startYear: '',
            endYear: '',
            grade: '',
            activities: '',
          }}
          validationSchema={EducationSchema}
          onSubmit={(values) => handleFormSubmit(values)}
          render={(renderProps) => {
            const { submitForm } = renderProps;
            bindSubmitForm(submitForm);
            return (
              <Form className="take-part-form" onSubmit={renderProps.handleSubmit}>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="school" required>School</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="school" id="school" placeholder="Ex: Boston University" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="school" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="degree">Degree</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="degree" id="degree" placeholder="Ex: Bachelor's" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="degree" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="fieldOfStudy">Field of study</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="fieldOfStudy" id="fieldOfStudy" placeholder="Ex: Business" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="fieldOfStudy" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="startYear">Start Year</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="startYear" id="startYear" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="startYear" component="div" />
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="endYear">End Year</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="endYear" id="endYear" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="endYear" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="grade">Grade</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="grade" id="grade" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="grade" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="activities">Activities and societies</label>
                      <Field component="textarea" rows="5" className="form-control input-field shadow-none font-size-14 text-body" name="activities" id="activities" />
                      <div className="text-secondary font-italic pt-1">Ex: Alpha Phi Omega, Marching Band, Volleyball</div>
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="activities" component="div" />
                    </div>
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

export default EducationModal
