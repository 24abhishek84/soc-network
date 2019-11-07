/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React, { Fragment, useState, useEffect } from 'react';
import { Modal, Row, Button } from 'react-bootstrap';
import './BetterMeModal.css';

const ReceivedFeedbacksModal = (props) => {
    const { show, receivedfeedback } = props;
    const [showReceivedFeedbacks, setshowReceivedFeedbacks] = useState(show);

    let StarsList = <></>;
    let CapList = <></>;
    let MedalList = <></>;
    let StarFeedbacks;
    let CapFeedbacks;
    let MedalFeedbacks;

    useEffect(() => {
        setshowReceivedFeedbacks(show);
    }, [show]);

    if (receivedfeedback.feedbacks !== undefined) {
        StarFeedbacks = receivedfeedback.feedbacks.filter(x => x.icon.indexOf('star') !== -1);
        if (StarFeedbacks !== undefined) {
            StarsList = StarFeedbacks.map((feedback) => {
                return (
                    <div style={{
                        position: 'relative',
                        display: 'block',
                        padding: '0.75rem 1.25rem',
                        marginBottom: '20px',
                        backgroundColor: '#d6d8db',
                        border: '1px solid rgba(0, 0, 0, 0.125)',
                        width: 'fit-content',
                        borderRadius: '25px',
                        marginLeft: '10px'
                    }} key={feedback.name}>
                        {feedback.name}</div>
                );
            });
        }

        CapFeedbacks = receivedfeedback.feedbacks.filter(x => x.icon.indexOf('cap') !== -1);
        if (CapFeedbacks !== undefined) {
            CapList = CapFeedbacks.map((feedback) => {
                return (
                    <div style={{
                        position: 'relative',
                        display: 'block',
                        padding: '0.75rem 1.25rem',
                        marginBottom: '20px',
                        backgroundColor: '#d6d8db',
                        border: '1px solid rgba(0, 0, 0, 0.125)',
                        width: 'fit-content',
                        borderRadius: '25px',
                        marginLeft: '10px'
                    }} key={feedback.name}>
                        {feedback.name}</div>
                );
            });
        }

        MedalFeedbacks = receivedfeedback.feedbacks.filter(x => x.icon.indexOf('medal') !== -1);
        if (MedalFeedbacks !== undefined) {
            MedalList = MedalFeedbacks.map((feedback) => {
                return (
                    <div style={{
                        position: 'relative',
                        display: 'block',
                        padding: '0.75rem 1.25rem',
                        marginBottom: '20px',
                        backgroundColor: '#d6d8db',
                        border: '1px solid rgba(0, 0, 0, 0.125)',
                        width: 'fit-content',
                        borderRadius: '25px',
                        marginLeft: '10px'
                    }} key={feedback.name}>
                        {feedback.name}</div>
                );
            });
        }
    }

    return (
        <Fragment>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showReceivedFeedbacks}
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        RECEIVED FEEDBACKS
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        StarsList.length > 0 &&
                        <Fragment>
                            <Row className='FeedbackRow'>
                                <div style={{
                                    borderLeft: '10px solid #53C7E6', color: '#53C7E6', padding: '5px', fontWeight: '900', fontSize: 'large'
                                }}>You Rock</div>
                            </Row>
                            <Row className='FeedbackRow'>{StarsList}</Row>
                        </Fragment>
                    }
                    {
                        CapList.length > 0 &&
                        <Fragment>
                            <Row className='FeedbackRow'>
                                <div style={{
                                    borderLeft: '10px solid #EEDB1E', color: '#EEDB1E', padding: '5px', fontWeight: '900', fontSize: 'large'
                                }}>let&#39;s work on this</div>
                            </Row>
                            <Row className='FeedbackRow'>{CapList}</Row>
                        </Fragment>
                    }
                    {
                        MedalList.length > 0 &&
                        <Fragment>
                            <Row className='FeedbackRow'>
                                <div style={{
                                    borderLeft: '10px solid #F3ACD1', color: '#F3ACD1', padding: '5px', fontWeight: '900', fontSize: 'large'
                                }}>Cool</div>
                            </Row>
                            <Row className='FeedbackRow'>{MedalList}</Row>
                        </Fragment>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default ReceivedFeedbacksModal;
