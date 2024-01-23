/**
 * https://leetcode.com/problems/sort-an-array
 * Time O(N*log(N)) | Space O(N)
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function (nums) {
    return mergeSort(nums, 0, nums.length - 1);
}

const mergeSort = function (arr, left, right) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }

    return arr;
}

const merge = function (arr, left, mid, right) {
    const arrLeft = arr.slice(left, mid + 1);
    const arrRight = arr.slice(mid + 1, right + 1);

    let i = 0;
    let j = 0;
    let k = left;

    while (i < arrLeft.length && j < arrRight.length) {
        if (arrLeft[i] <= arrRight[j]) {
            arr[k] = arrLeft[i];
            i++;
        } else {
            arr[k] = arrRight[j];
            j++;
        }

        k++;
    }

    while (i < arrLeft.length) {
        arr[k] = arrLeft[i];
        i++;
        k++;
    }

    while (j < arrRight.length) {
        arr[k] = arrRight[j];
        j++;
        k++;
    }
}
