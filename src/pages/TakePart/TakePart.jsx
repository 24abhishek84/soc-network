import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/TakePartActions';
import { changeNavTitle, changeNavMenu } from '../../actions/common';

import {
  faEye,
  faGrinHearts,
  faInbox,
  faCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import moment from "moment";
import { FloatingButton } from '../../components/Group/Group.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DashboardBadge from "./DashboardBadge";
import QuestionModal from "./QuestionModal";
import AnsVotes from "./AnsVotes";
import CreateTakePartModal from '../../components/TakePart/CreateTakePartModal';

import './TakePart.css';

class TakePart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      queModalShow: false,
      questionIndex: undefined,
      activeTab: 'available',
      showTakePartModal: false,
    }
  }

  componentDidMount() {
    const { changeNavTitle, changeNavMenu, loadAllQuizesAction } = this.props;
    const menus = [];

    const titleSettings = {
      title: 'Take Part',
      icon: '/assets/icons/take-part.png'
    }

    changeNavTitle(titleSettings);
    changeNavMenu(menus);
    loadAllQuizesAction();
  }

  toggleQueModal = (index) => {
    this.setState((prevState) => ({
      queModalShow: !prevState.queModalShow,
      questionIndex: index,
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

  toggleTakePartModal = () => {
    this.setState(prevState => ({
      showTakePartModal: !prevState.showTakePartModal
    }))
  };

  render() {
    const { availableCards, myCards } = this.props;
    const { queModalShow, questionIndex, activeTab, showTakePartModal } = this.state;

    const quizData = questionIndex || questionIndex === 0 ? availableCards[questionIndex] : undefined;

    return (
      <div style={{ height: 'calc(100vh - 98px)' }}>
        <div className="container-fluid" style={{ padding: '30px 10px 0 10px' }}>
          <div className="row ml-0 mr-0">
            <DashboardBadge classAdd={`info`} addShadow={activeTab === 'available' ? 'shadow' : ''} icon={faInbox} name={`Available Cards`} counts={24} onClick={() => this.handleTabChange('available')} />
            <DashboardBadge classAdd={`success`} addShadow={activeTab === 'mine' ? 'shadow' : ''} icon={faEye} name={`My Cards`} counts={9} onClick={() => this.handleTabChange('mine')} />
            <DashboardBadge classAdd={`danger`} icon={faGrinHearts} name={`Received Votes`} counts={346} />
            <DashboardBadge classAdd={`warning`} icon={faEye} name={`Received Comments`} counts={57} />
          </div>
          <div className="row ml-0 mr-0">
            {
              activeTab === 'available' ?
                availableCards.map((quiz, index) => {
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 p-1" key={quiz.id}>
                      <div className="tile w-auto available shadow" onClick={() => this.toggleQueModal(index)}>
                        <div className="wrapper">
                          <div className="header">{quiz.type}</div>
                          <div className="p-3 banner-que">
                            <h2>{quiz.quiz}</h2>
                          </div>
                          <div className="p-0 pl-3 pr-3 pb-1 dates">
                            <div className="start">
                              <strong>{moment(new Date(quiz.createdAt * 1000)).fromNow()}</strong>
                            </div>
                          </div>
                          <div className="take-part-footer">
                            <img src={quiz.postedBy.userProfile} alt={quiz.postedBy.userName} /><span>{quiz.postedBy.userName}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
                :
                activeTab === 'mine' &&
                myCards.map((quiz, index) => {
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12" key={quiz.id}>
                      <div className="tile myCards shadow">
                        <div className="wrapper">
                          <div className="wrapper-header-content" onClick={() => this.toggleQueModal(index)}>
                            <div className="header">{quiz.type}</div>
                            <div className="p-3 banner-que">
                              <h2>{quiz.quiz}</h2>
                            </div>
                            <div className="p-0 pl-3 pr-3 dates">
                              <div className="start">
                                <strong>{moment(new Date(quiz.createdAt * 1000)).fromNow()}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="take-part-footer d-flex align-items-center justify-content-between">
                            {quiz.myAns !== '' ?
                              <AnsVotes question={quiz[quiz.myAns].question} votes={quiz[quiz.myAns].votes} questionData={quiz} ans={quiz.myAns} isAnswered={true} faCheck={faCheck} addVote={this.addVote} />
                              :
                              <React.Fragment>
                                <AnsVotes question={quiz.ansA.question} votes={quiz.ansA.votes} questionData={quiz} ans={`ansA`} isAnswered={false} addVote={this.addVote} />
                                <AnsVotes question={quiz.ansB.question} votes={quiz.ansB.votes} questionData={quiz} ans={`ansB`} isAnswered={false} addVote={this.addVote} />
                              </React.Fragment>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
            }
          </div>
        </div>
        <QuestionModal
          show={queModalShow}
          onHide={() => this.toggleQueModal(undefined)}
          quizData={quizData}
          addVote={this.addVote}
          faCheck={faCheck}
        />
        <CreateTakePartModal show={showTakePartModal} onHide={this.toggleTakePartModal} />
        <OverlayTrigger
          placement={"top"}
          overlay={
            <Tooltip className="font-size-14">
              Create Card
            </Tooltip>
          }
        >
          <FloatingButton className="btn-primary" bottom={40} onClick={this.toggleTakePartModal}>
            <FontAwesomeIcon icon={faPlus} />
          </FloatingButton>
        </OverlayTrigger>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.takePart
})

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ ...Actions, changeNavTitle, changeNavMenu }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TakePart)
