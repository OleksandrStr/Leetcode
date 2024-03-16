/**
 * https://leetcode.com/problems/binary-search
 * Time O(log(N)) | Space O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // or left + Math.floor((right - left) / 2);

        if (target > nums[mid]) {
            left = mid + 1;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}