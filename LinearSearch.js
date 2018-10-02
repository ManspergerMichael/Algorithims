var arr = [0,1,2,3,4,5,6,7,8,9];

function linearSearch(key,arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i]==key){
      return i;
    }
  }
  return false;
}
console.log(linearSearch(5,arr));
