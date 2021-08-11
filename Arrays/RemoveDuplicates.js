//remove duplicates from sorted array in place


var removeDuplicates = function(nums) {
    for(var i = 0; i < nums.length; i++)
        {
            if(nums[i] == nums[i+1])
            {
            /* The processed section of the array is held in place at i.
                while nums[i] == nums[i+1] the nested loop will continue to shift 
                the array.
            */
            while(nums[i] == nums[i+1])
                {
                    for(var j = i+1; j < nums.length; j++)
                    {
                        nums[j] = nums[j+1];
                    }
                    nums.pop();
                }
            }
        }
    console.log(nums.length);
    return nums.length;
};
var nums = [1,1,2];
var nums2 = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums));