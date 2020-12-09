//bubblesort with unmoveable elements
function sortByHeight(a){
    var array2 = a;
    array2 = array2.filter((element)=>{
        if(element != -1){
            return element;
        }
    }).sort((a,b)=>{
        return a-b;
    });
    var indexVal =0;
    for(var i = 0; i < a.length; i++){
        if(a[i] != -1){
            a[i] = array2[indexVal];
            indexVal++;
        }
    }
    return array2;
}
var a = [-1,150,190,170,-1,-1,160,180]
console.log(sortByHeight(a));


//simple bubble sort
function sortByHeight2(a) {
    for(var i = 0; i<a.length; i++){
        for(var j = 1; j<a.length; j++){
            if(a[j] == -1){
                continue;
            }
            else{
                if(a[j-1] > a[j]){
                    var temp = a[j-1];
                    a[j - 1] = a[j];
                    a[j] = temp;
                }
            }
        }
    }
    return a;
}