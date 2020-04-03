
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