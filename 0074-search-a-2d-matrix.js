/**
 * https://leetcode.com/problems/search-a-2d-matrix
 * Time O(log(M * N)) | Space O(1)
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
    const rowLength = matrix[0].length;
    let left = 0;
    let right = rowLength * matrix.length - 1;

    while (left <= right) {
        const midIndex = Math.floor((left + right) / 2);
        const rowIndex = Math.floor(midIndex / rowLength);
        const columnIndex = midIndex % rowLength;
        const midValue = matrix[rowIndex][columnIndex];

        if (target > midValue) {
            left = midIndex + 1;
        } else if (target < midValue) {
            right = midIndex - 1;
        } else {
            return true;
        }
    }

    return false;
}
