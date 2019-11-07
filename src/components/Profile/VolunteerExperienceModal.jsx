import React from 'react'

import { Modal, Button, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import * as Yup from "yup";

import DateTimePicker from 'react-widgets/lib/DateTimePicker';

const VolunteerExperienceSchema = Yup.object().shape({
  organization: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  role: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required")
});

const causeOptions = [
  { value: 'ANIMAL_RIGHTS', label: 'Animal Welfare' },
  { value: 'ARTS_AND_CULTURE', label: 'Arts and Culture' },
  { value: 'CHILDREN', label: 'Children' },
  { value: 'CIVIL_RIGHTS', label: 'Civil Rights and Social Action' },
  { value: 'HUMANITARIAN_RELIEF', label: 'Disaster and Humanitarian Relief' },
  { value: 'ECONOMIC_EMPOWERMENT', label: 'Economic Empowerment' },
  { value: 'EDUCATION', label: 'Education' },
  { value: 'ENVIRONMENT', label: 'Environment' },
  { value: 'HEALTH', label: 'Health' },
  { value: 'HUMAN_RIGHTS', label: 'Human Rights' },
  { value: 'POLITICS', label: 'Politics' },
  { value: 'POVERTY_ALLEVIATION', label: 'Poverty Alleviation' },
  { value: 'SCIENCE_AND_TECHNOLOGY', label: 'Science and Technology' },
  { value: 'SOCIAL_SERVICES', label: 'Social Services' },
];

const VolunteerExperienceModal = ({ show, onHide, onSubmit }) => {

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
          Add volunteer experience
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '65vh', overflowY: 'auto' }}>
        <Formik
          enableReinitialize
          initialValues={{
            organization: '',
            role: '',
            cause: undefined,
            currentlyVolunteering: true,
            startDate: '',
            endDate: '',
            description: '',
          }}
          validationSchema={VolunteerExperienceSchema}
          onSubmit={(values) => handleFormSubmit(values)}
          render={(renderProps) => {
            const { submitForm, setFieldValue, values: allValues } = renderProps;
            bindSubmitForm(submitForm);
            return (
              <Form className="take-part-form" onSubmit={renderProps.handleSubmit}>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="organization">Organization</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="organization" id="organization" placeholder="Ex: Red Cross" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="organization" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="role">Role</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="role" id="role" placeholder="Ex: Microsoft" />
                      <div className="text-secondary font-italic pt-1">Ex: Meal Server, Mentor</div>
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="role" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="cause">Cause</label>
                      <Select
                        closeMenuOnSelect={true}
                        components={makeAnimated}
                        defaultValue={allValues.cause}
                        options={causeOptions}
                        menuContainerStyle={{ zIndex: 999 }}
                        styles={{
                          menuPortal: (base) => {
                            const { zIndex, ...rest } = base;
                            return { ...rest, zIndex: 9999 };
                          }
                        }}
                        menuPortalTarget={document.body}
                        onChange={(selectedOption) => renderProps.setFieldValue('cause', selectedOption ? selectedOption : undefined)}
                      />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14 text-body" name="cause" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="currentlyVolunteering">
                        <Field type="checkbox" className="input-field shadow-none" name="currentlyVolunteering" id="currentlyVolunteering" checked={allValues.currentlyVolunteering} /> I am currently volunteering in this role
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
                        {!allValues.currentlyVolunteering ?
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
                      <div className="text-secondary font-italic pt-1">Ex: I raised funds for our annual charity 5K.</div>
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

export default VolunteerExperienceModal
