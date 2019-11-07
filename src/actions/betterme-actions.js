/* eslint-disable indent */
/* eslint-disable import/prefer-default-export */
import {
    SET_CURRENT_FEEDBACK,
    UPDATE_FEEDBACK_REWARDS,
    SET_CURRENT_FEEDBACK_ICON,
    SET_SELECTED_EMPLOYEE,
    SHOW_EMPLOYEE_FEEDBACKS,
    SET_SELECTED_FEEDBACK_ICON,
    RESET_SELECTED_FEEDBACK,
    SAVE_FEEDBACK_COMMENTS,
    UNSET_SELECTED_EMPLOYEE,
    SAVE_FEEDBACK_REQUESTED_EMPLOYEE,
    ADD_FEEDBACK_TO_REQUESTED_FEEDBACKS,
    REMOVE_FEEDBACK_FROM_REQUESTED_FEEDBACKS,
    SAVE_REQUESTED_FEEDBACK_COMMENTS,
    UNSET_REQUESTED_EMPLOYEE,
    GET_RECEIVED_FEEDBACK_LIST,
    UPDATE_RECEIVED_FEEDBACK_LIST,
    SET_COMPITENCY_RATING,
    RESET_EMPLOYEE,
    SET_SELECTED_FEEDBACKS
} from '../types';

const ReceivedFeedbackList = [
    {
        user_id: 1,
        name: 'Anas Laffet',
        img: '/assets/imgs/bradpitt.jpeg',
        feedbacks: [
            {
                name: 'orientation',
                icon: 'star',
                date:'26-09-2019',
            },
            {
                name: 'Relationships',
                icon: 'cap',
                date:'27-09-2019',
            },
            {
                name: 'Service',
                icon: 'star',
                date:'28-09-2019',
            },
            {
                name: 'ownership',
                icon: 'medal',
                date:'30-09-2019',
            },
            {
                name: 'proactive',
                icon: 'star',
                date:'29-09-2019',
            }
        ]
    },
    {
        user_id: 2,
        name: 'Fouad Omri',
        img: '/assets/imgs/bradpitt.jpeg',
        feedbacks: [
            {
                name: 'orientation',
                icon: 'star',
                date:'30-09-2019',
            },
            {
                name: 'Relationships',
                icon: 'cap',
                date:'31-09-2019',
            }
        ]
    },
    {
        user_id: 3,
        name: 'Chetan Godhani',
        img: '/assets/imgs/bradpitt.jpeg',
        feedbacks: [
            {
                name: 'orientation',
                icon: 'star',
                date:'24-09-2019',
            },
            {
                name: 'Relationships',
                icon: 'star',
                date:'28-09-2019',
            },
            {
                name: 'Service',
                icon: 'star',
                date:'26-09-2019',
            }
        ]
    },
    {
        user_id: 4,
        name: 'Fouad Omri',
        img: '/assets/imgs/bradpitt.jpeg',
        feedbacks: [
            {
                name: 'orientation',
                icon: 'star',
                date:'30-09-2019',
            },
            {
                name: 'Relationships',
                icon: 'cap',
                date:'28-09-2019',
            }
        ]
    },
    {
        user_id: 5,
        name: 'Fouad Omri',
        img: '/assets/imgs/bradpitt.jpeg',
        feedbacks: [
            {
                name: 'orientation',
                icon: 'star',
                date:'25-09-2019',
            },
            {
                name: 'Relationships',
                icon: 'cap',
                date:'28-09-2019',
            }
        ]
    },
    {
        user_id: 6,
        name: 'Fouad Omri',
        img: '/assets/imgs/bradpitt.jpeg',
        feedbacks: [
            {
                name: 'orientation',
                icon: 'star',
                date:'27-09-2019',
            },
            {
                name: 'Relationships',
                icon: 'cap',
                date:'29-09-2019',
            }
        ]
    },
    {
        user_id: 7,
        name: 'Fouad Omri',
        img: '/assets/imgs/bradpitt.jpeg',
        feedbacks: [
            {
                name: 'orientation',
                icon: 'star',
                date:'30-09-2019',
            },
            {
                name: 'Relationships',
                icon: 'cap',
                date:'26-09-2019',
            }
        ]
    },
    {
        user_id: 8,
        name: 'Fouad Omri',
        img: '/assets/imgs/bradpitt.jpeg',
        feedbacks: [
            {
                name: 'orientation',
                icon: 'star',
                date:'30-09-2019',
            },
            {
                name: 'Relationships',
                icon: 'cap',
                date:'27-09-2019',
            }
        ]
    },
    {
        user_id: 9,
        name: 'Fouad Omri',
        img: '/assets/imgs/bradpitt.jpeg',
        feedbacks: [
            {
                name: 'orientation',
                icon: 'star',
                date:'29-09-2019',
            },
            {
                name: 'Relationships',
                icon: 'cap',
                date:'24-09-2019',
            }
        ]
    },
    {
        user_id: 10,
        name: 'Fouad Omri',
        img: '/assets/imgs/bradpitt.jpeg',
        feedbacks: [
            {
                name: 'orientation',
                icon: 'star',
                date:'25-09-2019',
            },
            {
                name: 'Relationships',
                icon: 'cap',
                date:'29-09-2019',
            }
        ]
    },
];

