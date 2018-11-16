//array baised stack
class Stack{
    top = 0;
    storage = {};

    push = function(value){
        storage[top] = value;
        top ++;
    }

    pop = function(){
        if(top === 0){
            return undefined;
        }
        top--;
        var result = storage[top];
        delete storage[top];
        return result;
    }

    peek = function(){
        return storage[top-1];
    }
    contains = function(value){
        for(var i = top -1; i > 0; i--){
            if(storage[i] === value){
                return true;
            }
        }
        return false;
    }
    isEmpty = function(){
        if(top === 0){
            return true;
        }
        else{
            return false;
        }
    }
    size = function(){
        return top;
    }
}
//singly linked list stack
class Node {
    val = val;
    next = undefined;

    print = function(){
        console.log(val);
    }
}
class SLStack {
    top = undefined;

    push = function(val){
        var NewNode = new Node(val);
        if(top === undefined){
            top = NewNode;
        }
        else{
            NewNode.next = top;
            top = NewNode;
        }

    }
    pop = function(){
        var result = top;
        top = top.next;
        return result;
    }
}
//array stack testing
/* var daStack = new Stack();
console.log(daStack.isEmpty());
daStack.push(1);
daStack.push(2);
daStack.push(3);
console.log(daStack.size());
console.log(daStack.contains(3)); */

//SL Stack testing
var stack = new SLStack();
stack.push(1);
stack.push(2);
console.log(stack.pop());