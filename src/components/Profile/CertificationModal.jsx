import React from 'react'

import { Modal, Button, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const CertificationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(60, "Too Long!").required("Required"),
});

const CertificationModal = ({ show, onHide, onSubmit }) => {

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
          Add licenses & certifications
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
        <Formik
          enableReinitialize
          initialValues={{
            name: '',
            issuingOrganization: '',
            credentialExpire: '',
            issueDate: '',
            expirationDate: '',
            credentialId: '',
            credentialUrl: ''
          }}
          validationSchema={CertificationSchema}
          onSubmit={(values) => handleFormSubmit(values)}
          render={(renderProps) => {
            const { submitForm } = renderProps;
            bindSubmitForm(submitForm);
            return (
              <Form className="take-part-form" onSubmit={renderProps.handleSubmit}>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="name" required>Name</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="name" id="name" placeholder="Ex: Boston University" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="name" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="issuingOrganization">Issuing Organization</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="issuingOrganization" id="issuingOrganization" placeholder="Ex: Bachelor's" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="issuingOrganization" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="credentialExpire">
                        <Field type="checkbox" className="input-field shadow-none" name="credentialExpire" id="credentialExpire" /> This credential does not expire
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="issueDate">Issue Date</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="issueDate" id="issueDate" placeholder="Ex: Business" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="issueDate" component="div" />
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="expirationDate">Expiration Date</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="expirationDate" id="expirationDate" placeholder="Ex: Business" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="expirationDate" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="credentialId">Credential ID</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="credentialId" id="credentialId" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="credentialId" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="credentialUrl">Credential URL</label>
                      <Field type="text" rows="5" className="form-control input-field shadow-none font-size-14 text-body" name="credentialUrl" id="credentialUrl" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="credentialUrl" component="div" />
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

export default CertificationModal
