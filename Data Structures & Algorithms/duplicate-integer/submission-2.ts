class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let noRepeats = new Set([...nums]);
        console.log(noRepeats)
        return noRepeats.size !== nums.length 
    }
}
