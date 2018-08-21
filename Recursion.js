//Recursive sigma
function sigma(number){
    //base case
    if(number == 0){
        return 0;
    }
    if(number % 2 != 0){
        number = Math.floor(number);
    }
    if(number == 1){
        return number;
    }
    else{
        return (number + sigma(number - 1));
    }
}
console.log(sigma(5));

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
    if(number == 1){
        return number;
    }
    else{
        return (number * factorial(number - 1));
    }
}
console.log(factorial(6));


function fibonacci(num){
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }