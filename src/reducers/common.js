import { UPDATE_NAV_TITLE, UPDATE_NAV_MENU, UPDATE_SHOW, UPDATE_MY_GROUP, RESET_COMMON_STATE } from '../types';

const initialState = {
	titleSetting: {
    title: '',
    icon: ''
  },
  mygroups: [],
  allposts: [],
};

export default function common(state = initialState, action = {}) {
  // console.log("mygroup ", action.groupsList);
  switch (action.type) {
    case UPDATE_NAV_TITLE:
      return { ...state, titleSetting: action.title };
    case UPDATE_NAV_MENU:
      return { ...state, menu: action.menu };
    case UPDATE_SHOW:
      return { ...state, show: action.show };
    case RESET_COMMON_STATE:
      return {};
    case UPDATE_MY_GROUP:
      return { ...state, mygroups: action.groupsList };
    default: return state;
  }
}
