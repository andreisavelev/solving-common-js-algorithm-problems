/**
 * Merge two sorted arrays into one
 * @param arr1 {number[]}
 * @param arr2 {number[]}
 * @returns {number[]}
 */
const merge = function (arr1: number[], arr2: number[]): number[] {
  // Create an emty array
  let result = [];
  // First array pointer
  let i = 0;
  // Second array pointer
  let j = 0;

  // while there are still values we haven't looked at...
  while (i < arr1.length && j < arr1.length) {
    // if the value in the first array is smaller then the value in the second array
    // push the value in the first array into result move on to the next value in the first array
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;

      // if the value in the second array is larger then the value in the second array,
      // push the value in the second array into the result
      // and move on to the next value in the second array
    } else {
      result.push(j);
      j++;
    }
  }

  // once we exhaust one array push all remainig values from the other array
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  // Return the result of merging
  return result;
};

export default merge;
