/*This function takes in two strings,
parses them into two objects,
then scans the first object to find common keys with the other string
if there is a match the lesser number is added to count then returned
*/
function commonCharacterCount(s1, s2) {
    //the count of common characters
    var count = 0;
    //dictionary for s1
    var dictA = {};
    //dictionary for s2
    var dictB = {};
    //loop through array and map each character found
    for(var i = 0; i<s1.length;i++){
        //if character is allready recorded as a key, increment by one
        if(s1[i] in dictA){
            dictA[s1[i]] += 1;
            
        }
        //else create key
        else{
            dictA[s1[i]] = 1;
        }
    }
    //same as loop above but for the second string
     for(var j = 0; j <s2.length;j++){
         if(s2[j] in dictB){
            dictB[s2[j]] += 1;
            
        }
        else{
            dictB[s2[j]] = 1;
        }
    }
    //for each key in dictA...
    for(key in dictA){
        //if key in dictA is also in dictB..
        if(key in dictB){
            //add the lower count of characters to count,
            //the larger number will be above the common characters
            if(dictA[key] < dictB[key]){
                count += dictA[key];
            }
            else{
                count += dictB[key];
            }
        }
    }
    //console.log(dictA, dictB);
    return count;
}
