import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { changeNavTitle, changeNavMenu } from "../../actions/common";
import * as Actions from '../../actions/FollowCoworkersAction';

import { Card, Image, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

const SuggestionsImage = styled(Image)`
 height: 80px !important;
 width: 80px !important;
 object-fit: contain !important;
 border-radius: 50%;
`;

const FollowedByText = styled.div`
  color: #90949c;
  font-size: 12px;
  line-height: 16px;
`;

const FollowButton = styled(Button)`
  background-color: #f7f6f5 !important;
  color: #474645 !important;
  transition: 200ms cubic-bezier(.08,.52,.52,1) background-color, 200ms cubic-bezier(.08,.52,.52,1) box-shadow, 200ms cubic-bezier(.08,.52,.52,1) transform !important;
  border: 1px solid #ccd0d5 !important;
  border-radius: 2px !important;
  padding: 0 10px !important;
  margin: 0;
  width: max-content;
  box-shadow: none !important;
  outline: none !important;

  &:hover {
    background-color: #ece9e7 !important;
    border-color: #d3d1cf !important;
  }
`;

class FollowCoworkers extends Component {

  componentDidMount() {
    const { changeNavTitle, changeNavMenu, loadCoworkersAction } = this.props;

    const menus = [];

    const titleSettings = {
      title: 'Follow Coworkers',
      icon: '/assets/icons/follow-coworkers.png'
    }

    changeNavTitle(titleSettings);
    changeNavMenu(menus);
    loadCoworkersAction();
  }

  render() {
    const { coworkers } = this.props;

    const cardBoxStyle = {
      maxWidth: 700,
      minWidth: 600
    };

    return (
      <Fragment>
        <Card className="mt-4 card__box--post shadow border-0" style={{ ...cardBoxStyle }}>
          <Card.Body className="p-4">
            <div className="text-secondary font-size-14">
              <p className="m-0">Prioritize posts from key people in your organization by following them. People don't get notifications when you follow or unfollow them.</p>
            </div>
          </Card.Body>
        </Card>
        <Card className="card__box--post shadow border-0" style={cardBoxStyle}>
          <Card.Header className="d-flex align-items-center">
            <FontAwesomeIcon className="font-size-16" icon={faStar} />
            <h5 className="m-0 pl-2 font-weight-bold">Suggestions</h5>
          </Card.Header>
          <Card.Header className="p-4">
            <div className="mb-3 d-flex justify-content-center">
              <Image src={`http://localhost:3000/FollowCoworkers.png`}  />
            </div>
            <div className="text-body d-flex flex-column align-items-center">
              <p className="m-0"><strong>Keep Checking Back</strong></p>
              <p>New suggestions will appear here as more coworkers join Workplace.</p>
              <Button variant="primary"><strong>Invite Coworkers</strong></Button>
            </div>
          </Card.Header>
        </Card>
        <Card className="card__box--post shadow border-0" style={cardBoxStyle}>
          <Card.Header className="d-flex align-items-center border-0">
            <FontAwesomeIcon className="font-size-14" icon={faStar} />
            <h5 className="m-0 pl-2 font-weight-bold">Suggestions</h5>
          </Card.Header>
          <Card.Body className="p-0">
            <Row className="m-0">
              {coworkers.length > 0 && coworkers.map(value => {
                return (
                  <Col xs={6} key={`coworker-${value.id}`} className="d-flex justify-content-center p-3 border" style={{ height: 120 }}>
                    <Row>
                      <Col xs={5} className="d-flex align-items-center">
                        <Link to={`/profile/${value.id}`}>
                          <SuggestionsImage src={value.profileImage}/>
                        </Link>
                      </Col>
                      <Col xs={7} className="d-flex flex-column justify-content-center">
                        <Link to={`/profile/${value.id}`} className="font-weight-bold font-size-14">
                          {value.name}
                        </Link>
                        {value.followedBy.length > 0 && 
                          <FollowedByText className="mt-2">followed by</FollowedByText>
                        }
                        {value.isFollowed ?
                          <FollowButton className="mt-2" variant="primary">
                            <strong>Following</strong>
                          </FollowButton>
                          :
                          <FollowButton className="mt-2" variant="primary">
                            <strong>Invite Coworkers</strong>
                          </FollowButton>
                        }
                      </Col>
                    </Row>
                  </Col>
                );
              })}
            </Row>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.common,
    ...state.followCoworkers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ ...Actions, changeNavTitle, changeNavMenu }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowCoworkers);
