/**
 * https://leetcode.com/problems/design-browser-history
 * Time O(1) | Space O(N)
 */

class BrowserHistory {
    constructor(homepage) {
        this.history = [homepage];
        this.currentIndex = 0;
        this.length = 0;
    }

    visit(url) {
        this.currentIndex++;

        if (this.currentIndex === this.history.length) {
            this.history.push(url);
        } else {
            this.history[this.currentIndex] = url;
        }

        this.length = this.currentIndex;
    }

    back(steps) {
        this.currentIndex = Math.max(0, this.currentIndex - steps);
        return this.history[this.currentIndex];
    }

    forward(steps) {
        this.currentIndex = Math.min(this.length, this.currentIndex + steps);
        return this.history[this.currentIndex];
    }
}
