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
    //round each calulation down to integer
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
  console.log(fibonacciLoop(9));

  //recursive fibonachi sequence
 function fibonacciRecursion(num){
    if (num <= 1) return 1;
    return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
 }
 console.log(fibonacciRecursion(9));