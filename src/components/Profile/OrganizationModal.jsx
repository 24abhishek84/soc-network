import React from 'react'

import { Modal, Button, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import * as Yup from "yup";

import DateTimePicker from 'react-widgets/lib/DateTimePicker';

const OrganizationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(60, "Too Long!").required("Required"),
});

const associatedRoleOptions = [
  { value: 'php_developer', label: 'PHP Developer' },
  { value: 'react', label: 'React Developer' },
];

const OrganizationModal = ({ show, onHide, onSubmit }) => {
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
          Add Organization
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '75vh', overflowY: 'auto' }}>
        <Formik
          enableReinitialize
          initialValues={{
            name: '',
            position: '',
            membershipOnGoing: true,
            associatedRole: undefined,
            startDate: '',
            endDate: '',
            description: '',
          }}
          validationSchema={OrganizationSchema}
          onSubmit={(values) => handleFormSubmit(values)}
          render={(renderProps) => {
            const { submitForm, setFieldValue, values: allValues } = renderProps;
            bindSubmitForm(submitForm);
            return (
              <Form className="take-part-form" onSubmit={renderProps.handleSubmit}>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="name" required>Name</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="name" id="name" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="name" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="position" required>Position held</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="position" id="position" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="position" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="associatedRole">Associated with</label>
                      <Select
                        id="associatedRole"
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
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="associatedRole" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="membershipOnGoing">
                        <Field type="checkbox" className="input-field shadow-none" name="membershipOnGoing" id="membershipOnGoing" checked={allValues.membershipOnGoing} /> Membership ongoing
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={4}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="startDate">Start Date</label>
                      <DateTimePicker
                        onChange={(date) => setFieldValue('startDate', date)}
                        name="startDate"
                        value={allValues.startDate}
                      />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="startDate" component="div" />
                    </div>
                  </Col>
                    <Col sm={4}>
                      <div className="form-group">
                        <label className="font-size-14" htmlFor="endDate">End Date</label>
                          {!allValues.membershipOnGoing ?
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
                      </div>
                    </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="description">Description</label>
                      <Field component="textarea" rows="4" className="form-control input-field shadow-none font-size-14 text-body" name="description" id="description" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="description" component="div" />
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

export default OrganizationModal;