
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
    const letterNumber = /[a-z]|[\d]/;
    let character = '';

    for  (let i = 0; i < input.length; i++) {
        character = input[i].toLowerCase();

        // Do something only wnen the character is a letter/number
        if (letterNumber.test(character)) {
            if (!caractersContainer.hasOwnProperty(character)) {
                caractersContainer[character] = 1;
            } else {
                caractersContainer[character]++
            }
        }
    }

    return caractersContainer;
}