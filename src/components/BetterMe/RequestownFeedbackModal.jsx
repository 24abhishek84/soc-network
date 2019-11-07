/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Image, Modal, Button, ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import './BetterMeModal.css';
import CommentBoxModal from './CommentBoxModal';
import * as Actions from '../../actions/betterme-actions';

const RequestownFeedbackModal = (props) => {
  const { totalfeedbacks, requestedEmployee, requestedFeedbacks, employees, show } = props;
  const [showEmployeeList, setshowEmployeeList] = useState(show);
  const [CurrentEmployees, setCurrentEmployees] = useState(employees);
  const [showCommentBox, setshowCommentBox] = useState(false);
  let EmployeeList = <></>;
  let CompitenciesList = <></>;
  let MainEmployees = employees;
  const NewEmployeeList = [];

  useEffect(() => {
    setCurrentEmployees(employees);
    setshowEmployeeList(show);
  }, [employees, show]);

  const saveRequestedEmployee = (employee) => {
    props.saveemployeerequestedforfeedback(employee);
  };

  if (CurrentEmployees && CurrentEmployees.length > 0) {
    EmployeeList = CurrentEmployees.map((employee) => {
      return (
        <ListGroup.Item className='send-feedback-list' key={`employee-${employee.id}`} onClick={() => saveRequestedEmployee(employee)}>
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

  const searchEmployeeByName = (event) => {
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

  const searchCompitencyByName = (event) => {
    console.log('event', event.target.value);
  };

  const addToRequestedFeedbacks = (feedback) => {
    props.addfeedbacktorequestedfeedbacks(feedback);
  };

  const removeFromRequestedFeedbacks = (feedback) => {
    props.removefeedbackfromrequestedfeedbacks(feedback);
  };

  if (Object.entries(requestedEmployee).length > 0 && requestedEmployee.constructor === Object) {
    CompitenciesList = totalfeedbacks.map((feedback, index) => {
      return (
        <ListGroup.Item className='user-feedback-list' key={`comp-${index}`}>
          <div>
            <div className='feedback-name'>{feedback.name}</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div>
              {
                requestedFeedbacks.indexOf(feedback.name) !== -1 ?
                  <FontAwesomeIcon icon={faMinusCircle} onClick={() => removeFromRequestedFeedbacks(feedback.name)} style={{ fontSize: '20px', cursor: 'pointer' }} />
                  :
                  <FontAwesomeIcon icon={faPlusCircle} onClick={() => addToRequestedFeedbacks(feedback.name)} style={{ fontSize: '20px', cursor: 'pointer' }} />
              }
            </div>
          </div>
        </ListGroup.Item>
      );
    });
  }

  const displayCommentBox = () => {
    if (requestedFeedbacks.length > 0) {
      setshowEmployeeList(false);
      setshowCommentBox(true);
    }
  };

  const setCommentModalDisplay = () => {
    if (showCommentBox) {
      setshowCommentBox(false);
      props.onHide();
      props.unsetrequestedemployee();
    }
  };

  return (
    <Fragment>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showEmployeeList}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <span>REQUEST</span>
            <h1 style={{ fontSize: '40px', fontWeight: '900' }}>Feedback</h1>
            {
              Object.entries(requestedEmployee).length > 0 && requestedEmployee.constructor === Object && 
              <span> FROM <strong style={{ color: '#007bff'}}>{requestedEmployee.name}</strong></span>
            }
          </Modal.Title>
          <div style={{ fontWeight: '500', fontSize: 'medium' }} onClick={displayCommentBox}>Next</div>
        </Modal.Header>
        <Modal.Body style={Object.entries(requestedEmployee).length === 0 && requestedEmployee.constructor === Object ? { display: 'block' } : { display: 'none' }}>
          <div>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Find someone"
                aria-label="Find someone"
                onKeyUp={(e) => searchEmployeeByName(e)}
              />
            </InputGroup>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Row>
              <Col sm={6}>
                <div className='recommended shadow' onClick={() => saveRequestedEmployee({})}>
                  <div style={{ paddingBottom: '10px' }}><Image src="/assets/imgs/bradpitt.jpeg" style={{ height: '80px' }} roundedCircle /></div>
                  <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                    <div><span style={{ fontWeight: 'bold', fontSize: '30px' }}>Mr. Fouad Omri</span></div>
                    <div><span>Founder</span></div>
                  </div>
                </div>
              </Col>
              <Col sm={6}>
                <div className='recommended shadow' onClick={() => saveRequestedEmployee({})}>
                  <div style={{ paddingBottom: '10px' }}><Image src="/assets/imgs/leo.jpeg" style={{ height: '80px' }} roundedCircle /></div>
                  <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                    <div><span style={{ fontWeight: 'bold', fontSize: '30px' }}>Mr. Anas Laffet</span></div>
                    <div><span>Data Analyst</span></div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <h4>Suggested Colleagues</h4>
          <ListGroup>
            {EmployeeList}
          </ListGroup>
        </Modal.Body>
        <Modal.Body style={Object.entries(requestedEmployee).length > 0 && requestedEmployee.constructor === Object ? { display: 'block' } : { display: 'none' }}>
          <div>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search Compitencies"
                aria-label="Search Compitencies"
                onKeyUp={(e) => searchCompitencyByName(e)}
              />
            </InputGroup>
          </div>
          <h4>Compitencies</h4>
          <ListGroup>
            {CompitenciesList}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      <CommentBoxModal type='requestFeedback' showCommentBox={showCommentBox} closemodal={() => setCommentModalDisplay()} selectedemployee={requestedEmployee} />
    </Fragment>
  );
};

function mapStateToProps(state) {
  return {
    employees: state.betterme.employees,
    requestedEmployee: state.betterme.requestedEmployee,
    totalfeedbacks: state.betterme.totalfeedbacks,
    requestedFeedbacks: state.betterme.requestedFeedbacks
  };
}

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ ...Actions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestownFeedbackModal);

