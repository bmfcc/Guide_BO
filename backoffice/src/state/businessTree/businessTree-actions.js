// @flow
/** @module BusinessTree-Actions */
import type { BusinessTree } from "./businessTree-types";
import type { Errors } from "../shared/types";
import { createRequestTypes, action } from "../utils/actionUtils";
/** Request of type BUSINESSTREE to fecth all */
export const BUSINESSTREE = createRequestTypes("BUSINESSTREE");

/** Fetch business tree request actions: request, success, failure
 * @function
 * @param {BusinessTree|Errors} response response returned from the request, which can either be data or error
 */
export const businessTree = {
  request: () => action(BUSINESSTREE.REQUEST),
  success: (response: BusinessTree) =>
    action(BUSINESSTREE.SUCCESS, { response }),
  failure: (error: Errors) => action(BUSINESSTREE.FAILURE, { error })
};
