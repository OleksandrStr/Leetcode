/**
 * https://leetcode.com/problems/implement-stack-using-queues
 * Time O(N^2) | Space O(N)
 */

const MyStack = function() {
    this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    for (let i = 0; i < this.queue.length - 1; i++) {
        this.queue.push(this.queue.shift());
    }

    return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    const lastElement = this.pop();
    this.queue.push(lastElement);

    return lastElement;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};
