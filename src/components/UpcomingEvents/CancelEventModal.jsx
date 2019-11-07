import React from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";

const CancelEventModal = ({ show, onHide, selectedEvent, handleCancel }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      overlayClassName="modal-555px"
      style={{ top: "250px" }}
      className="d-flex justify-content-center"
    >
      <Modal.Header
        style={{
          backgroundColor: "#f5f6f7",
          border: "1px solid #e5e5e5 ",
          borderBottom: 0,
          color: "#1d2129",
          fontSize: "19px"
        }}
        className="font-weight-bold"
        closeButton
      >
        <div>What do you want to do?</div>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Form.Group as={Row}>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label={<strong>Cancel Event</strong>}
                name="cancelEvent"
                id="cancelEvent"
                className={`event-radio`}
              />
              <div className="pl-4">
                If you cancel your event, guests will be notified. You'll
                be able to access the event page but won't be able to edit
                the event.
              </div>
              <Form.Check
                type="radio"
                label={<strong>Delete Event</strong>}
                name="cancelEvent"
                id="deleteEvent"
                className="event-radio pt-1"
              />
              <div className="pl-4">
                If you delete your event, you won't be able to access it
                again. If you'll want to come back to it, you can cancel
                your event instead.
              </div>
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={onHide}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => handleCancel(selectedEvent)}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default CancelEventModal
