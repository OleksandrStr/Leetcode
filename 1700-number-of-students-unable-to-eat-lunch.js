/**
 * https://leetcode.com/problems/number-of-students-unable-to-eat-lunch
 */

/**
 * Solution 1
 * Time O(N^2) | Space O(1)
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
const countStudents = function (students, sandwiches) {
    let studentsMoved = 0;

    while (studentsMoved !== students.length) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
            studentsMoved = 0;
        } else {
            students.push(students.shift());
            studentsMoved++;
        }
    }

    return students.length;
}
