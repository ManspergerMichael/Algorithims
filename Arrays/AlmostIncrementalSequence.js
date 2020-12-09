//Given a sequence of integers as an array, 
//determine whether it is possible to obtain a strictly 
//increasing sequence by removing no more than one element from the array.

//first algorithim solved 16/17 tests from coding fights
function almostIncreasingSequenceOne(sequence) {
    //count of the numbers in the sequence that need to be removed
    var count = 0;
    //loop through array
    for(var i =0;i<sequence.length;i++){
        //this algorithim checks three numbers in the sequence at a time,
        //if i + 2 is outside the array then break out of the loop
        if(i+2 >= sequence.length){
            break;
        }
        //Check if the three numbers in the sequence are incremental
        //if the first number is less than the second number
        if(sequence[i] < sequence[i+1]){
            //if the second number is less than the third
            if(sequence[i+1] < sequence[i+2]){
                //if the third number is greater than both the first and the second
                if(sequence[i+2] > sequence[i+1] && sequence[i+2] > sequence[i]){

                }
                else{
                    count ++;
                    sequence[i+2] = sequence[i+1];
                }
            }
            else{
                count ++;
                sequence[i+1] = sequence[i];
            }
        }
        else{
            count ++;
            sequence[i] = sequence[i+1];
        }

    }
    //if the count of numbers to be removed is more than one, return false
    if(count > 1){
        //console.log(sequence);
        return false;
    }
    else{ 
        return true;
    }
}
//second algorithim. Solved 14/17 tests. Returns false positive when 
//the sequence has a valid sub sequence
function almostIncreasingSequence(arr) {
    var count = 0;
    for(var i = 0; i < arr.length;i++){
        if(i == arr.length){
            break;
        }
        if(arr[i] >= arr[i+1]){
            count ++;  
        }
    }
    if(count > 1){
        //console.log(count);
        return false;
    }
    else{
        //console.log(count);
        return true;
    }
}
//
function almostIncreasingSequenceThree(sequence) {
    var count = 0;
    for(var i = 0; i<sequence.length; i++){
        //if the previous number in the sequence is larger, increment count
        if(sequence[i] <= sequence[i-1]){
            count ++;
            //if number 2 icrements back is larger then i-1 is part of the sequence,
            //if i -1 is greater than i + i then i+1 is also not incrementing in sequence.
            if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i -1]){
                return false;
            }
        }
    }
    
    return count <= 1;
    
}