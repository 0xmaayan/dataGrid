import { INITIAL_STATE } from '../store/initial-state';

import {
  ADD_DATA,
  IS_LOADING,
  HAS_ERROR,
} from '../actions/types';

export default function (state = INITIAL_STATE.data, action) {
  switch(action.type) {

    case ADD_DATA:
      return action.payload;

    case IS_LOADING:
      return {...state, isLoading: action.isLoading};

    case HAS_ERROR:
      return {...state, hasError: action.hasError};

    default:
      return state;
  }

}