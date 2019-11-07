import React from 'react'

import { Modal, Button, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import * as Yup from "yup";

const LanguageSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(60, "Too Long!").required("Required"),
  proficiency: Yup.string().required("Required"),
});

const proficiencyOptions = [
  { value: 'ELEMENTARY', label: 'Elementary proficiency' },
  { value: 'LIMITED_WORKING', label: 'Limited working proficiency' },
  { value: 'PROFESSIONAL_WORKING', label: 'Professional working proficiency' },
  { value: 'FULL_PROFESSIONAL', label: 'Full professional proficiency' },
  { value: 'NATIVE_OR_BILINGUAL', label: 'Native or bilingual proficiency' },
];

const LanguageModal = ({ show, onHide, onSubmit }) => {
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
          Add language
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '75vh', overflowY: 'auto' }}>
        <Formik
          enableReinitialize
          initialValues={{
            name: '',
            proficiency: ''
          }}
          validationSchema={LanguageSchema}
          onSubmit={(values) => handleFormSubmit(values)}
          render={(renderProps) => {
            const { submitForm, values: allValues } = renderProps;
            bindSubmitForm(submitForm);
            return (
              <Form className="take-part-form" onSubmit={renderProps.handleSubmit}>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="name" required>Language</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="name" id="name" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="name" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="number">Proficiency</label>
                      <Select
                        closeMenuOnSelect={true}
                        components={makeAnimated}
                        defaultValue={allValues.proficiency}
                        options={proficiencyOptions}
                        menuContainerStyle={{ zIndex: 999 }}
                        styles={{
                          menuPortal: (base) => {
                            const { zIndex, ...rest } = base;
                            return { ...rest, zIndex: 9999 };
                          }
                        }}
                        menuPortalTarget={document.body}
                        onChange={(selectedOption) => renderProps.setFieldValue('proficiency', selectedOption ? selectedOption : undefined)}
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

export default LanguageModal;