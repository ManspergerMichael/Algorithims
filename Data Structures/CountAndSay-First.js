/**
 * @param {number} n
 * @return {string}
 */

 /**
  * My first attempt at the problem,
  * I mis-read the instructions.
  * I'm keeping this as an example of javaScript dictionaries.
  */

var countAndSayFirst = function(n) {
    if(n === 1)
        {
            return "1";
        }
    var dict = {};
    var arr = (""+n).split("");
    var result = 0;
    for(var i = 0; i < arr.length; i++)
        {
            if( arr[i] in dict)
            {
                dict[arr[i]] += 1;
            }
            else
            {
                dict[arr[i]] = 1;
            }
        }
    for(var key in dict)
        {
            console.log("The key is "+key+" The value is " + dict[key]);
            result *= 10;
            result += dict[key];
            result += key;
        }
    return result.toString();
};