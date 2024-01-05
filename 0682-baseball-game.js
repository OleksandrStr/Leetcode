/**
 * https://leetcode.com/problems/baseball-game/
 * Time O(N) | Space O(N)
 * @param {string[]} operations
 * @return {number}
 */
const calPoints = function (operations) {
    const scores = [];
    let total = 0;
    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case "+":
                const sum = scores[scores.length - 1] + scores[scores.length - 2];
                scores.push(sum);
                total += sum;
                break;
            case "D":
                const double = scores[scores.length - 1] * 2;
                scores.push(double);
                total += double;
                break;
            case "C":
                const removed = scores.pop();
                total -= removed;
                break;
            default:
                const num = +operations[i];
                scores.push(num);
                total += num;
        }
    }
    return total;
}
