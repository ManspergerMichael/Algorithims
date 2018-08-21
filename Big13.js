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

