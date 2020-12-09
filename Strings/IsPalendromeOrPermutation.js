//A whtieboard test I was given.
/*Write a function that takes a string that will test if the string 
is a palendrome or a permutation of a palendrome. 
Example inputs: MOM, MMO, OMO
An edgecase I noticed is a string that has an un even number of letters.
Example "bananab". Would strings that are not words count as palandromes?
*/ 
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