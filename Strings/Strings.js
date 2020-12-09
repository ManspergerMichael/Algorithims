//remove blanks from a string
function removeBlanks(str){
    if(str == ""){
        return "Error"
    }
    var wordArr = str.split(" ");
    //console.log(wordArr);
    return wordArr.join("");
}
//console.log(removeBlanks(" Pl ayTha tF  u nkyM usi c !"));

//get numbers from a string
function getDigits(str){
    var arr = str.split("");
    console.log(arr);
    var result = "";
    for(var i = 0; i < arr.length; i++){
        if(!isNaN(arr[i])){
            result += arr[i];
        }
    }
    return parseInt(result);
}
//console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

//function that gets first letter of each word in a string
function Acronym(str){
    var arr = str.split(" ");
    var result = ""
    console.log(arr);
    for(var i = 0; i < arr.length; i++){
        result += arr[i].charAt(0);
    }
    return result;
}
//console.log(Acronym("Federal Burito Inspectors"));

//count non-space characters in string
function countNonSpaces(str){
    //fast fail if an empty string
    if(str.length <=0){
        return "Error";
    }
    //split the string into an array, ignoreing whitespace
    var arr = str.split(" ");
    //initalize character counter
    var result = 0;
    //console.log(arr);
    //loop through array
    for(var i = 0; i < arr.length;i++){
        //add length of each string in array to result
        result += arr[i].length;
    }
    return result;

}
//console.log(countNonSpaces("I once took a yoga class that turned out to be a cult."));

function intToRome(number){
    //dictionary to hold the roman numeral and its interger value
    var numerals ={
        M:1000,D:500,C:100,L:50,X:10,V:5,I:1
    }
    //result is the string of numerals that will be created in the loop
    result = '';
    //for each numeral in dictionary
    for(var i in numerals){
        //while the given number is greater than the numeral value...
        while (number >=numerals[i]){
            //add the numeral to the result string
            result += i;
            //subtract the numeral value from the given number
            number -=numerals[i];
        }
    }
    return result;
}
//console.log(intToRome(2073));

