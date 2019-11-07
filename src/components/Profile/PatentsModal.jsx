import React, { useState, useRef } from 'react'

import { Modal, Button, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import * as Yup from "yup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import patentOfficeOptions from "./countriesList";

import DateTimePicker from 'react-widgets/lib/DateTimePicker';

const PatentsSchema = Yup.object().shape({
  patentTitle: Yup.string().min(2, "Too Short!").max(60, "Too Long!").required("Required"),
  patentOffice: Yup.string().required("Required"),
  patentNumber: Yup.string().required("Required"),
});

const PatentsModal = ({ show, onHide, onSubmit }) => {

  const [incr, setIncr] = useState(0);
  const inventorInput = useRef(null);

  const handleFormSubmit = async (values) => {
    delete values.inventorName;
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
          Add Patent
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '75vh', overflowY: 'auto' }}>
        <Formik
          enableReinitialize
          initialValues={{
            patentTitle: '',
            patentOffice: undefined,
            patentNumber: '',
            inventors: ['Chetan Godhani'],
            inventorName: '',
            patentStatus: 'patent_issued',
            filingDate: '',
            patentUrl: '',
            description: '',
          }}
          validationSchema={PatentsSchema}
          onSubmit={(values) => handleFormSubmit(values)}
          render={(renderProps) => {
            const { submitForm, setFieldValue, values: allValues } = renderProps;
            bindSubmitForm(submitForm);
            return (
              <Form className="take-part-form" onSubmit={renderProps.handleSubmit}>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="patentTitle" required>Patent Title</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="patentTitle" id="patentTitle" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="patentTitle" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="patentNumber">Patent office</label>
                      <Select
                        closeMenuOnSelect={true}
                        components={makeAnimated}
                        defaultValue={allValues.patentOffice}
                        options={patentOfficeOptions}
                        menuContainerStyle={{ zIndex: 999 }}
                        styles={{
                          menuPortal: (base) => {
                            const { zIndex, ...rest } = base;
                            return { ...rest, zIndex: 9999 };
                          }
                        }}
                        menuPortalTarget={document.body}
                        onChange={(selectedOption) => renderProps.setFieldValue('patentOffice', selectedOption ? selectedOption : undefined)}
                      />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="patentOffice" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="patentNumber">Patent or application number</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="patentNumber" id="patentNumber" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="patentNumber" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="inventor">Inventor</label>
                      <div className="d-flex flex-column pt-1">
                        {allValues.inventors.map((inventor, index) => {
                          return (
                            <div key={`${inventor}-${index}`} className="d-flex align-items-center mt-2">
                              <div className="d-flex justify-content-between w-100 align-items-center">
                                <div className="d-flex align-items-center">
                                  <FontAwesomeIcon className="font-size-32 text-secondary" icon={faUserCircle} /> <span className="ml-2 font-size-16 font-weight-bold"> {inventor}</span>
                                </div>
                                {index !== 0 &&
                                  <i
                                    className="font-size-32 text-secondary cursor-pointer user-select-none material-icons"
                                    onClick={() => {
                                      const inventorArray = allValues.inventors.filter(inventorName => inventorName !== inventor);
                                      setFieldValue('inventors', [...new Set(inventorArray)]);
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
                            name="inventorName"
                            className="form-control input-field shadow-none font-size-14 text-body mt-2"
                            onKeyUp={(event) => {
                              if(event.key === 'Enter'){
                                const inventorArray = [...allValues.inventors, event.target.value];
                                setFieldValue('inventors', [...new Set(inventorArray)]);
                                setFieldValue('inventorName', '');
                                setIncr(0);
                              }
                            }}
                            innerRef={inventorInput}
                            placeholder="Ex: John"
                          />
                        }
                      </div>
                      <hr />
                      <div className="text-primary d-flex justify-content-between font-size-14 font-weight-bold">
                        <span className="text-secondary font-italic">You can add {10 - allValues.inventors.length} more inventors</span>
                        <span
                          className="cursor-pointer user-select-none"
                          onClick={async () => {
                            if(allValues.inventors.length < 10) {
                              await setIncr(1);
                              inventorInput && inventorInput.current && inventorInput.current.focus();
                            } else {
                              alert('can\'t add more');
                            }
                          }}
                        >
                          Add inventor
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14">Status</label>
                      <div className="form-check mt-2">
                        <Field type="radio" name="patentStatus" id="patent_issued" className="form-check-input input-checkbox" value="patent_issued" checked={allValues.patentStatus === 'patent_issued'} />
                        <label htmlFor="patent_issued" className="w-100 font-size-14 form-check-label">Patent Issued</label>
                      </div>
                      <div className="form-check mt-2">
                        <Field type="radio" name="patentStatus" id="patent_pending" className="form-check-input input-checkbox" value="patent_pending" checked={allValues.patentStatus === 'patent_pending'} />
                        <label htmlFor="patent_pending" className="w-100 font-size-14 form-check-label">Patent Pending</label>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={4}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="filingDate">Filing date</label>
                      <DateTimePicker
                        onChange={(date) => setFieldValue('filingDate', date)}
                        name="filingDate"
                        value={allValues.filingDate}
                      />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="filingDate" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="patentUrl">Patent URL</label>
                      <Field type="text" rows="5" className="form-control input-field shadow-none font-size-14 text-body" name="patentUrl" id="patentUrl" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="patentUrl" component="div" />
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

export default PatentsModal;