
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