import merge from './utils/merge';

type ObjectCounter = {
    [name: string]: number
}

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
    const caractersContainer: ObjectCounter = {};
    
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
    let strCounter1: ObjectCounter = {};
    let strCounter2: ObjectCounter = {};
    
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
 * Another function to validate an anagram
 * @param stringA 
 * @param stringB 
 */
const validAnagram2 = function(stringA: string, stringB: string): boolean {
    const sortedStringA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    const sortedStringB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

    return sortedStringA === sortedStringB;
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

/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums: number[]): number {
    const counter: ObjectCounter = {};
    let result: string = '';
    
    for (let item of nums) {
        counter[item] = (counter[item] || 0) + 1;
    }
    
    
    for (let key in counter) {
        if (counter.hasOwnProperty(key)) {
            if (counter[key] === 1) {
                result = key;
            }
        }
    }
    
    return +result;
};

/**
 * Should return the first pair wich sum as is zero as an array or return undefind.
 * @param arr {number[]}
 */
const sumZero = function(arr: number[]): [number, number] | undefined {
    let left = 0;
    let right = arr.length -1;
    let sum: number;

    while (left < right) {
        sum = arr[left] - arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0){
            right--;
        } else {
            left--;
        }
    }

    return undefined;
}

/**
 * Function accepts a sorted array and count unique values in the array.
 * @param array {number[]}
 * @returns {number}
 */
const countUnicValues = function (array: number[]): number {
    let first = 0;

    if (!array.length) {
        return 0;
    }

    for (let second = 1; second < array.length; second++) {
        if (array[first] !== array[second]) {
            first++;
            array[first] = array[second];
        }
    }

    return first + 1;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sorting 
////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Swap items in the array
 * @param array {array}
 * @param indexFrom {number}
 * @param indexTo {number}
 * @returns {array}
 */
const swap = function (array: Array<any>, indexFrom: number, indexTo: number): void {
    [
        array[indexFrom], 
        array[indexTo]
    ] = [
        array[indexTo], 
        array[indexFrom]
    ];
};


/**
 * Bubble sorting - a sorting algorithm where the largest value "bubble" to the top
 * @param collection {number[]}
 * @returns {number[]}
 */
const bubbleSorting = function<T> (collection: Array<T>) : Array<T> {
    let noSwap: boolean;
    
    // start looping with a variable called 'i' the end of the array towards the beginning.
    for (let i = collection.length; i > 0; i--) {
        noSwap = true;

        // start an inner loop with a variable called j from the beginning;
        for (let j = 0; j < collection.length; j++) {

            // if arr[j] is greater then arr[j + 1] swap those two values
            if (collection[j] > collection[j + 1]) {
                swap(collection, j, j+1);
                noSwap = false;
            }
        }

        if (noSwap) {
            break;
        }
    }

    return collection;
}

/**
 * Similar to bubble sorting, but instad of first placing large values into sorted position, it places
 * small values into sorted posotion
 * @param collection {array}
 */
const selectionSorting = function<T> (collection: T[]): T[] {
    
    for (let i = 0; i < collection.length; i++) {
        let smaller = i;

        for (let j = i + 1; j < collection.length; j ++) {
            if (collection[smaller] > collection[j]) {
                smaller = j;
            }
        }

        // skip sorted values
        if (smaller !== i) {
            swap(collection, i, smaller);
        }
    }

    return collection;
}

/**
 * Build up the sort by gradually creating a larger left half with is always sorted.
 * @param collection {array}
 */
const insertionSort = function<T> (collection: T[]): T[] {
    let currentValue: T;
    let j: number;
    
    for (let i = 1; i < collection.length; i++) {
        currentValue = collection[i];

        for (j = i - 1; j >= 0 && currentValue < collection[j]; j--) {
            collection[j + 1] = collection[j];
        }

        collection[j + 1] = currentValue;
    }

    return collection;
};

/**
 * Array chunking
 */
function arrayChanks(nums: number[], size: number) {
    let chunked = [];
    let last;

    for (let element of nums) {
        last = chunked[chunked.length - 1];

        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }

    return chunked;
}