/**
 * https://leetcode.com/problems/concatenation-of-array/
 * Time O(N) | Space O(N)
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = function (nums) {
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[i];
        ans[i + nums.length] = nums[i]
    }

    return ans;
}
