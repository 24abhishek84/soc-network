import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";

const { Header, Title, Body } = Modal;

const HeaderWrapper = styled(Header)`
  background-color: #f5f6f7;
  border-bottom: 1px solid #e5e5e5;
  border-radius: 3px 3px 0 0;
  color: #1d2129;
  font-weight: bold;
  line-height: 19px;
  padding: 10px 12px !important;
`;

class Logout extends Component {
  render() {
    const { logoutModal, handleLogout, logoutModalCloseHandler } = this.props;

    return (
      <Modal
        show={logoutModal}
        onHide={logoutModalCloseHandler}
        style={{ display: "flex", justifyContent: "center", top: "100px" }}
      >
        <HeaderWrapper closeButton>
          <Title as="h5">
            <strong>Log Out</strong>
          </Title>
        </HeaderWrapper>
        <Body>Are you sure you want to log out of Workplace?</Body>
        <Modal.Footer>
          <Button variant="default" size="sm" onClick={logoutModalCloseHandler}>
            Cancel
          </Button>
          <Button variant="primary" size="sm" onClick={handleLogout}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Logout;
