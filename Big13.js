/**
 * The big 13 algorithims taught at Coding Dojo 
 */


//print all numbers from 1 to 255
function printTo255(){
    for(var i = 1; i<256;i++){
        console.log(i);
    }
}
//printTo255();

//print all odd intergers between 1-255
function printOdds(){
    for(var i = 1;i<256;i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}
//printOdds();

//print 0 - 255 and the sum of all counted ints
function printAndSum(){
    var sum = 0;
    for(var i = 0; i<256; i++){
        console.log(i);
        sum += i;
        console.log("The sum is: "+sum);
    }
}
//printAndSum();

//iterate through array
function printArray(arr){
    for(var i = 0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
//printArray([1,2,3,4,5]);

//find max element of array
function printMax(arr){
    var max = arr[0];
    for(var i = 0; i<arr.length;i++){
        if( arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max);
}
//printMax([1,2,3,4,5]);

//print average of array
function printAvg(arr){
    var sum = 0;
    for(var i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    var avg = sum / arr.length;
    return avg;
}
//console.log(printAvg([1,2,3,4,5]));

//create an array of all odd integers between 1-255
function oddArray(){
    var arr = [];
    for(var i = 1; i<256;i++){
        if(i % 2 != 0){
            arr.push(i);
        }
    }
    return arr;
}
//var arr = oddArray();

//square each value of a given array
function squareArray(arr){
    for(var i = 0; i<arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
//console.log(squareArray([1,2,3,4,5]));

//given an array of ints and a value Y return count of all ints that are greater than Y
function returnValGreaterThanY(arr, Y){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > Y){
            count ++;
        }
    }
    return count;
}
//console.log(returnValGreaterThanY([1,2,3,4,5,6,7,8],4));

//change all negitive numbers in an array to 0
function zeroOutNeg(arr){
    for(var i = 0;i<arr.length;i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}
//console.log(zeroOutNeg([-1,2,3-4,-5,6,7,8,-9]));

//find the min, max, and average of an array
function MinMaxAvg(arr){
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    for(var i = 0; i<arr.length; i++){
        sum += arr[i];
        if(min > arr[i]){
            min = arr[i];
        }
        if(max < arr[i]){
            max = arr[i];
        }
    }
    avg = sum / arr.length;
    console.log(min);
    console.log(max);
    console.log(avg);
}
//MinMaxAvg([1,2,3,4,5,6,7,8,9]);

//shift all array values to the left by one index. Drop the first val and leave 0 at the end
function shiftVals(arr){
    for(var i = 0; i<arr.length; i++){
        if(i == arr.length){
            arr[i] = 0;
        }
        else{
            arr[i] = arr[i+1];
        }
    }
    return arr;
}
//console.log(shiftVals([1,2,3,4,5,6,7,8,9]));

//given an array replace each negitive value with the string "Dojo"
function swapNegs(arr){
    
}

