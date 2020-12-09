/* find the longest common prefex in the aray of strings 
almost done. Error when array of strings is less than 3 */

var longestCommonPrefix = function(strs) {
    if(strs.length == 0 || strs[0] == "")
        {
            return "";
        }
    for(var i = 0; i < strs[0].length; i++)
        {
            var a = strs[0][i];
            console.log(a);
            if(strs[1] === undefined)
                {
                    return a;
                }
            for(var j = 1; j < strs.length; j++)
                {
                    if(i === strs[j].length || strs[j][i] !== a)
                        {
                            return strs[0].substring(0,i);
                        }
                }
        }
};