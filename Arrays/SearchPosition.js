/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var position = 0;
    for(var i = 0; i < nums.length; i++)
        {
            /*Things I would include:
            fast fail for empty array
            */

            if(nums[i] == target)
                {
                    return i;
                }
            if(nums[i - 1] < target && nums[i] > target)
                {
                    position = i;
                }
            if(i == nums.length -1 && target > nums[i])
                {
                    return i + 1;
                }
            
        }
    return position;
    
};