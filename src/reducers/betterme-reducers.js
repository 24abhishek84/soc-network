/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
/* eslint-disable no-case-declarations */
/* eslint-disable no-fallthrough */
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

const initialState = {
    userFeedbacks: {
        feedbacks: [],
        user_id: null
    },
    selectedfeedbacks:[],
    mainreceivedList: [],
    receivedFeedbackList: [],
    selectedemployee: {},
    requestedEmployee: {},
    requestedFeedbacks: [],
    requestedFeedbackComment: '',
    feedbackCommented: false,
    employeefeedbackresponse: false,
    pieupdated: false,
    currentEmployeeList: [],
    currentFeedback: '',
    compitencyRating: [],
    defaultRewards: ['star', 'cap', 'medal'],
    icon: ['star', 'cap', 'medal'],
    FeedbackIcons: [],
    FeedbackRequests: [
        {
            user_id: 1,
            user_name: 'Monica Berman',
            feedbacks: [
                {
                    name: 'Agility',
                    icon: []
                },
                {
                    name: 'Orientation',
                    icon: []
                },
                {
                    name: 'Relationships',
                    icon: []
                },
                {
                    name: 'Creative',
                    icon: []
                },
                {
                    name: 'Ownership',
                    icon: []
                },
                {
                    name: 'Pro-Active',
                    icon: []
                }
            ]
        },
        {
            user_id: 2,
            user_name: 'Isadora Valline',
            feedbacks: [
                {
                    name: 'Orientation',
                    icon: []
                },
                {
                    name: 'Relationships',
                    icon: []
                },
                {
                    name: 'Service',
                    icon: []
                },
                {
                    name: 'Ownership',
                    icon: []
                },
                {
                    name: 'Pro-Active',
                    icon: []
                }
            ]
        }
    ],
    totalfeedbacks: [
        {
            id: 1,
            name: 'Agility',
            icon: []
        },
        {
            id: 2,
            name: 'Orientation',
            icon: []
        },
        {
            id: 3,
            name: 'Relationships',
            icon: []
        },
        {
            id: 4,
            name: 'Creative',
            icon: []
        },
        {
            id: 5,
            name: 'Ownership',
            icon: []
        },
        {
            id: 6,
            name: 'Pro-Active',
            icon: []
        },
        {
            id: 7,
            name: 'Service',
            icon: []
        },
        {
            id: 8,
            name: 'Opener',
            icon: []
        },
        {
            id: 9,
            name: 'Emotional Intelligence',
            icon: []
        }
    ],
    employees: [
        {
            id: 1,
            name: 'Abhishek Leuva',
            position: 'Full Stack Developer'
        },
        {
            id: 2,
            name: 'Chetan Godhani',
            position: 'Full Stack Developer'
        },
        {
            id: 3,
            name: 'Fouad Omri',
            position: 'Project Manager'
        },
        {
            id: 4,
            name: 'Anas',
            position: 'Data Analyst'
        },
        {
            id: 5,
            name: 'Safa Omri',
            position: 'Cheif Executive Officer'
        },
        {
            id: 6,
            name: 'Nirav Joshi',
            position: 'Business Owner'
        }
    ]
};
export default function betterme(state = initialState, action = {}) {
    const { defaultRewards, currentFeedback, FeedbackIcons, FeedbackRequests, selectedemployee, totalfeedbacks, requestedFeedbacks } = state;
    switch (action.type) {
        case SET_CURRENT_FEEDBACK:
            return { ...state, currentFeedback: action.feedback };
        case UPDATE_FEEDBACK_REWARDS:
            let CurrentRewardArray = [];
            CurrentRewardArray = [...defaultRewards];
            let uerfeedbackIndex = null;
            let newUserFeedbackIconObj = {};
            const newUserFeedbackRequests = [...FeedbackRequests];
            const userFeedbackIndex = FeedbackRequests.findIndex(x => x.user_id === action.id);
            const userFeedbackRecord = FeedbackRequests.find(x => x.user_id === action.id);
            if (userFeedbackRecord !== undefined) {
                uerfeedbackIndex = userFeedbackRecord.feedbacks.findIndex(x => x.name === action.feedback);
            }

            newUserFeedbackIconObj = {
                name: action.feedback,
                icon: [...defaultRewards]
            };
            if (uerfeedbackIndex !== null) {
                userFeedbackRecord.feedbacks[uerfeedbackIndex] = newUserFeedbackIconObj;
            }
            newUserFeedbackRequests[userFeedbackIndex] = userFeedbackRecord;
            return { ...state, currentRewards: CurrentRewardArray, currentFeedback: action.feedback, FeedbackRequests: newUserFeedbackRequests };

        case SET_CURRENT_FEEDBACK_ICON:
            let IconArray = [];
            let newFeedbackIconObj = {};
            const newFeedbackRequests = [...FeedbackRequests];
            const Feedback = currentFeedback;
            if (Feedback !== action.feedback) {
                IconArray = [...defaultRewards];
            } else {
                IconArray = [action.icontype];
            }
            let feedbackIndex = null;
            // find index of user
            const userFeedbackRequestsIndex = FeedbackRequests.findIndex(x => x.user_id === action.id);
            const userFeedbackRequests = FeedbackRequests.find(x => x.user_id === action.id);
            if (userFeedbackRequests !== undefined) {
                feedbackIndex = userFeedbackRequests.feedbacks.findIndex(x => x.name === action.feedback);
            }

            newFeedbackIconObj = {
                name: action.feedback,
                icon: IconArray
            };
            if (feedbackIndex !== null) {
                userFeedbackRequests.feedbacks[feedbackIndex] = newFeedbackIconObj;
            }
            newFeedbackRequests[userFeedbackRequestsIndex] = userFeedbackRequests;
            return { ...state, icon: IconArray, currentFeedback: action.feedback, FeedbackIcons: [...FeedbackIcons, newFeedbackIconObj], FeedbackRequests: newFeedbackRequests };
        // set Selected employee feedback icon
        case SET_SELECTED_FEEDBACK_ICON:
            const SelectedFeedback = currentFeedback;
            const SelectedUser = selectedemployee;
            let Icons = [];
            if (SelectedFeedback !== action.feedback) {
                Icons = [...defaultRewards];
            } else {
                Icons = [action.icontype];
            }

            const SelecteduserFeedbackIndex = SelectedUser.feedbacks.findIndex(x => x.name === action.feedback);
            const SelectedUserFeedbackObj = {
                name: action.feedback,
                icon: Icons
            };

            SelectedUser.feedbacks[SelecteduserFeedbackIndex] = SelectedUserFeedbackObj;
            return { ...state, currentFeedback: action.feedback, selectedemployee: SelectedUser, employeefeedbackresponse: true };
        // set Selected employee
        case SET_SELECTED_EMPLOYEE:
            const employeeObj = action.employee;
            const feedbacks = [...totalfeedbacks];
            employeeObj.feedbacks = feedbacks;
            return { ...state, selectedemployee: employeeObj };
        // set feedbacks of cpmitency for employee
        case SHOW_EMPLOYEE_FEEDBACKS:
            const newUser = selectedemployee;
            const userCurrentFeedbackIndex = newUser.feedbacks.findIndex(x => x.name === action.feedback);
            const UserCurrentFeedbackObj = {
                name: action.feedback,
                icon: [...defaultRewards]
            };
            newUser.feedbacks[userCurrentFeedbackIndex] = UserCurrentFeedbackObj;
            return { ...state, currentFeedback: action.feedback, selectedemployee: newUser };
        // reset selected feedback
        case RESET_SELECTED_FEEDBACK:
            const resetUser = selectedemployee;
            const resetUserFeedbackIndex = resetUser.feedbacks.findIndex(x => x.name === action.feedback);
            const ResetUserFeedbackObj = {
                name: action.feedback,
                icon: []
            };
            resetUser.feedbacks[resetUserFeedbackIndex] = ResetUserFeedbackObj;
            return { ...state, currentFeedback: action.feedback, selectedemployee: resetUser };
        // save comments for feedback
        case SAVE_FEEDBACK_COMMENTS:
            const commentUser = selectedemployee;
            commentUser.comment = action.comment;
            return { ...state, selectedemployee: commentUser, feedbackCommented: true };
        // unset selected employee
        case UNSET_SELECTED_EMPLOYEE:
            return { ...state, selectedemployee: {}, currentFeedback: '', feedbackCommented: false };
        // unset requested employee
        case UNSET_REQUESTED_EMPLOYEE:
            return { ...state, requestedEmployee: {}, requestedFeedbacks: [], requestedFeedbackComment: '', feedbackCommented: false };
        // save feedback requested employee
        case SAVE_FEEDBACK_REQUESTED_EMPLOYEE:
            return { ...state, requestedEmployee: action.employee };
        // add feedback to requested feedbacks
        case ADD_FEEDBACK_TO_REQUESTED_FEEDBACKS:
            let requestedFeedbacksArray = [];
            requestedFeedbacksArray = [...requestedFeedbacks, action.feedback];
            return { ...state, requestedFeedbacks: requestedFeedbacksArray };
        // remove feedback from requested feedbacks
        case REMOVE_FEEDBACK_FROM_REQUESTED_FEEDBACKS:
            const currentRequestedFeedbacksArray = [...requestedFeedbacks];
            const newRequestedFeedbacksArray = currentRequestedFeedbacksArray.filter(x => x !== action.feedback);
            return { ...state, requestedFeedbacks: newRequestedFeedbacksArray };
        // add comment to requested feedback
        case SAVE_REQUESTED_FEEDBACK_COMMENTS:
            return { ...state, requestedFeedbackComment: action.comment, feedbackCommented: true };
        // get received feedback list
        case GET_RECEIVED_FEEDBACK_LIST:
            return { ...state, receivedFeedbackList: action.ReceivedFeedbackList, mainreceivedList: action.ReceivedFeedbackList };
        // update received feedback list
        case UPDATE_RECEIVED_FEEDBACK_LIST:
            return { ...state, receivedFeedbackList: action.updatedFeedbackList, pieupdated: true };
        // set compitency rating
        case SET_COMPITENCY_RATING:
            return { ...state, compitencyRating: action.newArray };
        // reset selected/ requested employee
        case RESET_EMPLOYEE:
            if(action.employeeType === 'selected'){
                return { ...state, selectedemployee: {} };
            } else {
                return { ...state, requestedEmployee: {} };
            }
        // set selected feedbacks
        case SET_SELECTED_FEEDBACKS:
            return { ...state, selectedfeedbacks: action.selectedfeedbacks };
            default: return state;
    }
};
