/**
 * https://leetcode.com/problems/merge-k-sorted-lists
 * Time O(N*log(K)) | Space O(N)
 * N: total number of elements in all linked lists
 * K: number of linked lists
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
    return mergeSort(lists, 0, lists.length - 1);
}

const mergeSort = function (lists, left, right) {
    if (!lists.length) {
        return null;
    } else if (left === right) {
        return lists[left];
    }

    const mid = Math.floor((left + right) / 2);
    let leftList = mergeSort(lists, left, mid);
    let rightList = mergeSort(lists, mid + 1, right);

    let currentNode = new ListNode();
    const sortedList = currentNode;

    while (leftList && rightList) {
        if (leftList.val <= rightList.val) {
            currentNode.next = leftList;
            leftList = leftList.next;
        } else {
            currentNode.next = rightList;
            rightList = rightList.next;
        }

        currentNode = currentNode.next;
    }

    currentNode.next = leftList || rightList;
    return sortedList.next;
}
