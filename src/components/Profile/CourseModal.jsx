import React from 'react'

import { Modal, Button, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import * as Yup from "yup";

const CourseSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(60, "Too Long!").required("Required"),
});

const associatedRoleOptions = [
  { value: 'php_developer', label: 'PHP Developer' },
  { value: 'react', label: 'React Developer' },
];

const CourseModal = ({ show, onHide, onSubmit }) => {

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
          Add courses
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
        <Formik
          enableReinitialize
          initialValues={{
            name: '',
            number: '',
            associatedRole: undefined
          }}
          validationSchema={CourseSchema}
          onSubmit={(values) => handleFormSubmit(values)}
          render={(renderProps) => {
            const { submitForm, values: allValues } = renderProps;
            bindSubmitForm(submitForm);
            return (
              <Form className="take-part-form" onSubmit={renderProps.handleSubmit}>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="name" required>Course name</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="name" id="name" placeholder="Ex: Boston University" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="name" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="number">Number</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="number" id="number" placeholder="Ex: Bachelor's" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="number" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="number">Associated with</label>
                      <Select
                        closeMenuOnSelect={true}
                        components={makeAnimated}
                        defaultValue={allValues.associatedRole}
                        options={associatedRoleOptions}
                        menuContainerStyle={{ zIndex: 999 }}
                        styles={{
                          menuPortal: (base) => {
                            const { zIndex, ...rest } = base;
                            return { ...rest, zIndex: 9999 };
                          }
                        }}
                        menuPortalTarget={document.body}
                        onChange={(selectedOption) => renderProps.setFieldValue('associatedRole', selectedOption ? selectedOption : undefined)}
                      />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="number" component="div" />
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

export default CourseModal;
