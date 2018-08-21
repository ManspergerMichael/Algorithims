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
    if(str.length <=0){
        return "Error";
    }
    var arr = str.split(" ");
    var result = 0;
    //console.log(arr);
    for(var i = 0; i < arr.length;i++){
        result += arr[i].length;
    }
    return result;

}
//console.log(countNonSpaces("I once took a yoga class that turned out to be a cult."));

function intToRome(number){
    var numerals ={
        M:1000,D:500,C:100,L:50,X:10,V:5,I:1
    }
    result = ''; 
    for(var i in numerals){
        while (number >=numerals[i]){
            result += i;
            number -=numerals[i];
        }
    }
    return result;
}
//console.log(intToRome(2073));

function isPalindromeOrPermutation(str){
    //fast fail if string is too short
    if(str.length < 3){
        return false;
    }
    // is palendrome flag
    var isPalen = true;
    //is permutation of palendrome flag
    var isPermu = true;
    //dictionary to be used to record what characters are in the string and how many times.
    var dict = {};
    //split string into an array for iteration
    var strLowered = str.toLowerCase();
    var arr = strLowered.split("");
    //for loop iterates through length of array, checking for palendrome and creating dictionary at each iteration
    for(var i = 0; i < arr.length; i++){
        //runners at both sides of array to check for duplicate characters and if their positions match
        if(arr[i] != arr[arr.length - i]){
            // if characters dont match palendrome test fails. No break is used so that the dictionary is created.
            isPalen = false;
        }
        //if character exists in dictionary increment count by one 
        if(arr[i] in dict){
            dict[arr[i]] +=1;
        }
        //else add character to dictionary, value of one
        else{
            dict[arr[i]] = 1;
        }
        
    }
    //console.log(dict);
    //test for permutation 
    //all characters will have a even value except for center character that will appear once
    var oneCount = 0;
    for (var key in dict){
        //if character count is even or %2 = 1 than it is a palendrome permutation
        if(dict[key] % 2 > 1){
            isPermu = false;
            //no further testing needed
            break;
        }
        if(dict[key] == 1){
            oneCount +=1;
        }
    }
    //if there is more than one character that appears only once in the string than it is not a permutation
    if(oneCount > 1){
        isPermu = false;
    }
    //if string is a palendrome or a permutation, return true
    if(isPalen || isPermu){
        return true;
    }
    else{
        return false;
    }
}

//console.log(isPalindromeOrPermutation("racecar"));
//console.log(isPalindromeOrPermutation("Baboon"));