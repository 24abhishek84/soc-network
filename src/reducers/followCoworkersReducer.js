/* eslint-disable no-case-declarations */
import {
  LOAD_COWORKERS
} from '../types/followCoworkers';

const initialState = {
  coworkers: [],
};

export default function common(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_COWORKERS:
      return {
        ...state,
        coworkers: action.data
      }
    default: return state;
  }
}