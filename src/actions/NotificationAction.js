import { SHOW_NOTIFICATION_TOAST, REMOVE_NOTIFICATION_TOAST } from './types';

export const showNotificationAction = (type, message) => dispatch => {
  dispatch({
    type: SHOW_NOTIFICATION_TOAST,
    data: {
      type,
      message
    }
  })
}

export const removeNotificationAction = () => dispatch => {
  dispatch({
    type: REMOVE_NOTIFICATION_TOAST
  })
}