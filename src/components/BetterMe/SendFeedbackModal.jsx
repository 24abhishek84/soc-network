/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, ListGroup, Image, InputGroup, FormControl } from 'react-bootstrap';
import './BetterMeModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faStar, faGraduationCap, faMedal } from '@fortawesome/free-solid-svg-icons';
import CommentBoxModal from './CommentBoxModal';
import * as Actions from '../../actions/betterme-actions';

const SendFeedbackModal = (props) => {
  const { employees, selectedemployee, employeefeedbackresponse, show } = props;
  const currentemployee = selectedemployee;
  const [CurrentEmployees, setCurrentEmployees] = useState(employees);
  const [showFeedbackList, setshowFeedbackList] = useState(show);
  const [showCommentBox, setshowCommentBox] = useState(false);
  let EmployeeList = <></>;
  let CompitenciesList = <></>;
  let MainEmployees = employees;
  let NewEmployeeList = [];

  useEffect(() => {
    setCurrentEmployees(employees);
    setshowFeedbackList(show);
  }, [employees, show]);

  const saveselectedemployee = (employee) => {
    props.setselectedemployee(employee);
  };

  if (CurrentEmployees && CurrentEmployees.length > 0) {
    EmployeeList = CurrentEmployees.map((employee) => {
      return (
        <ListGroup.Item className='send-feedback-list' key={`employee-${employee.id}`} onClick={() => saveselectedemployee(employee)}>
          <div>
            <div style={{ display: 'flex' }}>
              <div style={{ marginRight: '5px' }}><Image src="/assets/imgs/people_1.png" roundedCircle /></div>
              <div style={{ alignSelf: 'center' }}>
                <div style={{ fontWeight: 'bold' }}>{employee.name}</div>
                <div style={{ color: '#90949c' }}>{employee.position}</div>
              </div>
            </div>
          </div>
        </ListGroup.Item>
      );
    });
  }

  const searchbyname = (event) => {
    const search = event.target.value.toLowerCase();
    MainEmployees.forEach((item, i) => {
      let str = item.name.toLowerCase();
      let setobj;
      if (str.includes(search) === true) {
        if (NewEmployeeList.length > 0) {
          setobj = NewEmployeeList.find(x => x.id === item.id);
          if (setobj === undefined) {
            NewEmployeeList.push(item);
          }
        } else {
          NewEmployeeList.push(item);
        }
      }
    });
    setCurrentEmployees(NewEmployeeList);
  };

  const showFeedbacks = (feedback, user_id) => {
    props.showfeedbacksforcompitency(feedback, user_id);
  };

  const resetFeedback = (feedback, user_id) => {
    props.resetselectedfeedback(feedback, user_id);
  };

  const setFeedbackIcon = (icontype, feedback) => {
    props.setselectedfeedbackicon(icontype, feedback, selectedemployee.id);
  };

  if (selectedemployee.feedbacks && selectedemployee.feedbacks.length > 0) {
    CompitenciesList = selectedemployee.feedbacks.map((feedback, index) => {
      // console.log('feedback',feedback);
      let feedbackColor = { display: 'none' };
      let feedbacktext = '';
      if (feedback.icon.length > 0 && feedback.icon.length < 3) {
        if (feedback.icon[0] === 'star') {
          feedbackColor = { color: '#53C7E6', fontSize: '12px' };
          feedbacktext = 'You Rock';
        } else if (feedback.icon[0] === 'cap') {
          feedbackColor = { color: '#EEDB1E', fontSize: '12px' };
          feedbacktext = 'let\'s work on this';
        } else {
          feedbackColor = { color: '#F3ACD1', fontSize: '12px' };
          feedbacktext = 'Cool';
        }

      }
      return (
        <ListGroup.Item className='user-feedback-list' key={`comp-${index}`}>
          <div>
            <div className='feedback-name'>{feedback.name}</div>
            <div><span style={feedbackColor}>{feedbacktext}</span></div>
          </div>
          <div style={{ display: 'flex' }}>

            <div style={feedback.icon.length > 0 ? { display: 'flex' } : { display: 'none' }}>
              {
                feedback.icon.includes('star') &&
                <div className='feedback-icons' style={{ backgroundColor: '#53C7E6' }}>
                  <FontAwesomeIcon icon={faStar} className='default-icons' style={{ cursor: 'pointer' }} onClick={() => setFeedbackIcon('star', feedback.name)} />
                </div>
              }
              {
                feedback.icon.includes('cap') &&
                <div className='feedback-icons' style={{ backgroundColor: '#EEDB1E' }}>
                  <FontAwesomeIcon icon={faGraduationCap} style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => setFeedbackIcon('cap', feedback.name)} />
                </div>
              }
              {
                feedback.icon.includes('medal') &&
                <div className='feedback-icons' style={{ backgroundColor: '#F3ACD1' }}>
                  <FontAwesomeIcon icon={faMedal} style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => setFeedbackIcon('medal', feedback.name)} />
                </div>
              }
            </div>
            <div className='align-self-center'>
              {
                feedback.icon.length > 0 && feedback.icon.length < 3 ?
                  <FontAwesomeIcon icon={faMinusCircle} onClick={() => resetFeedback(feedback.name, selectedemployee.id)} style={{ fontSize: '20px', cursor: 'pointer' }} />
                  :
                  <FontAwesomeIcon icon={faPlusCircle} onClick={() => showFeedbacks(feedback.name, selectedemployee.id)} style={{ fontSize: '20px', cursor: 'pointer' }} />
              }

            </div>
          </div>
        </ListGroup.Item>
      );
    });
  }

  const displayCommentBox = () => {
    if (employeefeedbackresponse) {
      setshowFeedbackList(false);
      setshowCommentBox(true);
    }
  };

  const setCommentModalDisplay = () => {
    if (showCommentBox) {
      setshowCommentBox(false);
      props.onHide();
      props.unsetselectedemployee();
    }
  };

  return (
    <Fragment>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showFeedbackList}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            SEND FEEDBACKS
            {/* { Object.entries(selectedemployee).length > 0 && selectedemployee.constructor === Object &&
              <span> TO <strong style={{ color: '#007bff'}}>{selectedemployee.name}</strong></span>
            } */}
          </Modal.Title>
          <div style={{ fontWeight: '500', fontSize: 'medium' }} onClick={displayCommentBox}>Next</div>
        </Modal.Header>
        <Modal.Body>
          {
            Object.entries(selectedemployee).length === 0 && selectedemployee.constructor === Object &&
            <Fragment>
              <div>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Find Colleagues"
                    aria-label="Find Colleagues"
                    onKeyUp={(e) => searchbyname(e)}
                  />
                </InputGroup>
              </div>
              <h4>Suggested Colleagues</h4>
              <ListGroup>
                {EmployeeList}
              </ListGroup>
            </Fragment>
          }
          {
            Object.entries(selectedemployee).length > 0 && selectedemployee.constructor === Object &&
              <Fragment>
                <div>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Search Compitencies"
                      aria-label="Search Compitencies"
                      onKeyUp={(e) => searchbyname(e)}
                    />
                  </InputGroup>
                </div>
                <h4>Compitencies</h4>
                <ListGroup>
                  {CompitenciesList}
                </ListGroup>
              </Fragment>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      <CommentBoxModal type='sendFeedback' showCommentBox={showCommentBox} onHide={() => setCommentModalDisplay()} closemodal={() => setCommentModalDisplay()} selectedemployee={currentemployee} />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    employees: state.betterme.employees,
    selectedemployee: state.betterme.selectedemployee,
    employeefeedbackresponse: state.betterme.employeefeedbackresponse
  };
}

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ ...Actions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SendFeedbackModal);
