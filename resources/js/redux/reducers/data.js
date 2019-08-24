import { INITIAL_STATE } from '../store/initial-state';

import {
  GET_DATA,
  ADD_DATA,
  UPDATE_DATA,
  DELETE_DATA,
  CREATE_DATA,
  FILTER_DATA,
  IS_LOADING,
  HAS_ERROR,
} from '../actions/types';

export default function (state = INITIAL_STATE.data, action) {
  switch(action.type) {

    case GET_DATA:
      return Object.assign([],state,action.payload.data);

    case ADD_DATA:
      return action.payload;

    case UPDATE_DATA:
      let newState = state.map(record =>
          (record.PassengerId === action.payload.PassengerId)
            ? action.payload
            : record
          )
      return Object.assign([],state,newState);

    case DELETE_DATA:
      let removeIndex = state.map(function(record) { return record.PassengerId; }).indexOf(action.payload.PassengerId);
      state.splice(removeIndex, 1);
      return Object.assign([],state,state);

    case CREATE_DATA:
      let newStata = state.concat(action.payload);
      return Object.assign([],state,newStata);

    case FILTER_DATA:
      let filteredState = state.filter((record) => {
        if(record[action.payload.searchColumnValue]){
           if(action.payload.searchColumnValue === "Sex"){
              // since male is includes() in female, we need to compare between the strings
             return record[action.payload.searchColumnValue] === action.payload.searchText
            }else{
              return record[action.payload.searchColumnValue].includes(action.payload.searchText)
            }
        }
      });
      state = filteredState;
      return Object.assign([],state,state);

    case IS_LOADING:
      return {...state, isLoading: action.isLoading};

    case HAS_ERROR:
      return {...state, hasError: action.hasError};

    default:
      return state;
  }

}