//sum of all numbers algortithm
//Sums all numbers between 1 and N

//incremental algortithm
function iSum(n){
  var sum = n;
  for(var i = n - 1; i > 0; i--){
    sum += i;
  }
  return sum;
}
//recursive algorithm
function rSum(n){
  //base case
  if(n === 1){
    return 1;
  }
  else {
    return rSum(n-1) + n;
  }
}

//factorials
function iFactorial(n){
  var sum = n;
  for(var i = n - 1; i > 0; i--){
    sum *= i;
  }
  return sum;
}

function rFactorial(n){
  //base case
  if(n === 1){
    return 1;
  }
  else {
    return rSum(n-1) * n;
  }
}
