// @flow
/** @module BusinessTree-Sagas */
import { call, put, takeLatest } from "redux-saga/effects";
import { businessTree, BUSINESSTREE } from "./businessTree-actions";
import * as api from "./businessTree-api";

/**
 * Saga of the business tree, to call the API whenever it's performed a request and add it to success, otherwise add it to error.
 */
export function* getBusinessTree() {
  try {
    const o = yield call(api.fetchBusinessTree);
    yield put(businessTree.success(o));
  } catch (e) {
    yield put(businessTree.failure(e.error));
  }
}
/**
 * Watch for the saga
 */
export default function* watchBusinessTreeSagas(): Generator<*, *, *> {
  yield takeLatest(BUSINESSTREE.REQUEST, getBusinessTree);
}
