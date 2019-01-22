static string transform(string str){
        string test = str;
        string result = "";
        bool swap = true;
        while(swap){
            swap = false;
            for(int i = 0; i < test.Length; i++){
                if((i + 1) > test.Length-1){
                    break;
                }
                else if(test.Substring(i,2) == "ab"){
                    result +='c';
                    
                    swap = true;  
                }
                else if(test.Substring(i,2) == "ba"){
                    result +='c';  
                    swap = true;
                }
                else if(test.Substring(i,2) == "bc"){
                    result +='a';  
                    swap = true;
                }
                else if(test.Substring(i,2) == "cb"){
                    result +='a';  
                    swap = true;
                }
                else if(test.Substring(i,2) == "ac"){
                    result +='b';  
                    swap = true;
                }
                else if(test.Substring(i,2) == "ca"){
                    result +='b';  
                    swap = true;
                }
                else{
                result += test[i];
                }
            }
            if(swap){
                test = result;
                result = "";
            }
            
        }
        return test;
    }