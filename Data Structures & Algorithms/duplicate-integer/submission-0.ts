class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let uniqueList: number[] = [];
        // loop over each elememt
        for (let i = 0; i < nums.length; i++) {
            let currentNumber = nums[i];
            // check each element with other elements
            if (uniqueList.includes(currentNumber)) {
                return true
            }
            uniqueList.push(currentNumber)
            
        }
        return false
    }
}
