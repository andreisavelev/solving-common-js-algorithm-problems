
/**
 * Remove duplicates from a sorted array nums in-place 
 * such that duplicates appeared at most twice and return the new length
 * @param nums {number[]}
 * @returns {number}
 */
const removeDuplicates = function(nums: number[]): number {
    let counter = 0;
    // if we have to no change the given array then just crate a new copy
    // const newNums = [...nums];
    
    for (let i = 0; i < nums.length; i++) {
        // Found a pair
        if (nums[i] === nums[i + 1]) {
            
            // Let's leave the found pair behinde and 
            // go forward incrementing the counter every time when we get the same number
            for (let j = i + 2; j < nums.length; j++ ) {
                if (nums[j] === nums[i]) {
                    counter += 1;
                }
            }
            
            // remove all duplicates since the last number of the fist pair
            nums.splice(i + 1, counter);
        }
        
        counter = 0;
    }
    
    return nums.length;
};

/**
 * Accepts only one single charcter and check it for a numeric or a letter
 * @param char {string} only one character
 * @returns {boolean}
 */
const isAlphaNumeric = function (char: string): boolean {
    const code = char.charCodeAt(0);
    let result = true

    if (
        !(code > 47 && code < 58) && // numeric [0 - 9]
        !(code > 64 && code < 91) && // upper alpha [A - Z]
        !(code > 96 && code < 123) // lower alpha [a - z]
    ) {
        result = false;
    }

    return result;
};

/**
 * Function that takes a string and returns a count of each characters in the string.
 * The result should be an object that contains characters as a key and a count of it's characters as a number
 * Non-letter/number characters should be omitted
 * 
 * @param input {string}
 * @returns {object}
 */
const charactersCounter = function (input: string): {[key: string]: number} {
    // Create a container/counter
    const caractersContainer = {};
    
    // Simples way is the regexp but it might works slowly then charCodeAt checking
    // const letterNumber = /[a-z0-9]/;

    // Do some logic only if the input is not empty
    if (input.length) {
        for  (let char of input) {
            char = char.toLowerCase();
    
            // Do something only wnen the character is a letter/number
            // Using function with charCodeAt checking under the hood
            if (isAlphaNumeric(char)) {
                if (!caractersContainer.hasOwnProperty(char)) {
                    caractersContainer[char] = 1;
                } else {
                    caractersContainer[char]++
                }
            }
        }
    }

    // Return result
    return caractersContainer;
};

/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. 
 * You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices: number[]): number {
    let result = 0;
    
   for (let i = 0; i < prices.length; i++) {
       if (prices[i] > prices[i - 1]) {
            result += prices[i] - prices[i - 1];
        }
   }
    
    return result;
};

/**
 * This function determines if the second string is anagram of the first
 * @param str1 {string}
 * @param str2 {string}
 * @returns {boolean}
 */
const validAnagram = function (str1: string, str2: string): boolean {
    let strCounter1 = {};
    let strCounter2 = {};
    
    if (str1.length !== str2.length) {
        return false;
    }
    
    for (let char of str1) {
        strCounter1[char] = (strCounter1[char] || 0) + 1;
    }
    
    for (let char of str2) {
        strCounter2[char] = (strCounter2[char] || 0) + 1;
    }
    
    for (let key in strCounter1) {
        if (!(key in strCounter2)) {
            return false;
        }
        
        if (strCounter1[key] !== strCounter2[key]) {
            return false;
        }
    }
    
    return true;
}

/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative. 
 * Time complexity is O(n);
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums: number[], k: number): void {
    let arrEnd = nums.splice(nums.length - k);
    let arrStart = nums.splice(0);
    
    for (let i = 0; i < arrEnd.length; i++) {
        nums.push(arrEnd[i])
    }
    
    nums.push(...arrStart);
};

/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * Timne complexity is O(lig n);
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate2 = function(nums: number[], k: number): void {
    let len = nums.length - k;
    
    if (k > nums.length) {
        k = k - nums.length;
        len = nums.length - k;
    }
    
    for (let i = 0; i < len; i++) {
        nums.push(nums[i]);
    }
    
    nums.splice(0, len);
};

/**
 * Given an array of integers, find if the array contains any duplicates.
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums: number[]): boolean {
    let set = new Set(nums);
    
    return set.size !== nums.length
};