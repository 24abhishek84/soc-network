/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Modal, Button, InputGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RecommendedGroupsModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  HeaderWrapper,
  BodyWrapper,
  BlockWrapper,
  GroupBlocks,
  GroupTitle,
  GroupType,
  RecommendButton,
  ImageWrapper,
} from "./Group.style";

const { Title } = Modal;

class RecommendedGroupsModal extends Component {
  render() {
    const {
      recommendedGroup,
      recommendedGroupCloseHandler,
      groups,
      recommendedGroupsListHandler
    } = this.props;

    return (
      <Modal
        show={recommendedGroup}
        onHide={recommendedGroupCloseHandler}
        dialogClassName="modal-recommended-555px"
        style={{ display: 'flex', justifyContent: 'center', top: '100px' }}
      >
        <HeaderWrapper className="font-weight-bold" closeButton>
          <Title as="h5">
            <strong>Recommended Group</strong>
          </Title>
        </HeaderWrapper>
        <HeaderWrapper className="font-weight-bold">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Search"
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
        </HeaderWrapper>
        <BodyWrapper style={{ padding: 0 }}>
          <BlockWrapper>
            <GroupBlocks className="d-flex justify-content-between p-3">
              <Title as="h5">
                <strong>Groups You Manage</strong>
              </Title>
            </GroupBlocks>
            {groups.length > 0 &&
              groups.map((value) => {
                return (
                  <GroupBlocks className="d-flex justify-content-between p-3" key={`GroupBlocks-${value.id}`}>
                    <div className="d-flex">
                      <ImageWrapper
                        src="http://localhost:3000/assets/imgs/group_1.jpg"
                        alt="group1"
                        style={{
                          height: '60px',
                          width: '60px',
                          borderRadius: '10px'
                        }}
                      />
                      <div className="d-flex flex-column justify-content-center">
                        <Link to={`/group/${value.id}`}>
                          <GroupTitle>{value.title}</GroupTitle>
                        </Link>
                        <GroupType>Open group · {value.id} member</GroupType>
                      </div>
                    </div>
                    <div className="d-flex align-items-center ml-3 mr-0 mt-0 mb-0">
                      <RecommendButton
                        variant="default"
                        onClick={() => recommendedGroupsListHandler(value)}
                      >
                        Recommended
                      </RecommendButton>
                    </div>
                  </GroupBlocks>
                );
              })}
          </BlockWrapper>
        </BodyWrapper>
        <Modal.Footer>
          <Button
            variant="primary"
            size="sm"
            onClick={recommendedGroupCloseHandler}
          >
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default RecommendedGroupsModal;
