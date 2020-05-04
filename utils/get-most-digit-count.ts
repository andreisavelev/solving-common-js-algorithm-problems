import getDigitCount from './get-digit-count';

const getMostDigitCount = function(nums: number[]): number {
    let maxDigits: number = 0;

    for (let i: number = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, getDigitCount(nums[i]));
    }

    return maxDigits;
}