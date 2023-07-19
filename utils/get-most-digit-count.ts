import getDigitCount from "./get-digit-count";

/**
 * Get the max digit count of the given @param numbers
 * @param numbers {number[]}
 */
const getMostDigitCount = function (numbers: number[]): number {
  let maxDigits: number = 0;

  for (const element of numbers) {
    maxDigits = Math.max(maxDigits, getDigitCount(element));
  }

  return maxDigits;
};

export default getMostDigitCount;
