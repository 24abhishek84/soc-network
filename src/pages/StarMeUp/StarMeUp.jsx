import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/StarMeUpActions';
import { changeNavTitle, changeNavMenu } from '../../actions/common';

import { Nav, Card, Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  PostProfileImageDiv,
} from "./../../components/Group/Posts";
import {
  faUsers,
  faRocket,
  faHands,
  faMagic,
  faBatteryEmpty,
  faHeart as faHeartSolid,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGem,
  faLightbulb,
  faClock,
  faHeart as faHeartRegular,
  faComment as faCommentRegular,
} from "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SendStarModal from "./SendStarModal";
import StarViewModal from "./StarViewModal";

import './../TakePart/TakePart.css';
import './StarMeUp.css';
import moment from 'moment';
import { FloatingButton } from "../../components/Group/Group.style";
import { StickyNav } from '../../components/Header/GroupHeader';

const starTypeArr = {
  kudos: {
    key: 'kudos',
    name: 'Kudos',
    className: 'bg-c-grey',
    colorClassName: 'text-color-grey',
    icon: faGem,
  },
  act_ethically: {
    key: 'act_ethically',
    name: 'Act Ethically',
    className: 'bg-c-blue',
    colorClassName: 'text-color-blue',
    icon: faHands,
  },
  team_player: {
    key: 'team_player',
    name: 'Team Player',
    className: 'bg-c-violate',
    colorClassName: 'text-color-violate',
    icon: faUsers,
  },
  constantly_innovate: {
    key: 'constantly_innovate',
    name: 'Constantly Innovate',
    className: 'bg-c-pink',
    colorClassName: 'text-color-pink',
    icon: faLightbulb,
  },
  excellence_in_your_work: {
    key: 'excellence_in_your_work',
    name: 'Excellence In Your Work',
    className: 'bg-c-lightblue',
    colorClassName: 'text-color-lightblue',
    icon: faClock,
  },
  think_big: {
    key: 'think_big',
    name: 'Think Big',
    className: 'bg-c-lightgreen',
    colorClassName: 'text-color-lightgreen',
    icon: faRocket,
  },
  have_fun: {
    key: 'have_fun',
    name: 'Have Fun',
    className: 'bg-c-yellow',
    colorClassName: 'text-color-yellow',
    icon: faMagic,
  },
};

