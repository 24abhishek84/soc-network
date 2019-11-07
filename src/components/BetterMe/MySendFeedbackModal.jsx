import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/betterme-actions';

import { Modal, Button, Col, FormLabel, Image, Row, ListGroup } from 'react-bootstrap';
import Select, { components } from 'react-select';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faGraduationCap, faMedal } from '@fortawesome/free-solid-svg-icons';

const SendFeedbackSchema = Yup.object().shape({
  employee: Yup.object().required('Required'),
  competencies: Yup.array().min(1).required('Required'),
  comment: Yup.string().required('Required')
});

const feedbackStars = [
  {
    type: faStar,
    title: 'You Rock',
    backgroundColor: '#53C7E6'
  },
  {
    type: faGraduationCap,
    title: 'Let\'s work on this',
    backgroundColor: '#EEDB1E'
  },
  {
    type: faMedal,
    title: 'Cool',
    backgroundColor: '#F3ACD1'
  },
];

const MySendFeedbackModal = (props) => {
  const { show, employees, totalfeedbacks } = props;

  let employeesoption = [];
  let feedbackoption = [];

  employees.forEach((employee) => {
    employeesoption.push({
      value: employee.id,
      label: employee.name,
      imageUrl: 'assets/imgs/bradpitt.jpeg',
      position: employee.position
    });
  });

  totalfeedbacks.forEach((feedback) => {
    feedbackoption.push({ id: feedback.id, value: feedback.name, label: feedback.name, icon: undefined });
  });

  const handleFormSubmit = (values) => {
    console.log('values', values);
    // props.handleSubmit(values);
    props.onHide();
  };

  // const setFeedbackIcon = (icon, feedback_id) => {
  //   const selectedfeedbackobj = totalfeedbacks.find(x => x.id === feedback_id);
  //   if( selectedfeedbackobj !== undefined ){
  //     selectedfeedbackobj.icon = icon;
  //     feedbacksdata.push(selectedfeedbackobj);
  //   }
  //   props.setselectedfeedbacks(feedbacksdata);
  // }

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
      {/* <div className="d-flex flex-row justify-content-around">
        <div className="feedback-icons" style={{ backgroundColor: '#53C7E6' }}>
          <FontAwesomeIcon icon={faStar} style={{ fontSize: '20px', cursor: 'pointer' }} />
        </div>

        <div className="feedback-icons" style={{ backgroundColor: '#EEDB1E' }}>
          <FontAwesomeIcon icon={faGraduationCap} style={{ fontSize: '20px', cursor: 'pointer' }} />
        </div>

        <div className="feedback-icons" style={{ backgroundColor: '#F3ACD1' }}>
          <FontAwesomeIcon icon={faMedal} style={{ fontSize: '20px', cursor: 'pointer' }} />
        </div>
      </div> */}
    </components.Option>
  );

  const singleFeedbackValueType = (singleFeedbackValueTypeProps) => (
    <components.SingleValue
      {...singleFeedbackValueTypeProps}
      key={`feedback-${singleFeedbackValueTypeProps.data.value}`}
      className="d-flex justify-content-between align-items-center"
    >
      <div className="feedback-name">{singleFeedbackValueTypeProps.data.label}</div>
      {/* <div>
        {singleFeedbackValueTypeProps.data.icon === 'star' && (
          <div className="feedback-icons" style={{ backgroundColor: '#53C7E6' }}>
            <FontAwesomeIcon icon={faStar} className="default-icons align-center p-2" />
          </div>
        )}
        {singleFeedbackValueTypeProps.icon === 'cap' && (
          <div className="feedback-icons" style={{ backgroundColor: '#EEDB1E' }}>
            <FontAwesomeIcon icon={faGraduationCap} className="default-icons" />
          </div>
        )}
        {singleFeedbackValueTypeProps.icon === 'medal' && (
          <div className="feedback-icons" style={{ backgroundColor: '#F3ACD1' }}>
            <FontAwesomeIcon icon={faMedal} className="default-icons" />
          </div>
        )}
      </div> */}
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
            SEND FEEDBACKS
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-4 pb-4 pl-3 pr-3" style={{ maxHeight: '85vh', height: 'auto' }}>
          <Formik
            enableReinitialize
            initialValues={{
              employee: undefined,
              competencies: [],
              comment: ''
            }}
            validationSchema={SendFeedbackSchema}
            onSubmit={(values) => handleFormSubmit(values)}
            render={(renderProps) => {
              const { values: formValues } = renderProps;
              return (
                <Form onSubmit={renderProps.handleSubmit}>
                  <Row className="mb-4">
                    <Col sm={12}>
                      <FormLabel className="font-size-15 font-weight-bold">
                        Select Employee
                      </FormLabel>
                      <Select
                        isMulti={false}
                        closeMenuOnSelect={true}
                        value={formValues.employee}
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
                        value={formValues.competencies}
                        onChange={(selectedOption) => {
                          renderProps.setFieldValue(
                            'competencies',
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
                        name="competencies"
                        components={{
                          Option: singleFeedbackOptionType,
                          SingleValue: singleFeedbackValueType
                        }}
                      />
                      <ErrorMessage
                        className="help-block text-danger"
                        name="competencies"
                        component="div"
                      />
                    </Col>
                  </Row>
                  {formValues.competencies.length > 0 &&
                    <Row className="mb-4">
                      <Col sm={12}>
                        <ListGroup>
                          {formValues.competencies.map((compentency, compentencyIndex) => {
                            return (
                              <ListGroup.Item className="d-flex justify-content-between align-items-center p-1" key={`compentency-${compentencyIndex}`}>
                                <div className="pl-2 font-weight-bold font-size-14">{compentency.label}</div>
                                <div className="d-flex justify-content-around pr-2 align-items-center">
                                  {compentency.icon ?
                                    <React.Fragment>
                                      <span className="pr-2 font-weight-bold">{compentency.icon.title}</span>
                                      <span
                                        className="feedback-icons shadow position-relative"
                                        style={{ backgroundColor: compentency.icon.backgroundColor }}
                                      >
                                        <FontAwesomeIcon icon={compentency.icon.type} className="font-size-20 cursor-pointer" />
                                        <span
                                          className="position-absolute remove-button cursor-pointer"
                                          onClick={() => {
                                            renderProps.setFieldValue(
                                              'competencies',
                                              formValues.competencies.map((newCompetency, newCompetencyIndex) => {
                                                if(newCompetencyIndex === compentencyIndex) {
                                                  return {
                                                    ...newCompetency,
                                                    icon: undefined
                                                  }
                                                }
                                                return newCompetency;
                                              })
                                            )
                                          }}
                                        >&times;</span>
                                      </span>
                                    </React.Fragment>
                                    :
                                    feedbackStars.map((star, index) => {
                                      return (
                                        <div
                                          key={`star-${compentencyIndex}-${index}`}
                                          className="feedback-icons shadow mr-2"
                                          style={{ backgroundColor: star.backgroundColor }}
                                          onClick={() => {
                                            renderProps.setFieldValue(
                                              'competencies',
                                              formValues.competencies.map((newCompetency, newCompetencyIndex) => {
                                                if(newCompetencyIndex === compentencyIndex) {
                                                  return {
                                                    ...newCompetency,
                                                    icon: star
                                                  }
                                                }
                                                return newCompetency;
                                              })
                                            )
                                          }}
                                        >
                                          <FontAwesomeIcon icon={star.type} className="font-size-20 cursor-pointer" />
                                        </div>
                                      );
                                    })
                                  }
                                </div>
                              </ListGroup.Item>
                            );
                          })}
                        </ListGroup>
                      </Col>
                    </Row>
                  }
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
                      <ErrorMessage
                        className="help-block text-danger"
                        name="comment"
                        component="div"
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
                        Send Feedback
                      </Button>
                    </Col>
                  </Row>
                </Form>
              );
            }}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(MySendFeedbackModal);
