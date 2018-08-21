//replace each positive number with "Embiggens"
function makeBig(arr){
    if(arr.length <=0){
        return "Error"
    }
    for(var i = 0; i<arr.length;i++){
        if(arr[i] > 0){
            arr[i] = "Embiggens";
        }
    }
    return arr;
}
//console.log(makeBig([-1,2,-3,4,-5]));

//replace each string in a array with the length of the string.
function lengths(arr){
    for(var i = 0; i<arr.length; i++){
        arr[i] = arr[i].length;
    }
    return arr;
}
var strArr = ['hello','my','giant','blue','cat'];
//console.log(lengths(strArr));

//take an array and print the sum of the length of
//the first element of the array and the length of the array
function firstPlusLength(arr){
    var firstElementVal;
    if(typeof arr[0] === 'string'){
        firstElementVal = arr[0].length;
    }
    if(typeof arr[0] === 'boolean'){
        if(arr[0] == false){
            firstElementVal = 0;
        }
        else{
            firstElementVal = 1;
        }
    }
    if(typeof arr[0] === 'number'){
        firstElementVal = arr[0];
    }
    return firstElementVal + arr.length;
}
//console.log(firstPlusLength(["Titlywinks",2,3,4]));
