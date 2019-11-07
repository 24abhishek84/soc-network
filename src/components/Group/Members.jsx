import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../../actions/GroupActions";
import {
  Card,
  Image,
  Row,
  Col,
  Form,
  Dropdown,
  DropdownButton,
  InputGroup
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faCheck } from "@fortawesome/free-solid-svg-icons";
import User1 from "./../../images/users/user1.jpg";
import SImage from "./../../images/S.png";
import EImage from "./../../images/E.png";
import {
  CardHeaderDiv,
  CardHeaderCount,
  CardItem,
} from "./Group.style";
import "./Members.css";

class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      communityMembers: [
        {
          id: 1,
          name: "Safa Omri",
          profilePicture: SImage,
          isAdmin: false
        },
        {
          id: 2,
          name: "Elena Kalimera",
          profilePicture: EImage,
          isAdmin: false
        },
        {
          id: 3,
          name: "Fouad Omri",
          profilePicture: User1,
          isAdmin: true
        }
      ]
    };
  }

  render() {
    const cardBoxStyle = {
      width: "502px",
      margin: "10px auto",
      float: "none"
    };

    return (
      <Card style={cardBoxStyle}>
        <Card.Header style={{ padding: "1rem 1.25rem" }} as="h3">
          <div className="d-flex justify-content-between align-items-center">
            <div style={{ display: "flex", alignItems: "center" }}>
              <CardHeaderDiv>Members</CardHeaderDiv>
              <CardHeaderCount>0</CardHeaderCount>
            </div>
            <div>
              <Form.Control type="email" placeholder="Find A Member" />
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title
            style={{
              paddingBottom: "10px",
              borderBottom: "1px solid #dddfe2"
            }}
          >
            <CardItem fontWeight={600}>Admins and Moderators</CardItem>
            <CardItem fontColor="#90949c">1</CardItem>
          </Card.Title>
          <div className="card-text">
            {this.state.communityMembers.map((value, index) => {
              if (value.isAdmin) {
                return (
                  <Row key={`communityMembers-admin-${value.id}`}>
                    <Col>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "5px"
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <Image
                            src={value.profilePicture}
                            style={{ width: "50px", height: "50px" }}
                            roundedCircle
                          />
                          <div className="font-size-12 pt-2 pb-2 pl-2 text-body text-center font-weight-bold">
                            {value.name}
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <DropdownButton
                            variant="outline-secondary"
                            title={
                              <FontAwesomeIcon
                                style={{ padding: 0 }}
                                icon={faEllipsisH}
                              />
                            }
                            className="members"
                          >
                            <Dropdown.Item href="#">Make Admin</Dropdown.Item>
                            <Dropdown.Item href="#">
                              Remove From Group
                              </Dropdown.Item>
                            <Dropdown.Item href="#">
                              Mute Member
                              </Dropdown.Item>
                          </DropdownButton>
                        </div>
                      </div>
                    </Col>
                  </Row>
                );
              } else {
                return null;
              }
            })}
          </div>
          <Card.Title
            style={{
              paddingBottom: "10px",
              borderBottom: "1px solid #dddfe2"
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <CardItem fontWeight={600}>All Members</CardItem>
                <CardItem fontColor="#90949c">10</CardItem>
              </div>
              <DropdownButton
                as={InputGroup.Append}
                variant="secondary"
                title="Default"
                id="input-group-dropdown-2"
              >
                <Dropdown.Item href="#">
                  <FontAwesomeIcon style={{ padding: 0 }} icon={faCheck} />
                  Default
                  </Dropdown.Item>
                <Dropdown.Item href="#">Alphabetical</Dropdown.Item>
                <Dropdown.Item href="#">Join Date</Dropdown.Item>
              </DropdownButton>
            </div>
          </Card.Title>
          <div className="card-text">
            {this.state.communityMembers.map((value, index) => {
              return (
                <Row key={`communityMembers-${value.id}`}>
                  <Col>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "5px"
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <Image
                          src={value.profilePicture}
                          style={{ width: "50px", height: "50px" }}
                          roundedCircle
                        />
                        <div className="font-size-12 pt-2 pb-2 pl-2 text-body text-center font-weight-bold">
                          {value.name}
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <DropdownButton
                          variant="outline-secondary"
                          title={
                            <FontAwesomeIcon
                              style={{ padding: 0 }}
                              icon={faEllipsisH}
                            />
                          }
                          className="members"
                        >
                          <Dropdown.Item href="#">Make Admin</Dropdown.Item>
                          <Dropdown.Item href="#">
                            Remove From Group
                            </Dropdown.Item>
                          <Dropdown.Item href="#">Mute Member</Dropdown.Item>
                        </DropdownButton>
                      </div>
                    </div>
                  </Col>
                </Row>
              );
            })}
          </div>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.group
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ ...Actions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Members);
