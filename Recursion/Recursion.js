//Recursive sigma
//take a given number and add each interger value from n down to 1 to result
function sigma(number){
    //fast fail
    if(number == 0){
        return 0;
    }
    //if number is not even, round down
    if(number % 2 != 0){
        number = Math.floor(number);
    }
    //base case
    if(number == 1){
        return number;
    }
    //add result of recursive call to number
    else{
        return (number + sigma(number - 1));
    }
}
//console.log(sigma(5));

//Recurseive factorial
function factorial(number){
    //fast fail
    if(number == 0){
        return 1;
    }
    //round each calulation down to whole number
    if(number % 2 != 0){
        number = Math.floor(number);
    }
    //base case
    if(number == 1){
        return number;
    }
    else{
        return (number * factorial(number - 1));
    }
}
//console.log(factorial(6));

//non-recursive fibonacci sequence 
//with O(n) time complexity
function fibonacciLoop(num){
    //a fibonachi sequence starts with 0 and 1
    var a = 1, b = 0, temp;
    //loops through calculation until num reaches 0
    while (num >= 0){
      //store a in temp  
      temp = a;
      //add the two previous numbers to make the next number in the sequence  
      a = a + b;
      //store the previous number in b
      b = temp;
      //reduce number by one
      num--;
    }
    return b;
  }
//console.log(fibonacciLoop(5));

  //recursive fibonachi sequence without memoizeation
  //Time complexity is O(2^n) 
 function fibonacciRecursion(num){
    num = Math.trunc(num);
    if (num == 1) {
        return 1;
    }
    if (num == 0){
        return 0;
    }
    return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
 }
//console.log(fibonacciRecursion(4));

//add together previous three values in the sequence 
// Tribonacci(3) = (0+0+1)=1
function tribonacci(num){
    num = Math.trunc(num);
    //base case for tribonachi 
    if(num == 2){return 1;}
    if(num == 1){return 0;}
    if(num <= 0){return 0;}
    //console.log(num);
    return tribonacci(num - 1) + tribonacci(num -2) + tribonacci(num - 3);
}
console.log(tribonacci(4));

/*
Notes on Recursion:
The Base Case is simular to the escape condition of a loop
i.e for(var i = 0; I<ARRAY.LENGTH; i++){}

Modify the data at the time of the function call when continuing the "loop"
*/