export const setcurrentfeedback = (feedback) => (dispatch) => {
    dispatch({
        type: SET_CURRENT_FEEDBACK,
        feedback
    });
};

export const updaterewardsforfeedback = (feedback, id) => (dispatch) => {
    dispatch({
        type: UPDATE_FEEDBACK_REWARDS,
        feedback,
        id
    });
};

export const setcurrentfeedbackicon = (icontype, feedback, id) => (dispatch) => {
    dispatch({
        type: SET_CURRENT_FEEDBACK_ICON,
        icontype,
        feedback,
        id
    });
};

export const setselectedfeedbackicon = (icontype, feedback, id) => (dispatch) => {
    dispatch({
        type: SET_SELECTED_FEEDBACK_ICON,
        icontype,
        feedback,
        id
    });
};

export const setselectedemployee = (employee) => (dispatch) => {
    dispatch({
        type: SET_SELECTED_EMPLOYEE,
        employee
    });
};

export const showfeedbacksforcompitency = (feedback, id) => (dispatch) => {
    dispatch({
        type: SHOW_EMPLOYEE_FEEDBACKS,
        feedback,
        id
    });
};

export const resetselectedfeedback = (feedback, id) => (dispatch) => {
    dispatch({
        type: RESET_SELECTED_FEEDBACK,
        feedback,
        id
    });
};

export const savecommentsforfeedback = (comment) => (dispatch) => {
    dispatch({
        type: SAVE_FEEDBACK_COMMENTS,
        comment
    });
};

export const unsetselectedemployee = () => (dispatch) => {
    dispatch({
        type: UNSET_SELECTED_EMPLOYEE
    });
};

export const saveemployeerequestedforfeedback = (employee) => (dispatch) => {
    dispatch({
        type: SAVE_FEEDBACK_REQUESTED_EMPLOYEE,
        employee
    });
};

export const addfeedbacktorequestedfeedbacks = (feedback) => (dispatch) => {
    dispatch({
        type: ADD_FEEDBACK_TO_REQUESTED_FEEDBACKS,
        feedback
    });
};

export const removefeedbackfromrequestedfeedbacks = (feedback) => (dispatch) => {
    dispatch({
        type: REMOVE_FEEDBACK_FROM_REQUESTED_FEEDBACKS,
        feedback
    });
};

export const savecommentsforrequestedfeedback = (comment) => (dispatch) => {
    dispatch({
        type: SAVE_REQUESTED_FEEDBACK_COMMENTS,
        comment
    });
};

export const unsetrequestedemployee = () => (dispatch) => {
    dispatch({
        type: UNSET_REQUESTED_EMPLOYEE
    });
};

export const getreceivedfeedbacklist = () => (dispatch) => {
    dispatch({
        type: GET_RECEIVED_FEEDBACK_LIST,
        ReceivedFeedbackList
    });
};

export const updateReceivedFeedbacksList = (updatedFeedbackList) => (dispatch) => {
    dispatch({
        type: UPDATE_RECEIVED_FEEDBACK_LIST,
        updatedFeedbackList
    });
};

export const setcompitencyRating = (newArray) => (dispatch) => {
    dispatch({
        type: SET_COMPITENCY_RATING,
        newArray
    });
}

export const resetemployee = (employeeType) => (dispatch) => {
    dispatch({
        type: RESET_EMPLOYEE,
        employeeType
    });
}

export const setselectedfeedbacks = (selectedfeedbacks) => (dispatch) => {
    dispatch({
        type: SET_SELECTED_FEEDBACKS,
        selectedfeedbacks
    });
}