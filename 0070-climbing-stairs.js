/**
 * https://leetcode.com/problems/climbing-stairs
 * Time O(N) | Space O(1)
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
    let fib = 1;
    let prevFib = 1;

    for (let i = 2; i <= n; i++) {
        let temp = fib;
        fib = fib + prevFib;
        prevFib = temp;
    }

    return fib;
}
