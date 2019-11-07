/* eslint-disable no-case-declarations */
import {
  LOAD_TAKE_PART_QUIZ,
  ADD_VOTE,
} from '../types/takePart';

const initialState = {
  availableCards: [],
  myCards: [],
};

export default function common(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_TAKE_PART_QUIZ:
      return {
        ...state,
        ...action.data
      }
    case ADD_VOTE:
      return {
        ...state
      }
    default: return state;
  }
}