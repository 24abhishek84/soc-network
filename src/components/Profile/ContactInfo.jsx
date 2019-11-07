import React from 'react'

import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactInfoModal = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName="mw-100 mt-5"
      className="work-experience-modal"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header className="p-4" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className="font-weight-normal mb-0 font-size-24">Chetan Godhani</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <h2 className="d-flex justify-content-between align-items-center font-weight-normal">
          <div>Contact Info</div>
          <div className="cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center font-size-20">
            <FontAwesomeIcon className="font-size-24 p-1 rounded-circle profile-header--edit-icon" icon={faPen} />
          </div>
        </h2>

        <div className="d-flex align-items-center pt-3">
          <FontAwesomeIcon className="font-size-20 rounded-circle profile-header--edit-icon align-self-start" icon={faEnvelope} />
          <div className="ml-3 d-flex flex-column">
            <span className="font-weight-bold font-size-16">Email</span>
            <a href="mailto:chetan.devstree@gmail.com" target="_blank" rel="noopener noreferrer" className="mt-2 font-size-14">
              chetan.devstree@gmail.com
            </a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ContactInfoModal;