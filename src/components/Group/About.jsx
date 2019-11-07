import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../../actions/GroupActions";
import { Card, Row, Col, Image, Form, Button, Dropdown } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import RecommendedGroupModal from "./RecommendedGroupsModal";
import Banner1 from "./../../images/GroupPhotos/Banner1.jpg";
import Banner2 from "./../../images/GroupPhotos/Banner2.jpg";

const CardHeaderDiv = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #4b4f56;
`;

const CardItemDiv = styled.div`
  font-weight: ${props => props.fontWeight || "inherit"};
  font-size: 14px;
  line-height: 18px;
  color: ${props => props.fontColor || "#90949c"};
  display: flex;
  justify-content: space-between;
`;

const CardTextDiv = styled.div`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const RecommendedDiv = styled.div`
  border: 1px solid #dfdddb;
  border-radius: 6px;
  padding: 24px;
  text-decoration: none;
  text-align: center;
  color: ${props => props.fontColor || "inherit"};
`;

const PostsDiv = styled.div`
  background: #fff;
  border-bottom: solid 1px #ebedf0;
  font-size: 14px;
  padding: 12px;
  position: relative;

  &:last-child {
    border: none;
  }
`;

const PostProfileImageAnchor = styled.div`
  float: left;
  display: block;
  height: 40px;
  margin-right: 12px;
  width: 40px;
`;

const PostProfileImageDiv = styled.div`
  float: left;
  display: block;
  height: 40px;
  margin-right: 12px;
  width: 40px;
`;

const PostContentDiv = styled.div`
  line-height: 19px;
  word-wrap: break-word;
  padding-top: 8px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #1d2129;

  &:after {
    clear: both;
    content: ".";
    display: block;
    font-size: 0;
    height: 0;
    line-height: 0;
    visibility: hidden;
  }
`;

const PostContentWithImageDiv = styled.div`
  float: ${props => props.float || "left"};
  color: #1d2129;
  line-height: 1.34;
  font-size: 14px;
`;

const PostContentH2 = styled.h2`
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  margin-top: 0;
  padding: 12px 0 6px 0;
  white-space: pre-wrap;
`;

const PostContentExcerpt = styled.div`
  line-height: 19px;
  color: #4b4f56;
  margin: 0;
  padding: 6px 0 0 0;
  white-space: pre-wrap;
`;

const PostContentLinkDiv = styled.div`
  word-wrap: break-word;
  color: #1d2129;
  font-size: 14px;
  font-weight: bold;
  line-height: 19px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PostContentLinkDomain = styled.div`
  word-wrap: break-word;
  color: #90949c;
  font-size: 12px;
  line-height: 14px;
  margin-top: 2px;
`;

const RecommendedSliderDiv = styled.div`
  display: flex;
  margin: 10px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;

const RecommendGroupDiv = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  margin: 6px;
  position: relative;
  width: 144px;
  height: 189px;
  min-width: 144px;
  min-height: 144px;
`;

const RecommendGroupImageWrapper = styled(Image)`
  width: 100%;
`;

const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  min-height: 72px !important;
  overflow: hidden !important;
  height: 72px !important;
`;

const GroupInfo = styled.div`
  align-items: center;
  font-size: 12px;
  line-height: 17px;
  margin: 12px;
  text-align: left;
`;

const NoOfMembers = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #90949c;
`;

const GroupTitle = styled.div`
  font-weight: 600;
`;

const GroupJoinButton = styled(Button)`
  background-color: #f7f6f5 !important;
  border-color: #dfdddb !important;
  color: #474645 !important;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  white-space: nowrap;
  line-height: 26px;
  padding: 0 10px;

  &:hover {
    background-color: #ece9e7 !important;
    border-color: #d3d1cf !important;
  }
`;

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editDescription: false,
      groups: [
        {
          id: 1,
          title: "Teams & Projects",
          description:
            "A space for smaller teams to work, with up to 250 members plus its own chat",
          imageUrl: "https://dummyimage.com/1920x1080/000/fff"
        },
        {
          id: 2,
          title: "Discussions",
          description:
            "Start a conversation and get feedback from coworkers across your company",
          imageUrl: "https://dummyimage.com/1920x1080/000/fff"
        },
        {
          id: 3,
          title: "Announcements",
          description:
            "A place to broadcast your company news, updates and announcements",
          imageUrl: "https://dummyimage.com/1920x1080/000/fff"
        },
        {
          id: 4,
          title: "Social & More",
          description: "Plan lunch dates, sports and team outings",
          imageUrl: "https://dummyimage.com/1920x1080/000/fff"
        },
        {
          id: 5,
          title: "Multi-Company",
          description: "Work with people from other companies",
          imageUrl: "https://dummyimage.com/1920x1080/000/fff"
        }
      ],
      recommendedGroups: false,
      recommendedGroupsList: []
    };
  }

  editDescription = () => {
    this.setState({
      editDescription: true,
      recommendedGroup: false
    });
  };

  recommendedGroupHandler = () => {
    this.setState({
      recommendedGroup: true
    });
  };

  recommendedGroupCloseHandler = () => {
    this.setState({
      recommendedGroup: false
    });
  };

  recommendedGroupsListHandler = data => {
    this.setState(state => ({
      recommendedGroupsList: [...state.recommendedGroupsList, data]
    }));
  };

  render() {
    const { groupData } = this.props;
    const {
      editDescription,
      groups,
      recommendedGroup,
      recommendedGroupsList
    } = this.state;

    const fontAwesomeStyle = {
      margin: "5px"
    };

    const profileLink = {
      color: "#1d2129",
      fontWeight: "bold"
    };

    const dateLinkCss = {
      textDecoration: "none",
      cursor: "pointer",
      color: "#90949c"
    };

    return (
      <div className="w-auto m-2" style={{ flex: 1 }}>
        <Card className="card__box--post shadow-sm">
          <Card.Header style={{ backgroundColor: "transparent" }} as="h5">
            <CardHeaderDiv>About this Group</CardHeaderDiv>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <CardItemDiv fontWeight={600}>
                <div>Description</div>
                {!editDescription && (
                  <span
                    className="cursor-pointer user-select-none text-body"
                    onClick={this.editDescription}
                  >
                    Edit
                  </span>
                )}
              </CardItemDiv>
            </Card.Title>
            <CardTextDiv className={`card-text`}>
              {!editDescription ? (
                <CardItemDiv fontColor={"#4b4f56"}>
                  Plan, share files and work together on Social App.
                </CardItemDiv>
              ) : (
                <Form>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      rows="3"
                      value="Plan, share files and work together on Social App."
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    onClick={() => this.setState({ editDescription: false })}
                  >
                    Confirm
                  </Button>
                  <Button
                    variant="default"
                    onClick={() => this.setState({ editDescription: false })}
                  >
                    Cancel
                  </Button>
                </Form>
              )}
            </CardTextDiv>
            <Card.Title>
              <CardItemDiv fontWeight={600}>Group Type</CardItemDiv>
            </Card.Title>
            <CardTextDiv className={`card-text`}>
              <CardItemDiv fontColor={"#4b4f56"}>Teams & Projects</CardItemDiv>
            </CardTextDiv>
          </Card.Body>
        </Card>
        <Card className="card__box--post shadow-sm">
          <Card.Header style={{ backgroundColor: "transparent" }} as="h5">
            <CardHeaderDiv
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div>Recommended by the Admin ∙ 0</div>
              <div>
                <Dropdown>
                  <Dropdown.Toggle variant="default" id="dropdown-basic">
                    Manage
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="/#"
                      onClick={this.recommendedGroupHandler}
                    >
                      Recommend Existing Group
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/#"
                      onClick={this.recommendedGroupHandler}
                    >
                      Manage Recommended Groups
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </CardHeaderDiv>
          </Card.Header>
          {recommendedGroupsList.length > 0 ? (
            <Card.Body style={{ padding: 0 }}>
              <RecommendedSliderDiv>
                {recommendedGroupsList.map((value, index) => {
                  return (
                    <RecommendGroupDiv>
                      <ImageWrap>
                        <RecommendGroupImageWrapper
                          src={value.imageUrl}
                          align="center"
                        />
                      </ImageWrap>
                      <GroupInfo>
                        <GroupTitle>Test</GroupTitle>
                        <div>Open group</div>
                        <NoOfMembers>1 member</NoOfMembers>
                      </GroupInfo>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <GroupJoinButton variant="default">
                          <strong>Joined</strong>
                        </GroupJoinButton>
                      </div>
                    </RecommendGroupDiv>
                  );
                })}
              </RecommendedSliderDiv>
            </Card.Body>
          ) : (
            <Card.Body>
              <Row>
                <Col
                  xs={6}
                  onClick={this.recommendedGroupHandler}
                  style={{ cursor: "pointer" }}
                >
                  <RecommendedDiv fontColor={"#606770"}>
                    <div>
                      <FontAwesomeIcon size="2x" icon={faBullhorn} />
                    </div>
                    Recommend an Existing Group
                  </RecommendedDiv>
                </Col>
                <Col xs={6}>
                  <RecommendedDiv fontColor={"#606770"}>
                    <div>
                      <FontAwesomeIcon size="2x" icon={faUserFriends} />
                    </div>
                    Create a New Recommended Group
                  </RecommendedDiv>
                </Col>
              </Row>
            </Card.Body>
          )}
        </Card>
        <Card className="card__box--post shadow-sm">
          <Card.Header style={{ backgroundColor: "transparent" }} as="h5">
            <CardHeaderDiv>Members ∙ 0</CardHeaderDiv>
          </Card.Header>
          <Card.Body>
            <CardTextDiv className={`card-text`}>
              <FontAwesomeIcon
                style={fontAwesomeStyle}
                size="2x"
                icon={faUserFriends}
              />
              <FontAwesomeIcon
                style={fontAwesomeStyle}
                size="2x"
                icon={faUserFriends}
              />
              <FontAwesomeIcon
                style={fontAwesomeStyle}
                size="2x"
                icon={faUserFriends}
              />
              <FontAwesomeIcon
                style={fontAwesomeStyle}
                size="2x"
                icon={faUserFriends}
              />
            </CardTextDiv>
            <Card.Title>
              <CardItemDiv fontWeight={600}>Admins</CardItemDiv>
            </Card.Title>
            <CardTextDiv className={`card-text`}>
              <FontAwesomeIcon
                style={fontAwesomeStyle}
                size="2x"
                icon={faUserFriends}
              />
              <CardItemDiv style={{ marginTop: "10px" }} fontColor={"#606770"}>
                Fouad is an admin.
              </CardItemDiv>
            </CardTextDiv>
          </Card.Body>
          <Link to={`/group/${groupData.id}/members`}>
            <Card.Header
              className="card-header-bottom"
              style={{ backgroundColor: "transparent" }}
            >
              <CardHeaderDiv
                style={{
                  textAlign: "center",
                  color: "inherit",
                  fontWeight: "unset",
                  fontSize: "12px"
                }}
              >
                See All Members
              </CardHeaderDiv>
            </Card.Header>
          </Link>
        </Card>
        <Card className="card__box--post shadow-sm">
          <Card.Header style={{ backgroundColor: "transparent" }} as="h5">
            <CardHeaderDiv>Top Recent Posts</CardHeaderDiv>
          </Card.Header>
          <Card.Body style={{ padding: 0 }}>
            <CardTextDiv className={`card-text`}>
              <PostsDiv>
                <div>
                  <div className="_42ef">
                    <div className="_6a">
                      <PostProfileImageAnchor>
                        <PostProfileImageDiv>
                          <Image
                            src="https://via.placeholder.com/40"
                            style={{ borderRadius: "50%", overflow: "hidden" }}
                          />
                        </PostProfileImageDiv>
                      </PostProfileImageAnchor>
                      <div>
                        <div>
                          <a href="/#" style={profileLink} title="Fouad Omri">
                            Fouad Omri
                          </a>
                          is celebrating this special day with
                          <a href="/#" style={profileLink} title="Safa Omri">
                            Safa Omri
                          </a>
                          .
                        </div>
                        <div>
                          <div>
                            <a
                              style={dateLinkCss}
                              href="/groups/841230796234395/permalink/845333775824097/"
                            >
                              <span
                                title="Wednesday, June 5, 2019 at 2:23 PM"
                                className="timestampContent"
                              >
                                June 5 at 2:23 PM
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <PostContentDiv>feeling happy always</PostContentDiv>
              </PostsDiv>
              <PostsDiv>
                <div>
                  <div className="_42ef">
                    <div className="_6a">
                      <PostProfileImageAnchor>
                        <PostProfileImageDiv>
                          <Image
                            src="https://via.placeholder.com/40"
                            style={{ borderRadius: "50%", overflow: "hidden" }}
                          />
                        </PostProfileImageDiv>
                      </PostProfileImageAnchor>
                      <div>
                        <div>
                          <a href="/#" style={profileLink} title="Bloomberg">
                            Bloomberg
                          </a>
                          shared a
                          <a href="/#" style={profileLink}>
                            Link
                          </a>
                          .
                        </div>
                        <div>
                          <div>
                            <a
                              style={dateLinkCss}
                              href="/groups/841230796234395/permalink/845333775824097/"
                            >
                              <span
                                title="Monday, June 3, 2019 at 7:45 PM"
                                className="timestampContent"
                              >
                                June 3 at 7:45 PM
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <PostContentDiv>
                  <PostContentWithImageDiv
                    style={{ width: "calc(100% - 120px)" }}
                  >
                    <PostContentH2>
                      Top Economist to Back Average Inflation Target at Fed
                      Conference
                    </PostContentH2>
                    <PostContentExcerpt>
                      An influential economist and former monetary policy
                      make...
                    </PostContentExcerpt>
                    <PostContentLinkDiv>
                      Top Economist to Back Average Inflation Target at Fed
                      Conference
                    </PostContentLinkDiv>
                    <PostContentLinkDomain>
                      www.bloomberg.com
                    </PostContentLinkDomain>
                  </PostContentWithImageDiv>
                  <PostContentWithImageDiv
                    float="right"
                    style={{ width: "104px", height: "104px" }}
                  >
                    <Image
                      src="https://via.placeholder.com/104"
                      style={{ borderRadius: "50%", overflow: "hidden" }}
                    />
                  </PostContentWithImageDiv>
                </PostContentDiv>
              </PostsDiv>
            </CardTextDiv>
          </Card.Body>
          <Link to={`/group/${groupData.id}`}>
            <Card.Header
              className="card-header-bottom"
              style={{ backgroundColor: "transparent" }}
            >
              <CardHeaderDiv
                style={{
                  textAlign: "center",
                  color: "inherit",
                  fontWeight: "unset",
                  fontSize: "12px"
                }}
              >
                See All Posts
              </CardHeaderDiv>
            </Card.Header>
          </Link>
        </Card>
        <Card className="card__box--post shadow-sm">
          <Card.Header style={{ backgroundColor: "transparent" }} as="h5">
            <CardHeaderDiv>Photos</CardHeaderDiv>
          </Card.Header>
          <Card.Body>
            <CardTextDiv className={`card-text`}>
              <Image src={Banner1} fluid alt="Banner1" />
            </CardTextDiv>
            <CardTextDiv className={`card-text`}>
              <Image src={Banner2} fluid alt="Banner2" />
            </CardTextDiv>
          </Card.Body>
          <Link to={`/group/${groupData.id}/photos`}>
            <Card.Header
              className="card-header-bottom"
              style={{ backgroundColor: "transparent" }}
            >
              <CardHeaderDiv
                style={{
                  textAlign: "center",
                  color: "inherit",
                  fontWeight: "unset",
                  fontSize: "12px"
                }}
              >
                See All Photos
              </CardHeaderDiv>
            </Card.Header>
          </Link>
        </Card>
        {recommendedGroup && (
          <RecommendedGroupModal
            recommendedGroup={recommendedGroup}
            recommendedGroupsListHandler={this.recommendedGroupsListHandler}
            recommendedGroupCloseHandler={this.recommendedGroupCloseHandler}
            groups={groups}
          />
        )}
      </div>
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
)(About);
