/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React, { Fragment, useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const SentFeedbacksModal = (props) => {
    const { show } = props;
    const [showSentFeedbacks, setshowSentFeedbacks] = useState(show);

    useEffect(() => {
        setshowSentFeedbacks(show);
    }, [show]);

    return (
        <Fragment>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showSentFeedbacks}
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        SEND FEEDBACKS
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Suggested Colleagues</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default SentFeedbacksModal;
