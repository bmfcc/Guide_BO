// @flow
/** @module BusinessTree-Reducers */
import { BUSINESSTREE } from "./businessTree-actions";

/** Initial Business Tree State */
const initialBusinessTreeState = {
  isFetching: false,
  name: "",
  payload: { NetworkServiceAreas: [] }
};
/**
 * Reducer of the Business Tree, which process the action run
 * @param {*} state current state of businessTree
 * @param {*} action action performed
 */
export function businessTree(
  state: any = initialBusinessTreeState,
  action: any
) {
  switch (action.type) {
    case BUSINESSTREE.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        name: action.payload.name
      });
    case BUSINESSTREE.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        payload: action.payload.response
      });
    // case BUSINESSTREE.FAILURE:
    //   return Object.assign({}, state, {
    //     isFetching: false
    //   });
    default:
      return state;
  }
}
