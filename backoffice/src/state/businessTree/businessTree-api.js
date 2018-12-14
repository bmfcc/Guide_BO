/** @module BusinessTree-API */

import { BUSINESSTREE } from "./businessTree-mocks";
import { get } from "../utils/apiUtils";

/** Controller, name of the API */
const controller = "BusinessTreeServiceAPI";

/**
 * API services to fetch business tree
 * @function
 *
 */
export const fetchBusinessTree = () =>
  get(`${controller}/BUSINESSTREE`, BUSINESSTREE);
