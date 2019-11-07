/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable indent */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import './BetterMeModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle, faMedal, faGraduationCap, faStar } from '@fortawesome/free-solid-svg-icons';
import * as Actions from '../../actions/betterme-actions';

const FeedbackRequestModal = (props) => {

    const { totalfeedbacks, userfeedbackobj } = props;
    let UserFeedbacks = null;
    let NotUserFeedbackArray = [];
    let NotUserFeedbacks = null;

    const setcurrentfeedbackStyle = (feedback) => {
        props.setcurrentfeedback(feedback, userfeedbackobj.user_id);
    };

    const updateRewards = (feedback) => {
        props.updaterewardsforfeedback(feedback, userfeedbackobj.user_id);
    };

    const setFeedbackIcon = (icontype, feedback) => {
        props.setcurrentfeedbackicon(icontype, feedback, userfeedbackobj.user_id);
    };

    if (userfeedbackobj.feedbacks && userfeedbackobj.feedbacks.length > 0) {

        NotUserFeedbackArray = totalfeedbacks.filter((item) => {
            return userfeedbackobj.feedbacks.findIndex(x => x.name === item.name) === -1;
        });

        NotUserFeedbacks = NotUserFeedbackArray.map((feedback, index) => {
            return (
                <ListGroup.Item className='user-feedback-list' key={`not-feedback-${index}`}>
                    <div className='feedback-name'>{feedback.name}</div>
                    <div style={{ display: 'flex' }}>
                        <div style={feedback.icon.length > 0 ? { display: 'flex' } : { display: 'none' }}>
                            {
                                feedback.icon.includes('star') &&
                                <div className='feedback-icons' style={{ backgroundColor: '#53C7E6' }}>
                                    <FontAwesomeIcon icon={faStar} className='default-icons' style={{ cursor: 'pointer' }} onClick={() => setFeedbackIcon('star', feedback.name)} />
                                </div>
                            }
                            {
                                feedback.icon.includes('cap') &&
                                <div className='feedback-icons' style={{ backgroundColor: '#EEDB1E' }}>
                                    <FontAwesomeIcon icon={faGraduationCap} style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => setFeedbackIcon('cap', feedback.name)} />
                                </div>
                            }
                            {
                                feedback.icon.includes('medal') &&
                                <div className='feedback-icons' style={{ backgroundColor: '#F3ACD1' }}>
                                    <FontAwesomeIcon icon={faMedal} style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => setFeedbackIcon('medal', feedback.name)} />
                                </div>
                            }
                        </div>
                        <div>
                            {
                                feedback.icon.length > 0 && feedback.icon.length < 3 ?
                                    <FontAwesomeIcon icon={faMinusCircle} onClick={() => setcurrentfeedbackStyle(feedback.name)} style={{ fontSize: '20px', cursor: 'pointer' }} />
                                    :
                                    <FontAwesomeIcon icon={faPlusCircle} onClick={() => updateRewards(feedback.name)} style={{ fontSize: '20px', cursor: 'pointer' }} />
                            }

                        </div>
                    </div>
                </ListGroup.Item>
            );
        });

        UserFeedbacks = userfeedbackobj.feedbacks.map((feedback, index) => {
            let feedbackColor = { display: 'none' };
            let feedbacktext = '';
            if (feedback.icon.length > 0 && feedback.icon.length < 3) {
                if (feedback.icon[0] === 'star') {
                    feedbackColor = { color: '#53C7E6', fontSize: '12px' };
                    feedbacktext = 'You Rock';
                } else if (feedback.icon[0] === 'cap') {
                    feedbackColor = { color: '#EEDB1E', fontSize: '12px' };
                    feedbacktext = 'let\'s work on this';
                } else {
                    feedbackColor = { color: '#F3ACD1', fontSize: '12px' };
                    feedbacktext = 'Cool';
                }

            }
            return (
                <ListGroup.Item className='user-feedback-list' key={`feedback-${index}`}>
                    <div>
                        <div className='feedback-name'>{feedback.name}</div>
                        <div><span style={feedbackColor}>{feedbacktext}</span></div>
                    </div>
                    <div style={{ display: 'flex' }}>

                        <div style={feedback.icon.length > 0 ? { display: 'flex' } : { display: 'none' }}>
                            {
                                feedback.icon.includes('star') &&
                                <div className='feedback-icons' style={{ backgroundColor: '#53C7E6' }}>
                                    <FontAwesomeIcon icon={faStar} className='default-icons' style={{ cursor: 'pointer' }} onClick={() => setFeedbackIcon('star', feedback.name)} />
                                </div>
                            }
                            {
                                feedback.icon.includes('cap') &&
                                <div className='feedback-icons' style={{ backgroundColor: '#EEDB1E' }}>
                                    <FontAwesomeIcon icon={faGraduationCap} style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => setFeedbackIcon('cap', feedback.name)} />
                                </div>
                            }
                            {
                                feedback.icon.includes('medal') &&
                                <div className='feedback-icons' style={{ backgroundColor: '#F3ACD1' }}>
                                    <FontAwesomeIcon icon={faMedal} style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => setFeedbackIcon('medal', feedback.name)} />
                                </div>
                            }
                        </div>
                        <div className='align-self-center'>
                            {
                                feedback.icon.length > 0 && feedback.icon.length < 3 ?
                                    <FontAwesomeIcon icon={faMinusCircle} onClick={() => setcurrentfeedbackStyle(feedback.name)} style={{ fontSize: '20px', cursor: 'pointer' }} />
                                    :
                                    <FontAwesomeIcon icon={faPlusCircle} onClick={() => updateRewards(feedback.name)} style={{ fontSize: '20px', cursor: 'pointer' }} />
                            }

                        </div>
                    </div>
                </ListGroup.Item>
            );
        });
    }

    return (
        <Fragment>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        FEEDBACK REQUEST OF <strong style={{ color: '#007bff'}}>{userfeedbackobj.user_name}</strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Requested compitencies</h4>
                    <ListGroup>
                        {UserFeedbacks}
                    </ListGroup>
                    <h4>More compitencies to give feedback</h4>
                    <ListGroup>
                        {NotUserFeedbacks}
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

function mapStateToProps(state) {
    return {
        betterme: state.betterme,
        icon: state.betterme.icon,
        totalfeedbacks: state.betterme.totalfeedbacks
    };
}

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators({ ...Actions }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackRequestModal);

