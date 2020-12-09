function reverseParentheses(s) {
    var newString ="";
    var flag = false;
    var a = s.split("");
    for(var i = 0; i < a.length;i++){
        if(a[i] == '('){
            flag = true;
        }
        if(a[i] != '(' && flag == false){
            newString += a[i];
        }
        if(a[i] == '(' && flag == true){
            
        }
        if(a[i] == ')'){
            var j = i -1;
            while(a[j] != '('){
                //console.log(s[j]);
                newString += a[j];
                j --;
            }
            flag = false;
        }
    }
    //console.log(newString);
    return newString;
}
