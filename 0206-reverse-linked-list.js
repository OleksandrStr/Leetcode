/**
 * https://leetcode.com/problems/reverse-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Iterative
 * Time O(N) | Space O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
    let current = head;
    let prev = null;
    let next = null;

    while (current) {
        next = current.next;
        current.next = prev;
        
        prev = current;
        current = next;
    }

    return prev;
}
