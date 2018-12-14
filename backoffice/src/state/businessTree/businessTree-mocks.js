// @flow
/** @module BusinessTree-Mocks */
import type { BusinessTree } from "./businessTree-types";

/** Mock values for a business tree */
export const BUSINESSTREE: BusinessTree = {
  NetworkServiceAreas: [
    {
      Id: 5,
      Name: "Network Service Area",
      DistributionAreas: [
        {
          Id: 6,
          Name: "South West",
          Teams: [
            {
              Id: 7,
              Name: "Team BBBC1"
            }
          ]
        }
      ]
    }
  ]
};
