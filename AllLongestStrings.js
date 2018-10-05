//this function takes in a array of strings.
//it finds the length of the largest string and creates a new array
//of strings of the same length as the max length string.
function allLongestStrings(inputArray) {
    var max = 0;
    var returnArray = []; 
    //find max length
    for(var i = 0; i<inputArray.length;i++){
        //if a string is longer than the found max
        if(inputArray[i].length > max){
            //empty return array
            returnArray.length = 0;
            //push element to return array
            returnArray.push(inputArray[i]);
            //set new max length
            max = inputArray[i].length;
            
        }
        //if found element is the same length as the found max.
        else if(inputArray[i].length == max){
            returnArray.push(inputArray[i]);
        }
        
    }
    
    return returnArray;
}