import { combineReducers } from 'redux';

import common from './common';
import group from './groupReducers';
import events from './event-reducers';
import posts from './postReducers';
import takePart from './takePartReducer';
import notification from './notificationReducer';
import starMe from './starMeUpReducer';
import betterme from './betterme-reducers';
import followCoworkers from './followCoworkersReducer';

export default combineReducers({
  common,
  group,
  events,
  posts,
  takePart,
  notification,
  starMe,
  betterme,
  followCoworkers,
});