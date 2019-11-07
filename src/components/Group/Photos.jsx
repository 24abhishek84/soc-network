import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../../actions/GroupActions";
import {
  Card,
  Row,
  Col,
  Nav,
  Image,
  Tab,
  Button,
  Modal,
  Form
} from "react-bootstrap";
import "./Photo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Banner1 from "./../../images/GroupPhotos/Banner1.jpg";
import Banner2 from "./../../images/GroupPhotos/Banner2.jpg";
import {
  StyledButton,
  HRWrapper,
} from "./Group.style";

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardWidth: "767px",
      selectedTab: "photos",
      show: false
    };

    this.createAlbumRef = React.createRef();
  }

  selectTabHandler = selectedTab => {
    if (selectedTab !== this.state.selectedTab) {
      if (selectedTab === "photos") {
        this.setState({
          selectedTab,
          cardWidth: "767px"
        });
      } else {
        this.setState({
          selectedTab,
          cardWidth: "440px"
        });
      }
    }
  };

  createAlbumButtonHandler = () => {
    this.createAlbumRef.current.click();
  };

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  render() {
    const cardBoxStyle = {
      width: this.state.cardWidth,
      margin: "10px auto",
      float: "none"
    };

    return (
      <Fragment>
        <Card style={cardBoxStyle}>
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="photos"
            onSelect={this.selectTabHandler}
          >
            <Nav
              style={{
                margin: 0,
                backgroundColor: "#f7f6f5",
                justifyContent: "space-between",
                height: "44px"
              }}
              variant="tabs"
              defaultActiveKey="link-1"
              className="photos-nav"
            >
              <div className="d-flex">
                <Nav.Item>
                  <Nav.Link eventKey="photos">Photos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="albums">Albums</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="videos">Videos</Nav.Link>
                </Nav.Item>
              </div>
              <div className="d-flex align-items-center">
                <StyledButton
                  style={{
                    padding: "2px 10px",
                    color: "#474645",
                    backgroundColor: "#f7f6f5",
                    borderColor: "#dfdddb"
                  }}
                  variant="default"
                  onClick={this.createAlbumButtonHandler}
                >
                  <FontAwesomeIcon className="p-0" icon={faPlus} /> Create Album
                </StyledButton>
                <input
                  type="file"
                  accept="video/*,  video/x-m4v, video/webm, video/x-ms-wmv, video/x-msvideo, video/3gpp, video/flv, video/x-flv, video/mp4, video/quicktime, video/mpeg, video/ogv, .ts, .mkv, image/*, image/heic, image/heif"
                  name="create_album"
                  id="create_album"
                  ref={this.createAlbumRef}
                  className="d-none"
                  multiple
                />
                <StyledButton
                  style={{
                    padding: "2px 10px",
                    margin: "0 5px",
                    color: "#474645",
                    backgroundColor: "#f7f6f5",
                    borderColor: "#dfdddb"
                  }}
                  variant="default"
                  onClick={() => this.setState({ show: true })}
                >
                  <FontAwesomeIcon className="p-0" icon={faPlus} /> Add
                  Video
                </StyledButton>
              </div>
            </Nav>
            <Card.Body>
              <Tab.Content>
                <Tab.Pane eventKey="photos">
                  <Row>
                    <Col xs lg="3">
                      <Image
                        src={Banner1}
                        className="photoSize"
                        thumbnail
                        alt="Banner2"
                      />
                    </Col>
                    <Col xs lg="3">
                      <Image
                        src={Banner2}
                        className="photoSize"
                        thumbnail
                        alt="Banner2"
                      />
                    </Col>
                    <Col xs lg="3">
                      <Image
                        src={Banner1}
                        className="photoSize"
                        thumbnail
                        alt="Banner2"
                      />
                    </Col>
                    <Col xs lg="3">
                      <Image
                        src={Banner2}
                        className="photoSize"
                        thumbnail
                        alt="Banner2"
                      />
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="albums">Albums</Tab.Pane>
                <Tab.Pane eventKey="videos">Videos</Tab.Pane>
              </Tab.Content>
            </Card.Body>
          </Tab.Container>
        </Card>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          dialogClassName="modal-555px"
          className="d-flex justify-content-center"
          style={{ top: 250 }}
        >
          <Modal.Header className="font-weight-bold font-size-14 text-body">
            Add Video
          </Modal.Header>
          <Form>
            <Modal.Body>
              <input type="file" name="video_group" id="video_group" />
              <HRWrapper />
              <Form.Group
                as={Row}
                controlId="formPlaintextTitle"
                style={{ marginTop: "0.5rem" }}
              >
                <Form.Label column sm="2" className="text-right">
                  Title
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Name this video" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextDescription">
                <Form.Label column sm="2" className="text-right">
                  Description
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Add more info" />
                </Col>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer
              style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#f2f2f2",
                border: "1px solid #ccc"
              }}
            >
              <Button variant="default" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Post
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state.group;
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ ...Actions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
