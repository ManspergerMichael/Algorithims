/**
 * find the length of the last word in the given string
 * @param {string} s
 * @return {number}
 * 
 * Not finished
 */
var lengthOfLastWord = function(s) {
    var arr = s.split(" ");
    for(var i = arr.length - 1; i > -1; i--)
        {
            if(arr[i].length > 0){
                return arr[i].length;
            }
        }
    return 0;
    
};