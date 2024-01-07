/**
 * https://leetcode.com/problems/min-stack
 * Time O(1) | Space O(N)
 */
const MinStack = function () {
    this.values = [];
    this.minValues = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.values.push(val);

    if (val <= this.getMin() || !this.minValues.length) {
        this.minValues.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const removedVal = this.values.pop();

    if (removedVal === this.getMin()) {
        this.minValues.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.values[this.values.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minValues[this.minValues.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
