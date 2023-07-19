import merge from "../utils/merge";

const mergeSort = function (array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  let middle: number = Math.round(array.length / 2);
  let left: number[] = mergeSort(array.splice(0, middle));
  let right: number[] = mergeSort(array.splice(middle));

  return merge(left, right);
};
