/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array
 * Time O(N) | Space O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, nums.length - k);
}

const quickSelect = function(array, start, end, k) {
    let pivot = array[end];
    let left = start;

    for (let i = left; i < end; i++) {
        if (array[i] < pivot) {
            [array[left], array[i]] = [array[i], array[left]];
            left++;
        }
    }

    [array[end], array[left]] = [array[left], array[end]];

    if (k < left) {
        return quickSelect(array, start, left - 1, k);
    } else if (k > left) {
        return quickSelect(array, left + 1, end, k);
    }  else {
        return array[left];
    }
}
