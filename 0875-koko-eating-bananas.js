/**
 * https://leetcode.com/problems/koko-eating-bananas
 * Time O(Nlog(M)) (M: max pile) | Space O(1)
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function (piles, h) {
    const getEatingHours = function (speed, piles) {
        return piles.reduce((acc, pileSize) => acc + Math.ceil(pileSize / speed), 0);
    }

    let left = 1;
    let right = Math.max(...piles);

    while (left !== right) {
        let mid = Math.floor((left + right) / 2);
        const currentEatingHours = getEatingHours(mid, piles);

        if (currentEatingHours <= h) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};