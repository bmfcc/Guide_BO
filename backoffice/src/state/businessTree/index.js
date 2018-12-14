/** @module BusinessTree-Index */
import watchBusinessTreeSagas from "./businessTree-sagas";
import * as reducers from "./businessTree-reducers";

/** Root of the Business Tree Sagas */
export const rootBusinessTreeSagas = watchBusinessTreeSagas;
/** Root of the Business Tree Reducers */
export const rootBusinessTreeReducers = reducers;
