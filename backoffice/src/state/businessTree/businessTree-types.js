// @flow
/** @module BusinessTree-Types */
import type { NetworkServiceAreas } from "../networkServiceArea/networkServiceArea-types";

/** Business tree object type, which is basically a object with network service areas */
export type BusinessTree = {
  NetworkServiceAreas: NetworkServiceAreas
};
