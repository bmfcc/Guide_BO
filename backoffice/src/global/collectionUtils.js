/** @module CollectionUtils */

/**
 * Helper function: Filter a collection
 * @param {*} collection Collection
 * @param {*} func function to filter the collection
 */
export const filter = function(collection, func) {
  let newCollection = {};
  for (let key in collection) {
    if (func(collection[key])) {
      newCollection[key] = Object.assign({}, collection[key]);
    }
  }
  return newCollection;
};

/**
 * Helper function: Check if a value exists in a collection
 * @param {*} collection Collection
 * @param {*} func value to verify
 */
export const contains = function(collection, func) {
  for (let key in collection) {
    if (func(collection[key])) return true;
  }
  return false;
};
