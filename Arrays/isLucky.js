/*
This function takes in a number and determines if the first half of the digits
is equal to the second half. 
Return True if so
*/
function isLucky(n) {
    //create an array and split the digits of the given number into elements
    var arr = Array.from(n.toString()).map(Number);
    var sum1 = 0;
    var sum2 = 0;
    //loop through array
    for(var i =0; i < arr.length; i++){
        //if i is less than the midpoint of the array
        //add element to the first sum
        if( i < arr.length/2){
            sum1 += arr[i];
        }
        //if i is greater than the array midpoint then add element to the second sum
        else{
            sum2 += arr[i];
        }
    }
    //if the two sums are equal then return true
    if(sum1 === sum2){
        return true;
    }
    //else return false
    else{
        return false;
    }
    
}
