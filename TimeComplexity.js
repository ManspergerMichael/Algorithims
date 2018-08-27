//determine the purpose of the function then consider big O time complexity
function mystery(arr){
    //The first loop finds the index that contains the lowest value in the array
    //temp variable set to 0
    var temp = 0;
    //start a second element of the array continue to end
    for(var i=1; i<arr.length; i++){
        //if value of arr[i] is less then the value of arr[temp]
        if(arr[i] < arr[temp]){
            //set temp to index value of arr[i]
            temp = i;
        }
    }
    //set result value to value of array index of temp
    //the lowest value in the array
    var result = arr[temp];
    //loop through the array from the temp index 
    //to the second to last index of the array
    //increment the temp index by one
    for(temp; temp<arr.length-1; temp++){
        //shift values of the array
        arr[temp] = arr[temp+1];
    }
    //remove last value of the array as it is probably duplicate data
    arr.pop();
    //return minimum value of the array
    return result;
}
//Conclusion: This function finds the lowest value of the 
//array and removes and returns it.

//worst case scenario for time complexity is the lowest 
//value in the array would be at the bigining of the array
//the algorithim would have to loop through the entire array twice
// this is O(2N)
