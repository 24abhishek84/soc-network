import {
  SHOW_NOTIFICATION_TOAST,
  REMOVE_NOTIFICATION_TOAST
} from '../actions/types';

const initialState = {
  type: "",
  message: "",
  showNotification: false
};

export default function common(state = initialState, action = {}) {
  switch (action.type) {
    case SHOW_NOTIFICATION_TOAST:
      return {
        ...state,
        ...action.data,
        showNotification: true
      }
    case REMOVE_NOTIFICATION_TOAST:
      return {
        type: "",
        message: "",
        showNotification: false
      }
    default: return state;
  }
}