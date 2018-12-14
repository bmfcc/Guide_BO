// @flow
/** @module State-Index */
import { all } from "redux-saga/effects";
import { combineReducers } from "redux";
import {
  rootBusinessTreeReducers,
  rootBusinessTreeSagas
} from "./businessTree";


/**
 * Root all sagas
 * @function
 */
export function* rootSaga(): Generator<*, *, *> {
  yield all([    
    rootBusinessTreeSagas()    
  ]);
}

/**
 * Root all reducers
 * @function
 */
export const rootReducers = combineReducers({  
  ...rootBusinessTreeReducers
});
