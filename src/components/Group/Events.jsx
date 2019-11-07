import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../../actions/GroupActions";
import { Card, Row, Col, Nav, Tab, Button, Dropdown } from "react-bootstrap";
import "./Events.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import EventListing from "./EventListing";
import CreateEventModal from "./../CreateEventModal/CreateEventModal";
import BigCalendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import {
  SettingsButton,
  BigCalendarCss,
} from "./Group.style";

const localizer = BigCalendar.momentLocalizer(moment);

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "events",
      cardWidth: "767px",
      events: [
        {
          id: 1,
          startDate: 1538035688,
          eventName: "Test Event",
          locationName: "Ahmedabad, India",
          latLong: "23.02579, 72.58727",
          image: "http://localhost:3000/minion.jpeg"
        },
        {
          id: 2,
          startDate: 1538035688,
          eventName: "Test Event 2",
          locationName: "Ahmedabad Test, India",
          latLong: "23.02579, 72.58727",
          image: "http://localhost:3000/assets/imgs/group_1.jpg"
        }
      ],
      showCreateEventModal: false,
      myEventsList: [
        {
          allDay: false,
          end: new Date("2019-06-27 11:13:00"),
          start: new Date("2019-06-27 19:13:00"),
          title: "hi"
        },
        {
          allDay: true,
          end: new Date("2019-06-28 11:13:00"),
          start: new Date("2019-06-28 19:13:00"),
          title: "All Day Event"
        }
      ],
      todayDate: new Date()
    };
  }

  selectTabHandler = selectedTab => {
    console.log("selectedTab", selectedTab);
    if (selectedTab !== this.state.selectedTab) {
      if (selectedTab === "calendar") {
        this.setState({
          selectedTab,
          cardWidth: "80%"
        });
      } else {
        this.setState({
          selectedTab,
          cardWidth: "767px"
        });
      }
    }
  };

  removeEventData = eventData => {
    const { events } = this.state;

    const newEvents = events.filter(x => x.id !== eventData.id);

    this.setState({
      events: newEvents
    });
  };

  editCreatedEvent = () => {
    this.setState({
      showCreateEventModal: true
    });
  };

  render() {
    const { groupData } = this.props;
    const { events, showCreateEventModal, myEventsList, cardWidth } = this.state;

    const cardBoxStyle = {
      maxWidth: cardWidth,
      margin: "10px auto",
      float: "none"
    };

    return (
      <Fragment>
        <Card style={cardBoxStyle} className="events-card">
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="events"
            onSelect={this.selectTabHandler}
          >
            <Nav
              style={{
                backgroundColor: "#f7f6f5",
              }}
              variant="tabs"
              defaultActiveKey="link-1"
              className="events-nav m-0 justify-content-between"
            >
              <div className="d-flex">
                <Nav.Item>
                  <Nav.Link eventKey="events">Events</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="calendar">Calendar</Nav.Link>
                </Nav.Item>
              </div>
              <div className="d-flex align-items-center">
                <Dropdown>
                  <SettingsButton
                    style={{
                      padding: "2px 10px",
                      color: "#474645",
                      backgroundColor: "#f7f6f5",
                      borderColor: "#dfdddb"
                    }}
                    variant="default"
                    id="dropdown-basic"
                  >
                    Settings
                  </SettingsButton>
                  <Dropdown.Menu style={{ top: 1 }}>
                    <Dropdown.Item href="#/action-1">Past Events</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">
                      Upcoming Events
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Help</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <input
                  type="file"
                  accept="video/*,  video/x-m4v, video/webm, video/x-ms-wmv, video/x-msvideo, video/3gpp, video/flv, video/x-flv, video/mp4, video/quicktime, video/mpeg, video/ogv, .ts, .mkv, image/*, image/heic, image/heif"
                  name="create_album"
                  id="create_album"
                  ref={this.createAlbumRef}
                  style={{ display: "none" }}
                  multiple
                />
                <Button
                  style={{ padding: "2px 10px", margin: "0px 20px" }}
                  variant="primary"
                  onClick={() => this.setState({ showCreateEventModal: true })}
                >
                  <FontAwesomeIcon className="p-0 mr-1" icon={faPlus} />
                  Create Event
                </Button>
              </div>
            </Nav>
            <Card.Body>
              <Tab.Content>
                <Tab.Pane eventKey="events">
                  {events.length > 0 ? (
                    <EventListing
                      editCreatedEvent={this.editCreatedEvent}
                      removeEventData={this.removeEventData}
                      events={events}
                    />
                  ) : (
                    <Row style={{ padding: "10px" }}>
                      <Col xs={12}>
                        {groupData.name} does not have any past events. Create
                        an event.
                      </Col>
                    </Row>
                  )}
                </Tab.Pane>
                <Tab.Pane eventKey="calendar">
                  <Row style={{ padding: "10px" }}>
                    <Col xs={12}>
                      <BigCalendarCss className="d-flex">
                        <BigCalendar
                          localizer={localizer}
                          events={myEventsList}
                          startAccessor="start"
                          endAccessor="end"
                          defaultDate={new Date()}
                          defaultView="month"
                          views={["month", "week", "day"]}
                        />
                      </BigCalendarCss>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Card.Body>
          </Tab.Container>
        </Card>
        {showCreateEventModal && (
          <CreateEventModal
            showCreateEventModal={showCreateEventModal}
            onCreateEventModalClose={() =>
              this.setState({ showCreateEventModal: false })
            }
            showCreateEventModalFooter
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ ...Actions }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
