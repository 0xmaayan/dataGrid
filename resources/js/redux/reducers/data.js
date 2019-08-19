import { INITIAL_STATE } from '../store/initial-state';

import {
  ADD_DATA,
  UPDATE_DATA,
  IS_LOADING,
  HAS_ERROR,
} from '../actions/types';

export default function (state = INITIAL_STATE.data, action) {
  switch(action.type) {

    case ADD_DATA:
      return action.payload;

    case UPDATE_DATA:
    let newState = state.map(record =>
        (record.PassengerId === action.payload.PassengerId)
          ? action.payload
          : record
        )
    return Object.assign([],state,newState);

    case IS_LOADING:
      return {...state, isLoading: action.isLoading};

    case HAS_ERROR:
      return {...state, hasError: action.hasError};

    default:
      return state;
  }

}