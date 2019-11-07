import React, { useState, useRef } from 'react'

import { Modal, Button, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import * as Yup from "yup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import DateTimePicker from 'react-widgets/lib/DateTimePicker';

const ProjectsSchema = Yup.object().shape({
  projectTitle: Yup.string().min(2, "Too Short!").max(60, "Too Long!").required("Required"),
});

const associatedRoleOptions = [
  { value: 'php_developer', label: 'PHP Developer' },
  { value: 'react', label: 'React Developer' },
];

const ProjectsModal = ({ show, onHide, onSubmit }) => {

  const [incr, setIncr] = useState(0);
  const creatorInput = useRef(null);

  const handleFormSubmit = async (values) => {
    delete values.creatorName;
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
          Add Project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '75vh', overflowY: 'auto' }}>
        <Formik
          enableReinitialize
          initialValues={{
            projectTitle: '',
            currentlyWorking: true,
            patentNumber: '',
            startDate: '',
            endDate: '',
            creators: ['Chetan Godhani'],
            creatorName: '',
            projectUrl: '',
            description: '',
          }}
          validationSchema={ProjectsSchema}
          onSubmit={(values) => handleFormSubmit(values)}
          render={(renderProps) => {
            const { submitForm, setFieldValue, values: allValues } = renderProps;
            bindSubmitForm(submitForm);
            return (
              <Form className="take-part-form" onSubmit={renderProps.handleSubmit}>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="projectTitle" required>Project Title</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="projectTitle" id="projectTitle" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="projectTitle" component="div" />
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
                      </div>
                    </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="creator">Creators</label>
                      <div className="d-flex flex-column pt-1">
                        {allValues.creators.map((creator, index) => {
                          return (
                            <div key={`${creator}-${index}`} className="d-flex align-items-center mt-2">
                              <div className="d-flex justify-content-between w-100 align-items-center">
                                <div className="d-flex align-items-center">
                                  <FontAwesomeIcon className="font-size-32 text-secondary" icon={faUserCircle} /> <span className="ml-2 font-size-16 font-weight-bold"> {creator}</span>
                                </div>
                                {index !== 0 &&
                                  <i
                                    className="font-size-32 text-secondary cursor-pointer user-select-none material-icons"
                                    onClick={() => {
                                      const creatorArray = allValues.creators.filter(creatorName => creatorName !== creator);
                                      setFieldValue('creators', [...new Set(creatorArray)]);
                                    }}
                                  >close</i>
                                }
                              </div>
                            </div>
                          );
                        })}
                        {incr === 1 &&
                          <Field
                            type="text"
                            name="creatorName"
                            className="form-control input-field shadow-none font-size-14 text-body mt-2"
                            onKeyUp={(event) => {
                              if(event.key === 'Enter'){
                                const creatorArray = [...allValues.creators, event.target.value];
                                setFieldValue('creators', [...new Set(creatorArray)]);
                                setFieldValue('creatorName', '');
                                setIncr(0);
                              }
                            }}
                            innerRef={creatorInput}
                            placeholder="Ex: John"
                          />
                        }
                      </div>
                      <hr />
                      <div className="text-primary d-flex justify-content-between font-size-14 font-weight-bold">
                        <span className="text-secondary font-italic">You can add {10 - allValues.creators.length} more creators</span>
                        <span
                          className="cursor-pointer user-select-none"
                          onClick={async () => {
                            if(allValues.creators.length < 10) {
                              await setIncr(1);
                              creatorInput && creatorInput.current && creatorInput.current.focus();
                            } else {
                              alert('can\'t add more');
                            }
                          }}
                        >
                          Add creator
                        </span>
                      </div>
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
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="projectUrl">Project URL</label>
                      <Field type="text" rows="5" className="form-control input-field shadow-none font-size-14 text-body" name="projectUrl" id="projectUrl" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="projectUrl" component="div" />
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

export default ProjectsModal;