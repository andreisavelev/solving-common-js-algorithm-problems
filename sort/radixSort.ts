import getMostDigitCount from "../utils/get-most-digit-count";
import getDigit from "../utils/get-digit";

/**
 * The Radix Sort function. Full description is in the its body.
 * @param numbers {number[]}
 */
const radixSort = function (numbers: number[]): number[][] {
  // figure out how many digits the largest number has
  let maxDigits: number = getMostDigitCount(numbers);
  // will contains an array of array of numbers
  let buckets: number[][];
  let container: number[][] = [];
  let result: number[][] = [];

  // will contains a digit on the given position
  let digit: number;

  // loop from k = 0 up to this largest number of digits
  for (let k = 0; k < maxDigits; k++) {
    // Create buckets for each digits (0 to 9)
    buckets = Array.from({ length: 10 }, () => []);

    // place each number in the corresponding bucket based on its k-th digit
    for (const element of numbers) {
      digit = getDigit(element, k);
      buckets[digit].push(element);
    }

    // replace our existing array with values in our buckets, starting from 0 and going up to 9
    result = buckets;
  }

  return result;
};
