import getMostDigitCount from '../utils/get-most-digit-count';
import getDigit from '../utils/get-digit';

/**
 * The Radix Sort function. Full description is in the its body.
 * @param nums {number[]}
 */
const radixSort = function (nums: number[]): number[] {

    // figure out how many digits the largest number has
    let maxDisgits: number =  getMostDigitCount(nums);
    // will contans an array of array of numbers
    let buckets: Array<Array<number>>;

    // will contains a digit on the given position
    let digit: number;

    // loop from k = 0 up to this largest number of digits
    for (let k = 0; k < maxDisgits; k++) {

        // Create buckets for each digits (0 to 9)
        buckets = Array.from({length: 10}, () => []);

        // place each number in the corresponding bucket based on its k-th digit
        for (let i = 0; i < nums.length; i++) {
            digit = getDigit(nums[i], k);
            buckets[digit].push(nums[i])
        }

        // replace our existing array with values in our buckets, starting from 0 and going up to 9
        nums = [].concat(...buckets);
    }

    return nums;
};