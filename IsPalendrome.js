//is palendrome with queue and stack


isPalendrome = function(queue){
    //create new singly linked stack
    var stack = new SLStack();
    //copy queue argument into a new queue
    var newQueue = queue;
    //while newQueue is not empty dequeue into the stack 
    while(!newQueue.isEmpty()){
        stack.push(newQueue.Dequeue());
    }
    //while stack is not empty, enqueue into newQueue
    //the reverse of the argument queue is now in newQueue 
    while(!stack.isEmpty()){
        newQueue.Enqueue(stack.pop());
    }
    //return the result of compaire queues
    return compaireQueues(newQueue, queue);
}

compaireQueues = function(queue1, queue2){
    if(queue1.size != queue2.size){
        return false;
    }
    var runner1 = queue1.head;
    var runner2 = queue2.head;
    while(runner1 != undefined || runner2 != undefined){
        if(runner1.val != runner2.val){
            return false;
        }
        runner1 = runner1.next;
        runner2 = runner2.next;
    }
    return true;
}
class Queue{
   
    constructor(){
        this.head;
        this.tail;
        this.size = 0;
    }
    

    Enqueue(val){
        var newNode = new Node(val);
        if(this.head === undefined){
            this.head = newNode;
            this.tail = newNode;
            this.size ++;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
            this.size ++;
        }
    }

    Dequeue(){
        var result = this.head;
        this.head = this.head.next;
        this.size --;
        return result;
    }
    isEmpty(){
        if(this.head === undefined){
            return true;
        }
        else{
            return false;
        }
    }
}

class Node {
    constructor(val){
        this.val = val
        this.next = undefined;
    }

    print(){
        console.log(val);
    }
}

class SLStack {
    constructor(){
        this.top = undefined;
    }
    

    push(val){
        var NewNode = new Node(val);
        if(this.top === undefined){
            this.top = NewNode;
        }
        else{
            NewNode.next = this.top;
            this.top = NewNode;
        }

    }
    pop(){
        var result = this.top;
        this.top = this.top.next;
        return result;
    }
    isEmpty(){
        if(this.top === undefined){
            return true;
        }
        else{
            return false;
        }
    }
}

var testQueue = new Queue();
testQueue.Enqueue("r");
testQueue.Enqueue("a");
testQueue.Enqueue("c");
testQueue.Enqueue("e");
testQueue.Enqueue("c");
testQueue.Enqueue("a");
testQueue.Enqueue("r");
console.log(isPalendrome(testQueue));

