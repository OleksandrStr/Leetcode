/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Time O(N) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

