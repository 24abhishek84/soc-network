import React, { Fragment, useState } from 'react';
import { Modal, Button, Col, FormLabel, Image, Row } from 'react-bootstrap';
import Select, { components } from 'react-select';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/betterme-actions';

const MyRequestFeedbackModal = (props) => {
  const { show, employees, totalfeedbacks } = props;
  const [ submitted, setsubmitted ] = useState(false);
  const [ employee, setemployee ] = useState('');
  let employeesoption = [];
  let feedbackoption = [];
  // let feedbacksdata = [];

  employees.forEach((employee) => {
    employeesoption.push({
      value: employee.id,
      label: employee.name,
      imageUrl: 'assets/imgs/bradpitt.jpeg',
      position: employee.position
    });
  });

  totalfeedbacks.forEach((feedback) => {
    feedbackoption.push({ id: feedback.id, value: feedback.id, label: feedback.name, icon: '' });
  });

  const handleFormSubmit = (values) => {
    setemployee(values.employee.label);
    setsubmitted(true);
  };

  if (submitted) {
    setTimeout(() => {
      props.onHide();
    }, 3000);
  }

  const singleOptionType = (props) => (
    <components.Option {...props} className="d-flex">
      <Image src={props.data.imageUrl} height={35} />
      <div className="pl-3 font-size-14">
        <div className="font-weight-bold pb-2">{props.data.label}</div>
        <div>{props.data.position}</div>
      </div>
    </components.Option>
  );

  const singleValueType = (singleValueTypeProps) => (
    <components.SingleValue {...singleValueTypeProps} className="d-flex align-items-center">
      <Image src={singleValueTypeProps.data.imageUrl} height={20} />
      <div className="pl-3 font-weight-bold font-size-14">{singleValueTypeProps.data.label}</div>
    </components.SingleValue>
  );

  const singleFeedbackOptionType = (singlefeedbackOptionTypeProps) => (
    <components.Option
      {...singlefeedbackOptionTypeProps}
      key={`feedback-${singlefeedbackOptionTypeProps.data.value}`}
      className="d-flex flex-row justify-content-between"
    >
      <div className="feedback-name">{singlefeedbackOptionTypeProps.data.label}</div>
    </components.Option>
  );

  const singleFeedbackValueType = (singleFeedbackValueTypeProps) => (
    <components.SingleValue
      {...singleFeedbackValueTypeProps}
      key={`feedback-${singleFeedbackValueTypeProps.data.value}`}
      className="d-flex justify-content-between"
    >
      <div className="feedback-name">{singleFeedbackValueTypeProps.data.label}</div>
    </components.SingleValue>
  );

  return (
    <Fragment>
      <Modal
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        className={`quiz-modal create-take-part`}
      >
        <Modal.Header className="text-center" closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="w-100 font-size-20 modal-title font-weight-bold"
          >
            REQUEST FEEDBACKS
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-4 pb-4 pl-3 pr-3" style={{ maxHeight: '85vh', height: 'auto' }}>
          {!submitted ? (
            <Formik
              enableReinitialize
              initialValues={{
                employee: '',
                feedbacks: []
              }}
              onSubmit={(values) => handleFormSubmit(values)}
              render={(renderProps) => {
                console.log('renderProps', renderProps.values);
                return (
                  <Form className="take-part-form" onSubmit={renderProps.handleSubmit}>
                    <Row className="mb-4">
                      <Col sm={12}>
                        <FormLabel className="font-size-15 font-weight-bold">
                          Select Employee
                        </FormLabel>
                        <Select
                          isMulti={false}
                          closeMenuOnSelect={true}
                          value={renderProps.values.employee}
                          onChange={(selectedOption) => {
                            renderProps.setFieldValue('employee', selectedOption);
                          }}
                          options={employeesoption}
                          menuContainerStyle={{ zIndex: 999 }}
                          styles={{
                            menuPortal: (base) => {
                              const { zIndex, ...rest } = base;
                              return { ...rest, zIndex: 9999 };
                            }
                          }}
                          menuPortalTarget={document.body}
                          isSearchable={false}
                          name="employee"
                          components={{
                            Option: singleOptionType,
                            SingleValue: singleValueType
                          }}
                        />
                        <ErrorMessage
                          className="help-block text-danger"
                          name="employee"
                          component="div"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Col sm={12}>
                        <FormLabel className="font-size-15 font-weight-bold d-flex justify-content-between">
                          Feedbacks
                        </FormLabel>
                        <Select
                          isMulti={true}
                          closeMenuOnSelect={false}
                          value={renderProps.values.feedbacks}
                          onChange={(selectedOption) => {
                            renderProps.setFieldValue(
                              'feedbacks',
                              selectedOption ? selectedOption : []
                            );
                          }}
                          options={feedbackoption}
                          menuContainerStyle={{ zIndex: 999 }}
                          styles={{
                            menuPortal: (base) => {
                              const { zIndex, ...rest } = base;
                              return { ...rest, zIndex: 9999 };
                            }
                          }}
                          menuPortalTarget={document.body}
                          isSearchable={true}
                          name="feedbacks"
                          components={{
                            Option: singleFeedbackOptionType,
                            SingleValue: singleFeedbackValueType
                          }}
                        />
                        <ErrorMessage
                          className="help-block text-danger"
                          name="members"
                          component="div"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Col sm={12}>
                        <FormLabel className="font-size-15 font-weight-bold">Comment</FormLabel>
                        <Field
                          type="text"
                          className="form-control shadow-none"
                          name="comment"
                          placeholder="Add comment for selected competencies"
                          component="textarea"
                          rows="3"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <Button
                          className="font-weight-bold"
                          type="submit"
                          variant="primary"
                          size="lg"
                          block
                        >
                          Request Feedback
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                );
              }}
            />
          ) : (
            <Modal.Body className="pt-4 pb-4 pl-3 pr-3" style={{ maxHeight: '85vh', height: 'auto' }}>
              <div
                style={{
                  height: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ color: '#000000', textAlign: 'center', paddingBottom: '10px' }}>
                  <span style={{ fontWeight: '500px', fontSize: '30px' }}>
                    Feedback Requested from
                  </span>
                </div>
                <div>
                  <Image
                    src="/assets/imgs/thanks.jpeg"
                    roundedCircle
                    style={{ height: '150px', width: '150px' }}
                  />
                </div>
                <div style={{ color: '#000000', textAlign: 'center', paddingTop: '10px' }}>
                  <span style={{ fontWeight: '900px', fontSize: '50px' }}>{employee}</span>
                </div>
              </div>
            </Modal.Body>
          )}
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    ...state.betterme
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ ...Actions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyRequestFeedbackModal);
