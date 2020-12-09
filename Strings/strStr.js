/*
Find the needle in the haystack. Or find the substring in the string;
*/

var strStr = function(haystack, needle) {
    //if needle is empty return 0
    if(needle.length == 0)
        {
            return 0;
        }
    
    for(var i = 0; i < haystack.length; i++)
        {
            //start substring at i and end at position =(i + the length of the needle string) 
            if(haystack.substring(i,i + needle.length) == needle)
                {
                    return i;
                }
        }
    return -1;
};