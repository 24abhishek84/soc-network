/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Fragment } from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import * as Actions from '../../actions/betterme-actions';

const CommentBoxModal = (props) => {
    const { requestedFeedbacks, showCommentBox, selectedemployee, feedbackCommented, type, closemodal } = props;
    let FeedbackName = '';
    let FeedbackColor = '#ffffff';
    let FeedbackList = <></>;

    if (type === 'sendFeedback') {
        const { feedbacks } = selectedemployee;
        let SelectedFeedbacks = [];
        if (feedbacks !== undefined) {
            SelectedFeedbacks = feedbacks.filter(item => item.icon.length === 1);
        }
        if (SelectedFeedbacks.length > 0) {
            FeedbackList = SelectedFeedbacks.map((feedback) => {
                if (feedback.icon[0] === 'star') {
                    FeedbackName = 'You Rock';
                    FeedbackColor = '#53C7E6';
                } else if (feedback.icon[0] === 'cap') {
                    FeedbackName = "let's work on this";
                    FeedbackColor = '#EEDB1E';
                } else {
                    FeedbackName = 'Cool';
                    FeedbackColor = '#F3ACD1';
                }

                return (
                    <div>
                        <div style={{
                            borderLeft: `10px solid ${FeedbackColor}`, color: `${FeedbackColor}`, padding: '5px', fontWeight: '900', fontSize: 'large'
                        }}>
                            {FeedbackName}
                        </div>
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
                        }}>
                            {feedback.name}</div>
                    </div>
                );
            });
        }
    } else {
        FeedbackList = requestedFeedbacks.map((feedback) => {
            return (
                <div>
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
                    }}>
                        {feedback}</div>
                </div>
            );
        });
    }

    const handleFormSubmit = (values) => {
        if (type === 'sendFeedback') {
            props.savecommentsforfeedback(values.comment);
        } else {
            props.savecommentsforrequestedfeedback(values.comment);
        }
    };

    if (feedbackCommented) {
        setTimeout(() => {
            closemodal();
        }, 5000);
    }

    return (
        <Fragment>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showCommentBox}
            >
                {!feedbackCommented ?
                    <Formik
                        initialValues={{
                            comment: 'please comment'
                        }}
                        onSubmit={(values) => handleFormSubmit(values)}
                        render={() => {
                            return (
                                <Form>
                                    <Modal.Header>
                                        <Modal.Title id="contained-modal-title-vcenter">
                                            COMMENT
                                    </Modal.Title>
                                        <div className='d-flex justify-content-right'>
                                            <FontAwesomeIcon icon={faWindowClose} onClick={closemodal} />
                                        </div>
                                    </Modal.Header>
                                    <Modal.Body>
                                        {FeedbackList}
                                        <div>
                                            <Field
                                                type="text"
                                                placeholder="Write comment here..."
                                                name="comment"
                                                style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
                                            />
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button type='submit'>SEND</Button>
                                    </Modal.Footer>
                                </Form>
                            );
                        }}
                    />
                    :
                    <Fragment>
                        <Modal.Body>
                            <div style={{
                                height: '300px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{ color: '#000000', textAlign: 'center', paddingBottom: '10px' }}>
                                    <span style={{ fontWeight: '500px', fontSize: '30px' }}>Feedback {type === 'sendFeedback' ? '' : 'Request'} Sent to </span>
                                </div>
                                <div>
                                    <Image src="/assets/imgs/thanks.jpeg" roundedCircle style={{ height: '150px', width: '150px' }} />
                                </div>
                                <div style={{ color: '#000000', textAlign: 'center', paddingTop: '10px' }}>
                                    <span style={{ fontWeight: '900px', fontSize: '50px' }}>{selectedemployee.name}</span>
                                </div>
                            </div>
                        </Modal.Body>
                    </Fragment>
                }
            </Modal>
        </Fragment>
    );
};

function mapStateToProps(state) {
    return {
        feedbackCommented: state.betterme.feedbackCommented,
        requestedFeedbacks: state.betterme.requestedFeedbacks
    };
}

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators({ ...Actions }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentBoxModal);
