/**
 * https://leetcode.com/problems/design-linked-list
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

const MyLinkedList = function () {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function (index) {
    if (index > this.length - 1) {
        return null;
    }

    let currentIndex = 0;
    let currentNode = this.head;

    while (currentIndex !== index) {
        currentNode = currentNode.next;
        currentIndex++;
    }


    return currentNode;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    const nodeAtIndex = this.getNode(index);
    return nodeAtIndex ? nodeAtIndex.val : -1;
};


/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const newNode = new Node(val);

    if (this.length) {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    } else {
        this.head = newNode;
        this.tail = newNode;
    }

    this.length++;
};


/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const newNode = new Node(val);

    if (this.length) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    } else {
        this.tail = newNode;
        this.head = newNode;
    }

    this.length++;
};


/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index === 0) {
        this.addAtHead(val);
    } else if (index === this.length) {
        this.addAtTail(val);
    } else if (index < this.length) {
        const newNode = new Node(val);
        const indexNode = this.getNode(index);

        newNode.next = indexNode;
        newNode.prev = indexNode.prev;
        indexNode.prev.next = newNode;
        indexNode.prev = newNode;

        this.length++;
    }
};


/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    const indexNode = this.getNode(index);

    if (!indexNode) {
        return null;
    }

    if (indexNode.prev) {
        indexNode.prev.next = indexNode.next;
    } else {
        this.head = indexNode.next;
    }

    if (indexNode.next) {
        indexNode.next.prev = indexNode.prev;
    } else {
        this.tail = indexNode.prev;
    }

    this.length--;
};
