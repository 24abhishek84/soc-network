import React, { Component, Fragment } from "react";
import { Row, Col, Image, Button, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { EventHeaderOuter, EventWrapper } from "./Group.style";

import CancelEventModal from "../UpcomingEvents/CancelEventModal";
import InviteMembersModal from "../UpcomingEvents/InviteMembersModal";

import "./EventListing.css";
import SImage from "../../images/S.png";
import EImage from "../../images/E.png";

class EventListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      inviteModal: false,
      selectedEvent: {},
      showCreateEventModal: false,
      communityMembers: [
        {
          id: 1,
          name: "Safa Omri",
          profilePicture: SImage
        },
        {
          id: 2,
          name: "Elena Kalimera",
          profilePicture: EImage
        },
        {
          id: 3,
          name: "Safa Omri",
          profilePicture: SImage
        },
        {
          id: 4,
          name: "Elena Kalimera",
          profilePicture: EImage
        },
        {
          id: 5,
          name: "Safa Omri",
          profilePicture: SImage
        },
        {
          id: 6,
          name: "Elena Kalimera",
          profilePicture: EImage
        },
        {
          id: 7,
          name: "Elena Kalimera",
          profilePicture: EImage
        },
        {
          id: 8,
          name: "Safa Omri",
          profilePicture: SImage
        },
        {
          id: 9,
          name: "Elena Kalimera",
          profilePicture: EImage
        },
      ],
      selectedMembers: [],
      selectedNav: 'today',
      haveEvents: true,
      eventdateclass: 'date-not-selected',
      todayDate: new Date()
    };
  }

  handleCancel = eventData => {
    this.props.removeEventData(eventData);
    this.setState({
      show: false
    });
  };

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  handleCloseInviteModal = () => {
    this.setState({
      inviteModal: false
    });
  };

  handleModalOpen = selectedEvent => {
    this.setState({
      show: true,
      selectedEvent
    });
  };

  handleInviteModalOpen = selectedEvent => {
    this.setState({
      inviteModal: true,
      selectedEvent
    });
  };

  handleInviteModalClose = () => {
    this.setState({
      inviteModal: false,
      selectedMembers: []
    });
  };

  onChangeMemberHandler = (value, forAll) => {
    const { communityMembers, selectedMembers } = this.state;

    if (forAll && forAll === "all") {
      if(selectedMembers.length === communityMembers.length) {
        this.setState({
          selectedMembers: []
        });
      } else {
        this.setState({
          selectedMembers: communityMembers
        });
      }
    } else {
      let obj = communityMembers.find(x => x.id === value);
      if (obj !== undefined) {
        if (selectedMembers.includes(obj)) {
          const newMembers = selectedMembers.filter(
            member => member.id !== value
          );
          this.setState({
            selectedMembers: newMembers
          });
        } else {
          this.setState({
            selectedMembers: [...selectedMembers, obj]
          });
        }
      }
    }
  };

  handleModalToggle = () => {
    this.setState(prevState => ({
      showCreateEventModal: !prevState.showCreateEventModal
    }))
  }

  handleNavSelect = currentNav => {
    if (currentNav !== this.state.selectedNav) {
      this.setState({
        selectedNav: currentNav
      });
    }
    if(currentNav !== 'this_week'){
      this.setState({ haveEvents: true });
    }
  };

  showDateEvents = () => {
    if(this.state.selectedNav !== 'this_week'){
      this.setState({
        haveEvents: true
      });
    } else {
      this.setState({
        haveEvents: false,
      });
    }
    this.setState({
      eventdateclass: 'date-selected'
    });
  }

  datetoday = () => {
    const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let newDate = new Date().getDate();
    let newMonth = new Date().getMonth();
    newMonth = monthArray[ newMonth ];
    newDate = `${newDate} ${newMonth}`;
    return newDate;
  }

  weekdays = () => (
    <Fragment>
      <div className={`p-2 text-center ${this.state.eventdateclass}`} onClick={() => this.showDateEvents()}>
        <div>Sun</div><div>01</div>
      </div>
      <div className='p-2 text-center' style={{color: '#ffffff', backgroundColor: '#007bff'}}>
        <div>Mon</div><div>02</div>
      </div>
      <div className='p-2 text-center' style={{color: '#ffffff', backgroundColor: '#007bff'}}>
        <div>Tue</div><div>03</div>
      </div>
      <div className='p-2 text-center' style={{color: '#ffffff', backgroundColor: '#007bff'}}>
        <div>Wed</div><div>04</div>
      </div>
      <div className='p-2 text-center' style={{color: '#ffffff', backgroundColor: '#007bff'}}>
        <div>Thu</div><div>05</div>
      </div>
      <div className='p-2 text-center' style={{color: '#ffffff', backgroundColor: '#007bff'}}>
        <div>Fri</div><div>06</div>
      </div>
      <div className='p-2 text-center' style={{color: '#ffffff', backgroundColor: '#007bff'}}>
        <div>Sat</div><div>07</div>
      </div>
    </Fragment>
  );

  render() {
    const { events } = this.props;
    const { selectedMembers, communityMembers } = this.state;

    return (
      <React.Fragment>
        <EventHeaderOuter className="p-2">
          <Nav fill variant="tabs" defaultActiveKey="today" onSelect={this.handleNavSelect}>
            <Nav.Item>
              <Nav.Link className="d-flex justify-content-center align-items-center" eventKey="today">Today</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="d-flex justify-content-center align-items-center" eventKey="this_week">This Week</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="d-flex justify-content-center align-items-center" eventKey="this_month">This Month</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="d-flex justify-content-center align-items-center" eventKey="prev_month">Previous</Nav.Link>
            </Nav.Item>
          </Nav>
        </EventHeaderOuter>
        { this.state.selectedNav === 'today' &&
          <div className='pt-3 pl-4 pb-2'>
            <div>
              <span style={{fontSize: '20px', fontWeight: 'bold'}}>{this.datetoday()}</span>
            </div>
            <div style={{color: '#adb8c2'}}>
              {new Date().getFullYear()}
            </div>
          </div>
        }
        { this.state.selectedNav === 'this_week' &&
          <div className='d-flex p-2 pt-3 justify-content-around'>
            {this.weekdays()}
          </div>
        }
        { this.state.selectedNav === 'this_month' &&
          <div className='d-flex p-2 pt-3 justify-content-around'>
            <div style={{alignSelf: 'center'}}><FontAwesomeIcon icon={faAngleLeft} style={{color: '#007bff', alignSelf: 'center', fontSize: '20px'}} /></div>
              {this.weekdays()}
            <div style={{alignSelf: 'center'}}><FontAwesomeIcon icon={faAngleRight} style={{color: '#007bff', alignSelf: 'center', fontSize: '20px'}} /></div>
          </div>
        }
        { !this.state.haveEvents &&
          <div className='p-4 d-flex justify-content-center'>
            <div>
              <Image src='assets/imgs/noevents.jpeg' />
            </div>
            <div></div>
          </div>
        }

        { this.state.haveEvents && events.map(value => {
          return (
            <div className="p-4" key={`event-${value.id}`}>
              <Row>
                <Col xs={12}>
                  <div  className="d-flex justify-content-between">
                    <div className="d-flex">
                      <Image
                        src={value.image}
                        thumbnail
                        style={{ height: "150px" }}
                      />
                      <div className="pl-4 d-flex flex-column">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                          <EventWrapper to={`/event/${value.id}`} className="font-size-20 font-weight-bold padding-top-bottom">
                            {value.eventName}
                          </EventWrapper>
                        </div>

                        <div className="d-flex flex-row justify-content-between align-items-center padding-top-bottom">
                          <EventWrapper to={`/event/${value.id}`} className="font-size-16">
                            {value.description}
                          </EventWrapper>
                        </div>

                        <div className="participate-maindiv">
                          <div className="participate-subdiv">
                            <span className="participate-subdiv  padding-top-bottom">Participates</span>
                            {
                              (value.participates) &&
                              value.participates.map((participateImage, index) => {
                                return(
                                  <Image
                                    key={`participateImage-${index}`}
                                    src={participateImage}
                                    roundedCircle
                                    style={{ height: "50px", width:"50px" , marginRight:'10px'}}
                                  />
                                )
                              })
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="pl-4 d-flex flex-column">
                        <div className="d-flex flex-row justify-content-between align-items-center padding-top-bottom">
                          <span style={{whiteSpace: 'nowrap'}} className="font-size-14">{moment(new Date(value.startDate)).format('YYYY-MM-DD HH:mm:ss')}</span>
                        </div>
                        <div className="d-flex flex-row justify-content-around align-items-center padding-top-bottom">
                          <Button variant="outline-secondary"  style={{borderRadius:'16px'}}>Date</Button>
                        </div>
                        <div className="participate-maindiv">

                          <div className="participate-subdiv">
                            <span className="participate-subdiv">Location</span>
                            <h5 className="location-name">{value.locationName}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          );
        })}

        <CancelEventModal show={this.state.show} onHide={this.handleClose} selectedEvent={this.state.selectedEvent} handleCancel={this.handleCancel} />

        <InviteMembersModal
          show={this.state.inviteModal}
          onHide={this.handleCloseInviteModal}
          onChangeMemberHandler={this.onChangeMemberHandler}
          communityMembers={communityMembers}
          selectedMembers={selectedMembers}
        />
    </React.Fragment>
    );
  }
}

export default EventListing;
