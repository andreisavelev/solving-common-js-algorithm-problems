import pivot from "../utils/pivot";

/**
 * QuickSort
 * - Call the pivot helper on the accepted array
 * - When the helper returns to you the updated pivot index,
 *   recursively call the pivot helper on the subarray on the left of the index
 *   and the subarray on the right on the index
 * - Your base case occurs when you consider a subarray with less then 2 elements
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 * @returns {number[]}
 */
const quickSort = function (
  arr: number[],
  left = 0,
  right = arr.length - 1
): number[] {
  let pivotIndex: number;

  if (left < right) {
    pivotIndex = pivot(arr);

    // left subarray
    quickSort(arr, left, pivotIndex - 1);

    // right subarray
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
};
