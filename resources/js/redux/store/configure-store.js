import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import {INITIAL_STATE} from './initial-state';
import rootReducer from '../reducers/root-reducer';

const middlewares = [
thunk
];

if (process.env.NODE_ENV === `development`) {

  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

/**
 * Development Redux store
 * @param  {object} initialState    Initial state of the Redux store
 * @return {object}                 Redux store
 */

const store = (initialState = INITIAL_STATE) => (
    createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    )
);

export default store;