/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Image, Modal, Button, Col, Row, InputGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { saveNewEvent } from '../../actions/event-actions';

const EventInvitees = (props) => {
  const [ selectedInvitees, setSelectedInvitees ] = useState([]);
  const [ Disabled, setDisabled ] = useState(true);

  useEffect(() => {
    const { saveNewEvent: saveNewEventData } = props;
    const SaveEventObj = {
      event: props.eventData,
      invitee: selectedInvitees
    };
    saveNewEventData(SaveEventObj);
  });

  const handleCloseTheModal = () => {
    props.onHide();
  };

  const ImageCss = styled(Image)`
    padding-right:10px;
  `;

  const RightSideWrapper = styled.div`
    background-color: #f5f6f7;
    padding: 10px;
  `;

  const LightWrapper = styled.div`
    color: #90949c;
    font-size: 12px;
    font-weight: bold;
    padding: 10px 0;
  `;

  const [ modalStyle, setModalStyle ] = useState({
    top: '10%',
    left: '40%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '50px',
    height: '600px',
    transform: 'translate(-50%, -50%)',
    transition: 'width 0s, height 0s',
    border: 'none !important'
  });

  const NonSelectorWrapper = styled.a`
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/KkPboBWRPO_.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -231px;
    height: 20px;
    width: 20px;
    cursor: pointer;
  `;

  const SelectorWrapper = styled.a`
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/KkPboBWRPO_.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -168px;
    height: 20px;
    width: 20px;
    cursor: pointer;
  `;

  const SelectAllWrapper = styled.a`cursor: pointer;`;
  const UserList = [
    {
      id: 1,
      name: 'Safa Omri',
      image1:
        'https://scontent.fbom9-1.fna.fbcdn.net/v/t1.0-1/p50x50/21728455_10150009420700263_6692011165586730274_n.png?_nc_cat=1&_nc_oc=AQkt6iLzSFbIjiUrvfUhbyLIpdKxrHA89i_KYmQMPyLLTL-exwyjq-R3gPSJws8EOzQ&_nc_ht=scontent.fbom9-1.fna&oh=c037d60c155981ae95b991a98cdbcc9e&oe=5D8B2DD0'
    },
    {
      id: 2,
      name: 'Elena Kalimera',
      image1:
        'https://scontent.fbom9-1.fna.fbcdn.net/v/t1.0-1/p50x50/21740124_10150009420697716_1133359415229610442_n.png?_nc_cat=1&_nc_oc=AQlyFUYmprShkQVzyuU3JsaCM4idPiM1LSuDERIzsFE8Nd-lhRBnBspaMvPDZNfQusQ&_nc_ht=scontent.fbom9-1.fna&oh=3208836b92f03cc2590a3bf929202d9a&oe=5D880EBE'
    }
  ];

  const onChangeMemberHandler = (userid) => {
    const inviteeobj = UserList.find((x) => x.id === userid);
    if (inviteeobj !== undefined) {
      if (selectedInvitees.find((x) => x.id === inviteeobj.id)) {
        const filteredInvitees = selectedInvitees.filter((member) => member.id !== userid);
        setSelectedInvitees(filteredInvitees);
      } else {
        setSelectedInvitees([ ...selectedInvitees, inviteeobj ]);
      }
      setDisabled(false);
    }
  };

  const onSelectAll = () => {
    setSelectedInvitees(UserList);
  };

  const sendInvitesOfEvent = () => {
    const SaveEventObj = {
      event: props.eventData,
      invitees: selectedInvitees
    };
  };
  return (
    <Modal
      show={props.show}
      onHide={handleCloseTheModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ content: modalStyle }}
    >
      <Modal.Header style={{ backgroundColor: 'grey' }} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Invite</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col sm={9}>
            <Row>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search for people to invite"
                  aria-label="Search for people to invite"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Row>
            <Row style={{ height: '40px' }}>
              <Col sm={9} style={{ padding: '0' }}>
                <div className="modal-title-container" style={{ width: '100%' }}>
                  <div className="modal-title-text">Coworkers ({UserList.length})</div>
                </div>
              </Col>
              <Col sm={3}>
                <div>
                  <SelectAllWrapper onClick={() => onSelectAll()}>Select All</SelectAllWrapper>
                </div>
              </Col>
            </Row>
            {UserList.map((user) => {
              return (
                <Row style={{ paddingBottom: '10px' }} key={user.id}>
                  <Col>
                    <ImageCss src={user.image1} />
                    {user.name}
                  </Col>
                  <Col
                    xs
                    lg="3"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    {selectedInvitees.find((invitee) => invitee.id === user.id) ? (
                      <SelectorWrapper onClick={() => onChangeMemberHandler(user.id)} />
                    ) : (
                      <NonSelectorWrapper onClick={() => onChangeMemberHandler(user.id)} />
                    )}
                  </Col>
                </Row>
              );
            })}
          </Col>
          <Col sm={3}>
            <RightSideWrapper>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <LightWrapper>SELECTED</LightWrapper>
                <LightWrapper>{selectedInvitees.length}</LightWrapper>
              </div>
            </RightSideWrapper>
            {selectedInvitees.map((member, i) => {
              return (
                <Row style={{ paddingBottom: '10px' }} key={member.id}>
                  <Col>
                    <ImageCss src={member.image1} />
                    {member.name}
                  </Col>
                </Row>
              );
            })}
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCloseTheModal}>Cancel</Button>
        <Button onClick={sendInvitesOfEvent} disabled={Disabled}>
          Send Invites
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default connect(null, { saveNewEvent })(EventInvitees);
