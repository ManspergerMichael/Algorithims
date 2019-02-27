//remove duplicates from sorted array in place
var nums = [1,1,2];

var removeDuplicates = function(nums) {
    for(var i = 1; i < nums.length; i++)
        {
            if(nums[i] == nums[i-1])
            {
                
                for(var j = i; i < nums.length; j++)
                    {
                        nums[j] = nums[j-1];
                    }
                nums.pop();
            }
        }
    console.log(nums.length);
    return nums.length;
};
console.log(removeDuplicates(nums));