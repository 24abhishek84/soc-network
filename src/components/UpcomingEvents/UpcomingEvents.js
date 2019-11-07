/* eslint-disable react/prop-types */
import React, { useState, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/event-actions';

import { Card, Nav, OverlayTrigger, Tooltip, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FloatingButton, EventWrapper } from '../Group/Group.style';
import moment from 'moment';

import CreateEventModal from '../CreateEventModal/CreateEventModal';
import './UpcomingEvents.css';
import { StickyNav } from '../Header/GroupHeader';

const cardBoxStyle = {
  maxWidth: 700,
  margin: '10px auto',
  float: 'none'
};

const UpcomingEvents = (props) => {
  const { events } = props;

  const [ selectedNav, setSelectedNav ] = useState('today');
  const [ showCreateEventModal, setShowCreateEventModal ] = useState(false);
  const [currentdate, setcurrentdate] = useState('01');
  const handleNavSelect = (currentNav) => {
    if (currentNav !== selectedNav) {
      setSelectedNav(currentNav);
    }
  };

  const handleModalToggle = () => {
    setShowCreateEventModal(!showCreateEventModal);
  };

  const datetoday = () => {
    const monthArray = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    let newDate = new Date().getDate();
    let newMonth = new Date().getMonth();
    newMonth = monthArray[newMonth];
    newDate = `${newDate} ${newMonth}`;
    return newDate;
  };

  const showDateEvents = (day) => {
    if(day !== currentdate ){
      setcurrentdate(day);
    }
  };

  const weekdays = () => (
    <Fragment>
      <div style={{width: '14.29%'}} className={`p-2 text-center cursor-pointer ${ currentdate === '01' ? `date-selected` : `date-not-selected`}`} onClick={() => showDateEvents('01')}>
        <div>Sun</div>
        <div>01</div>
      </div>
      <div style={{width: '14.29%'}} className={`p-2 text-center cursor-pointer ${ currentdate === '02' ? `date-selected` : `date-not-selected`}`} onClick={() => showDateEvents('02')}>
        <div>Mon</div>
        <div>02</div>
      </div>
      <div style={{width: '14.29%'}} className={`p-2 text-center cursor-pointer ${ currentdate === '03' ? `date-selected` : `date-not-selected`}`} onClick={() => showDateEvents('03')}>
        <div>Tue</div>
        <div>03</div>
      </div>
      <div style={{width: '14.29%'}} className={`p-2 text-center cursor-pointer ${ currentdate === '04' ? `date-selected` : `date-not-selected`}`} onClick={() => showDateEvents('04')}>
        <div>Wed</div>
        <div>04</div>
      </div>
      <div style={{width: '14.29%'}} className={`p-2 text-center cursor-pointer ${ currentdate === '05' ? `date-selected` : `date-not-selected`}`} onClick={() => showDateEvents('05')}>
        <div>Thu</div>
        <div>05</div>
      </div>
      <div style={{width: '14.29%'}} className={`p-2 text-center cursor-pointer ${ currentdate === '06' ? `date-selected` : `date-not-selected`}`} onClick={() => showDateEvents('06')}>
        <div>Fri</div>
        <div>06</div>
      </div>
      <div style={{width: '14.29%'}} className={`p-2 text-center cursor-pointer ${ currentdate === '07' ? `date-selected` : `date-not-selected`}`} onClick={() => showDateEvents('07')}>
        <div>Sat</div>
        <div>07</div>
      </div>
    </Fragment>
  );

  return (
    <React.Fragment>
      <StickyNav className="position-sticky" fill variant="tabs" defaultActiveKey="today" onSelect={handleNavSelect}>
        <Nav.Item>
          <Nav.Link
            className="d-flex justify-content-center align-items-center betterme-link font-size-14"
            eventKey="today"
          >
            Today
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="d-flex justify-content-center align-items-center betterme-link font-size-14"
            eventKey="this_week"
          >
            This Week
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="d-flex justify-content-center align-items-center betterme-link font-size-14"
            eventKey="this_month"
          >
            This Month
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="d-flex justify-content-center align-items-center betterme-link font-size-14"
            eventKey="prev_month"
          >
            Previous
          </Nav.Link>
        </Nav.Item>
      </StickyNav>
      <div className="ml-2 mr-2">
        <Card style={cardBoxStyle} className="events-card shadow-sm border-0">
          <Card.Body>
            {selectedNav === 'today' && (
              <div className="pt-3 pl-4 pb-2">
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{datetoday()}</span>
                <div style={{ color: '#adb8c2' }}>{new Date().getFullYear()}</div>
              </div>
            )}
            {selectedNav === 'this_week' && (
              <div className="d-flex p-2 pt-3 justify-content-around">{weekdays()}</div>
            )}
            {selectedNav === 'this_month' && (
              <div className="d-flex p-2 pt-3 justify-content-around">
                <div className="align-self-center cursor-pointer">
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="align-self-center font-size-20 text-primary"
                  />
                </div>
                {weekdays()}
                <div className="align-self-center cursor-pointer">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="align-self-center font-size-20 text-primary"
                  />
                </div>
              </div>
            )}
          </Card.Body>
        </Card>
        {events.length > 0 && selectedNav !== 'this_week' ?
          events.map((value) => {
            return (
              <Card key={`event-${value.id}`} style={cardBoxStyle} className="events-card shadow-sm border-0 p-4">
                <Card.Body className="d-flex justify-content-between">
                  <div className="d-flex">
                    <Image
                      src={value.image}
                      thumbnail
                      width={130}
                      style={{ height: 130, flex: '0 0 130px', objectFit: 'cover' }}
                    />
                    <div className="pl-3 d-flex flex-column">
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <EventWrapper
                          to={`/event/${value.id}`}
                          className="font-size-20 font-weight-bold padding-top-bottom"
                        >
                          {value.eventName}
                        </EventWrapper>
                      </div>
                      <div className="d-flex flex-row justify-content-between align-items-center padding-top-bottom">
                        <EventWrapper
                          to={`/event/${value.id}`}
                          className="font-size-16"
                        >
                          {value.description}
                        </EventWrapper>
                      </div>
                      <div className="participate-maindiv">
                        <div className="participate-subdiv">
                          <span className="participate-subdiv  padding-top-bottom">
                            Participates
                          </span>
                          <div className='d-flex flex-row'>
                          {value.participates.map(
                            (participateImage, index) => {
                              return (
                                <Fragment>
                                  { index <= 2 &&
                                    <div className='d-flex flex-row'> 
                                      <Image
                                        key={`participateImage-${index}`}
                                        src={participateImage}
                                        roundedCircle
                                        style={{
                                          height: '40px',
                                          width: '40px',
                                          marginRight: '10px'
                                        }}
                                      />
                                      { index === 2 && value.participates.length > 2 &&
                                        <div className="plus-participants">+5</div>
                                      }
                                    </div>
                                  }
                                </Fragment>
                              );
                            }
                          )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="pl-3 d-flex flex-column"
                    style={{ flex: '0 0 180px' }}
                  >
                    <div className="d-flex flex-row justify-content-between align-items-center padding-top-bottom font-size-14 text-wrap">
                      {moment(new Date(value.startDate*1000)).format('D MMMM, HH:mm a')}
                    </div>
                    <div className="padding-top-bottom">
                      <Button
                        variant="outline-primary"
                        style={{ borderRadius: '16px' }}
                      >
                        Join
                      </Button>
                      <Button
                        variant="outline-secondary"
                        style={{ borderRadius: '16px' }}
                        className="ml-2"
                      >
                        Can't Go
                      </Button>
                    </div>
                    <span>Location</span>
                    <h5 className="pt-3 m-0">
                      {value.locationName}
                    </h5>
                  </div>
                </Card.Body>
              </Card>
            );
          })
          :
          <Card style={cardBoxStyle} className="events-card shadow-sm border-0">
            <Card.Body>
              <div className="p-4 d-flex justify-content-center">
                <div>
                  <Image src="assets/imgs/noevents.jpeg" />
                </div>
              </div>
            </Card.Body>
          </Card>
        }
      </div>
      <OverlayTrigger placement={'top'} overlay={<Tooltip className="font-size-14">Create Event</Tooltip>}>
        <FloatingButton className="btn-primary" bottom={40} onClick={handleModalToggle}>
          <FontAwesomeIcon icon={faPlus} />
        </FloatingButton>
      </OverlayTrigger>
      <CreateEventModal
        showCreateEventModal={showCreateEventModal}
        onCreateEventModalClose={handleModalToggle}
        showCreateEventModalFooter
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.events
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ ...Actions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingEvents);
