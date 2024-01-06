/**
 * https://leetcode.com/problems/valid-parentheses/
 * Time O(N) | Space O(N)
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    let stack = [];

    const pairs = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    for (let i = 0; i < s.length; i++) {
        if (pairs[s[i]]) {
            stack.push(s[i]);
        } else {
            let top = stack.pop();
            if (pairs[top] !== s[i]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

