import React from 'react'
import { Toast } from "react-bootstrap";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/NotificationAction';

import styled from "styled-components";

const ToastHeader = styled(Toast.Header)`
  button.close {
    right: 5px;
    position: absolute;
    margin: 0 !important;
    color: #fff;
    font-size: 24px;
    font-weight: 100;
    opacity: 1 !important;
    padding: 12px;
  }
`;

const Notification = ({removeNotificationAction, type, message, showNotification}) => {

  const style = {
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12) !important',
    bottom: 32,
    left: 96,
    position: 'fixed',
    zIndex: showNotification ? 99999 : 0
  }

  const headeStyle = {
    padding : '16px 32px 16px 16px',
    minWidth: 288
  }

  return (
    <Toast className="border-0 shadow" onClose={() => removeNotificationAction()} show={showNotification} autohide style={style}>
      <ToastHeader className="bg-success text-white font-weight-bold border-bottom-0" style={headeStyle}>
        {message !== '' && 
          <strong className="mr-auto">{message}</strong>
          // <strong className="mr-auto">{type.charAt(0).toUpperCase() + type.substring(1)} {message}</strong>
        }
      </ToastHeader>
      {/* <Toast.Body className="font-weight-bold">{message}</Toast.Body> */}
    </Toast>
  )
}

const mapStateToProps = (state) => ({
  ...state.notification
})

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ ...Actions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification)