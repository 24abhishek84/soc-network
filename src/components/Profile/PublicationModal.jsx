import React, { useState, useRef } from 'react'

import { Modal, Button, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import DateTimePicker from 'react-widgets/lib/DateTimePicker';

const PublicationSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too Short!").max(60, "Too Long!").required("Required"),
});

const PublicationModal = ({ show, onHide, onSubmit }) => {

  const [incr, setIncr] = useState(0);
  const authorInput = useRef(null);

  const handleFormSubmit = async (values) => {
    delete values.authorName;
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
          Add publication
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '75vh', overflowY: 'auto' }}>
        <Formik
          enableReinitialize
          initialValues={{
            title: '',
            issuingOrganization: '',
            credentialExpire: '',
            issueDate: '',
            expirationDate: '',
            credentialId: '',
            credentialUrl: '',
            authors: ['Chetan Godhani'],
            authorName: '',
          }}
          validationSchema={PublicationSchema}
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
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="title" id="title" />
                      <div className="text-secondary font-italic pt-1">Ex: Giving and receiving feedback</div>
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="title" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="publication">Publication/Publisher</label>
                      <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="publication" id="publication" />
                      <div className="text-secondary font-italic pt-1">Ex: Harvard Business Review</div>
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="publication" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={4}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="publicationDate">Publication date</label>
                      <DateTimePicker
                        onChange={(date) => setFieldValue('publicationDate', date)}
                        name="publicationDate"
                        value={allValues.publicationDate}
                      />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="publicationDate" component="div" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="author">Author</label>
                      <div className="d-flex flex-column pt-1">
                        {allValues.authors.map((author, index) => {
                          return (
                            <div key={`${author}-${index}`} className="d-flex align-items-center mt-2">
                              <div className="d-flex justify-content-between w-100 align-items-center">
                                <div className="d-flex align-items-center">
                                  <FontAwesomeIcon className="font-size-32 text-secondary" icon={faUserCircle} /> <span className="ml-2 font-size-16 font-weight-bold"> {author}</span>
                                </div>
                                {index !== 0 &&
                                  <i
                                    className="font-size-32 text-secondary cursor-pointer user-select-none material-icons"
                                    onClick={() => {
                                      const authorArray = allValues.authors.filter(authorName => authorName !== author);
                                      setFieldValue('authors', [...new Set(authorArray)]);
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
                            name="authorName"
                            className="form-control input-field shadow-none font-size-14 text-body mt-2"
                            onKeyUp={(event) => {
                              if(event.key === 'Enter'){
                                const authorArray = [...allValues.authors, event.target.value];
                                setFieldValue('authors', [...new Set(authorArray)]);
                                setFieldValue('authorName', '');
                                setIncr(0);
                              }
                            }}
                            innerRef={authorInput}
                            placeholder="Ex: John"
                          />
                        }
                      </div>
                      <hr />
                      <div className="text-primary d-flex justify-content-between font-size-14 font-weight-bold">
                        <span className="text-secondary font-italic">You can add {10 - allValues.authors.length} more authors</span>
                        <span
                          className="cursor-pointer user-select-none"
                          onClick={async () => {
                            if(allValues.authors.length < 10) {
                              await setIncr(1);
                              authorInput && authorInput.current && authorInput.current.focus();
                            } else {
                              alert('can\'t add more');
                            }
                          }}
                        >
                          Add author
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="font-size-14" htmlFor="publicationUrl">Publication URL</label>
                      <Field type="text" rows="5" className="form-control input-field shadow-none font-size-14 text-body" name="publicationUrl" id="publicationUrl" />
                      <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="publicationUrl" component="div" />
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

export default PublicationModal;