class TakePart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      starModalShow: false,
      starViewModalShow: false,
      starType: undefined,
      activeTab: 'available',
      selectedNav: 'recent',
      selectedStarId: undefined,
      selectedStarType: undefined,
      sidebarDrawerOpen: false,
    }
  }

  componentDidMount() {
    const { changeNavTitle, changeNavMenu, loadAllStarsAction } = this.props;
    const menus = [];

    const titleSettings = {
        title: 'StarMeUp',
        icon: '/assets/icons/appreciation.svg'
    }

    changeNavTitle(titleSettings);
    changeNavMenu(menus);
    loadAllStarsAction();
  }

  toggleStartMeUpModal = (type) => {
    this.setState((prevState) => ({
      starModalShow: !prevState.starModalShow,
      starType: type,
      sidebarDrawerOpen: false
    }))
  }
  
  toggleStartMeUpViewModal = (id, type) => {
    this.setState((prevState) => ({
      starViewModalShow: !prevState.starViewModalShow,
      selectedStarId: id,
      selectedStarType: type,
      sidebarDrawerOpen: false
    }))
  }

  handleTabChange = (tabName) => {
    this.setState({
      activeTab: tabName
    })
  }

  addVote = (questionData, ans) => {
    console.log('vote added');
    this.props.addVoteAction(questionData.id, ans);
  }

  handleSubmitSendStar = (values) => {
    console.log('handleSubmitSendStar', values);
  }

  handleNavSelect = (selectedNav) => {
    if (selectedNav !== this.state.selectedNav) {
      this.setState({
        selectedNav
      })
    }
  }

  handleStarPostLike = (id, type) => {
    this.props.addStarLikeAction(id, type);
  }

  handleStarPostModal = (id, type) => {
    this.setState({
      selectedStarId: id,
      selectedStarType: type,
      sidebarDrawerOpen: false
    });
  }

  handleSaveCommentLikeUnlike = (starPostId, commentId, isReply, replyCommentId) => {
    this.props.saveCommentLikeUnlike(starPostId, commentId, isReply, replyCommentId);
  }

  toggleDrawer = () => {
    this.setState(prevState => ({
      sidebarDrawerOpen: !prevState.sidebarDrawerOpen
    }))
  }

  render() {
    const { recentStars, receivedStars, sentStars } = this.props;
    const { starModalShow, starType, selectedNav, selectedStarId, selectedStarType, starViewModalShow, sidebarDrawerOpen } = this.state;

    const cardBoxStyle = {
      maxWidth: "650px"
    };

    let startsData = [];
    let starName = '';
    if (selectedNav === 'recent') {
      startsData = recentStars;
      starName = 'recentStars';
    } else if (selectedNav === 'received') {
      startsData = receivedStars;
      starName = 'receivedStars';
    } else if (selectedNav === 'sent') {
      startsData = sentStars;
      starName = 'sentStars';
    }

    let selectedStarTypeData = undefined;
    let selectedStarData = undefined;
    if(selectedStarId && selectedStarType) {
      selectedStarData = this.props[selectedStarType].find(x => x.id === selectedStarId);
      selectedStarTypeData = starTypeArr[selectedStarData.type];
    }

    return (
      <div style={{ height: 'calc(100vh - 60px)' }}>
        <StickyNav className="position-sticky star-me-up-nav shadow-sm" fill variant="tabs" defaultActiveKey="recent" onSelect={this.handleNavSelect}>
          <Nav.Item>
            <Nav.Link className="d-flex justify-content-center align-items-center betterme-link" eventKey="recent" href="#">Recent</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="d-flex justify-content-center align-items-center betterme-link" eventKey="received">Received</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="d-flex justify-content-center align-items-center betterme-link" eventKey="sent">Sent</Nav.Link>
          </Nav.Item>
        </StickyNav>
        <div className="container-fluid star-me-up" style={{ padding: 10 }}>
          <div className="pb-4">
            {startsData.length > 0 ?
              startsData.map((recentStar) => {
                const starData = starTypeArr[recentStar.type]
                return (
                  <Card className="mt-4 shadow mx-auto" style={cardBoxStyle} key={`${starName}-${recentStar.id}`}>
                    <Card.Body className="p-0">
                      <div className="p-3 bg-white border-bottom d-flex" onClick={() => this.toggleStartMeUpViewModal(recentStar.id, starName)}>
                        <PostProfileImageDiv style={{ height: 104, width: 104 }}>
                          <Image
                            src={recentStar.sentTo.image}
                            className="shadow rounded"
                            style={{ overflow: "hidden" }}
                          />
                        </PostProfileImageDiv>
                        <div className="d-flex flex-column">
                          <div className="d-flex justify-content-between align-items-center">
                            <h4><b>{recentStar.sentTo.name}</b></h4>
                            <div className="text-muted">
                              {moment(new Date(recentStar.createdAt * 1000)).fromNow()}
                            </div>
                          </div>
                          <div className={`${starData.colorClassName} order-card mr-1 mb-2 rounded`}>
                            <div className="card-block text-center d-flex align-items-center">
                              <FontAwesomeIcon icon={starData.icon} style={{ fontSize: 35, width: 35 }} />
                              <h3 style={{ fontSize: 18 }} className="font-weight-bold text-uppercase text-left pl-1">{starData.name}</h3>
                            </div>
                          </div>
                          <div>
                            {recentStar.comment}
                          </div>
                        </div>
                      </div>
                      <div className="take-part-footer d-flex align-items-center justify-content-between border-top-0">
                        <div>
                          <img src={recentStar.postedBy.userProfile} alt={recentStar.postedBy.userName} /><span>Sent By <b>{recentStar.postedBy.userName}</b></span>
                        </div>
                        <div className="d-flex user-select-none">
                          <span className="mr-2 d-flex align-items-center font-size-20 cursor-pointer" onClick={() => this.toggleStartMeUpViewModal(recentStar.id, starName)}>
                            <FontAwesomeIcon icon={faCommentRegular} style={{ color: '#848484' }} />&nbsp;
                            <span style={{ fontSize: 14 }}>{recentStar.totalComments}</span>
                          </span>
                          <span className="d-flex align-items-center font-size-20 cursor-pointer" onClick={() => this.handleStarPostLike(recentStar.id, starName)}>
                            <FontAwesomeIcon icon={recentStar.isMyLiked ? faHeartSolid : faHeartRegular} color={recentStar.isMyLiked ? '#b30505ab' : '#848484'} />&nbsp;
                            <span style={{ fontSize: 14 }}>{recentStar.totalLikes}</span>
                          </span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                );
              })
              :
              <Card className="mt-4 shadow mx-auto" style={cardBoxStyle}>
                <Card.Body className="p-0">
                  <div className="p-5 bg-white border-bottom d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faBatteryEmpty} style={{ fontSize: 40 }} />
                    <h2>No Data Found.</h2>
                  </div>
                </Card.Body>
              </Card>
            }
          </div>
        </div>
        <SendStarModal
          show={starModalShow}
          onHide={() => this.toggleStartMeUpModal(undefined)}
          starType={starType}
          handleSubmitSendStar={this.handleSubmitSendStar}
        />
        <StarViewModal
          show={starViewModalShow}
          onHide={() => this.toggleStartMeUpViewModal(undefined, undefined)}
          starData={selectedStarData}
          starTypeData={selectedStarTypeData}
          starName={starName}
          handleStarPostLike={this.handleStarPostLike}
          handleSaveCommentLikeUnlike={this.handleSaveCommentLikeUnlike}
        />
        <OverlayTrigger
          placement={"top"}
          overlay={
            <Tooltip className="font-size-14">
              Send Star
            </Tooltip>
          }
        >
          <FloatingButton className="btn-primary" right={sidebarDrawerOpen ? 310 : 40} bottom={40} onClick={this.toggleDrawer}>
            <FontAwesomeIcon icon={faPlus} />
          </FloatingButton>
        </OverlayTrigger>
        <div id="mySidenav" className="sidenav shadow-lg" style={{ width: sidebarDrawerOpen ? 300 : 0 }}>
          <div className="closebtn cursor-pointer" onClick={this.toggleDrawer}>&times;</div>
          {Object.keys(starTypeArr).map((key) => {
            const value = starTypeArr[key];
            return (
              <div key={value.key} className={`card ${value.className} order-card m-3 cursor-pointer`} onClick={() => this.toggleStartMeUpModal(value)} >
                <div className="card-block text-center d-flex align-items-center p-3">
                  <FontAwesomeIcon icon={value.icon} style={{ fontSize: 20, width: 35 }} />
                  <h3 className="m-0 font-weight-bold text-uppercase text-left pl-2 font-size-16">{value.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.starMe
})

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ ...Actions, changeNavTitle, changeNavMenu }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TakePart)
