/**
 * https://leetcode.com/problems/design-browser-history
 * Time O(N) | Space O(N)
 */

/**
 * @param {number} val
 */
const Node = function (val) {
    this.val = val;
    this.next = null;
    this.prev = null;
}

/**
 * @param {string} homepage
 */
const BrowserHistory = function (homepage) {
    this.currentNode = new Node(homepage);
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    const newNode = new Node(url);

    this.currentNode.next = newNode;
    newNode.prev = this.currentNode;
    this.currentNode = newNode;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    while (steps && this.currentNode.prev) {
        this.currentNode = this.currentNode.prev;
        steps--;
    }

    return this.currentNode.val;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    while (steps && this.currentNode.next) {
        this.currentNode = this.currentNode.next;
        steps--;
    }

    return this.currentNode.val;
};
