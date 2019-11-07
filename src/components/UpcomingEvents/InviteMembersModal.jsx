import React from "react";
import { Modal, Form, Button, Row, Col, Image } from "react-bootstrap";
import {
  SelectAllWrapper,
  NonSelectorWrapper,
  SelectorWrapper,
} from "../Group/Group.style";

const InviteMembersModal = ({ show, onHide, onChangeMemberHandler, communityMembers, selectedMembers }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      className="invite-modal"
      size="lg"
    >
      <Modal.Header>
        <Modal.Title>
          Invite Members
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0 container">
        <div className="d-flex">
          <div className="d-flex flex-column max-height-500" style={{ flex: '1 1 100%' }}>
            <div className="p-3 border-bottom">
              <Form.Control
                type="email"
                placeholder="Enter name or email address"
              />
            </div>
            <div className="h-100 overflow-y-auto">
                <div className="p-3">
                  <Row className="pb-2">
                    <Col className="d-flex align-items-center">
                      <div className="text-black-50">
                        Community Members ({selectedMembers.length})
                      </div>
                    </Col>
                    <Col xs lg="3" className="d-flex justify-content-center align-items-center">
                      <div className="font-size-12 pt-2 pb-2 text-body text-center font-weight-bold">
                        <SelectAllWrapper
                          href="#"
                          onClick={() => onChangeMemberHandler("", "all")}
                        >
                          Select All
                        </SelectAllWrapper>
                      </div>
                    </Col>
                  </Row>
                  {communityMembers.map((value, index) => {
                    return (
                      <Row className="pb-2" key={`communityMembers-${value.id}`}>
                        <Col>
                          <div className="d-flex align-items-center">
                            <Image
                              src={value.profilePicture}
                              thumbnail
                            />
                            <div className="font-size-12 pt-2 pb-2 text-body d-flex justify-content-center text-center font-weight-bold pl-3">
                              {value.name}
                            </div>
                          </div>
                        </Col>
                        <Col xs lg="3" className="d-flex justify-content-center align-items-center">
                          {selectedMembers.find(
                            member => member.id === value.id
                          ) ? (
                            <SelectorWrapper
                              onClick={() => onChangeMemberHandler(value.id)}
                            />
                          ) : (
                            <NonSelectorWrapper
                              onClick={() => onChangeMemberHandler(value.id)}
                            />
                          )}
                        </Col>
                      </Row>
                    );
                  })}
                </div>
            </div>
          </div>
          <div className="p-0 border-left d-flex flex-column bg-light max-height-500 overflow-y-auto overflow-x-none" style={{ flex: '1 0 30%' }}>
            <div className="pl-2 pr-2 pt-2">
              <div className="d-flex justify-content-between">
                <div className="text-black-50 font-size-12 font-weight-bold p-0 pt-2">SELECTED</div>
                <div className="text-black-50 font-size-12 font-weight-bold p-0 pt-2">{selectedMembers.length}</div>
              </div>
            </div>
            {selectedMembers.map((value) => {
              return (
                <Row className="p-0 pl-2 pr-2 pt-2" key={`selectedMembers-${value.id}`}>
                  <Col>
                    <div className="d-flex align-items-center">
                      <Image src={value.profilePicture} thumbnail />
                      <div className="font-size-12 pl-2 pt-2 pb-2 text-body text-center font-weight-bold">
                        {value.name}
                      </div>
                    </div>
                  </Col>
                </Row>
              );
            })}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-end align-items-center">
          <div>
            <Button
              variant="default"
              onClick={onHide}
            >
              Cancel
            </Button>
          </div>
          <div className="pl-3">
            <Button
              variant="primary"
              onClick={onHide}
            >
              Send Invites
            </Button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default InviteMembersModal
