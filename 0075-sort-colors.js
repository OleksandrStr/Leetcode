/**
 * https://leetcode.com/problems/sort-colors
 */

/**
 * Solution 1: two-pass
 * Time O(N) | Space O(N)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
    const counts = [0, 0, 0];

    for (let i = 0; i < nums.length; i++) {
        counts[nums[i]] += 1;
    }

    let i = 0;
    for (let n = 0; n < counts.length; n++) {
        for (let j = 0; j < counts[n]; j++) {
            nums[i] = n;
            i++;
        }
    }
}

/**
 * Solution 2: one-pass
 * Time O(N) | Space O(1)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    for (let i = 0; i <= right; i++) {
        if (nums[i] === 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;

        } else if (nums[i] === 2) {
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
            i--
        }
    }
};
