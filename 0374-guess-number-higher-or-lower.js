/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return         -1 if num is higher than the picked number
 *                  1 if num is lower than the picked number
 *                  otherwise return 0
 * var guess = function(num) {}
 */

/**
 * https://leetcode.com/problems/guess-number-higher-or-lower/description
 * Time O(log(N)) | Space O(1)
 * @param {number} num
 * @return {number}
 */
const guessNumber = function (num) {
    let left = 1;
    let right = num;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const guessValue = guess(mid);

        if (guessValue < 0) {
            right = mid - 1;
        } else if (guessValue > 0) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
}