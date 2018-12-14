/** @module ArrayUtils */

/**
 * Helper function: Check if a value exists in an array
 * @param {*} arr array
 * @param {*} comparator value to comparate
 */
export const contains = (arr, comparator) => {
  for (let i = 0; i < arr.length; ++i) {
    if (comparator(arr[i])) {
      return true;
    }
  }
  return false;
};

/**
 * Helper function: Filter the array by a value
 * @param {*} arr array
 * @param {*} comparator value to filter
 */
export const filter = (arr, comparator) => {
  let acc = [];
  for (let i = 0; i < arr; ++i) {
    if (comparator(arr[i])) {
      acc.push(arr[i]);
    }
  }
  return acc;
};

export const forEach = (collection, itemIteration) => {
  for (let key in collection) {
    itemIteration(Object.assign({}, collection[key]));
  }
};
