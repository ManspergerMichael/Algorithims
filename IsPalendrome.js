//is palendrome with queue and stack


isPalendrome = function(queue){
    var stack = new SLStack();
    var newQueue = queue;
    var runner = newQueue.head;
    while(runner != undefined){
        stack.push(newQueue.Dequeue());
        runner = runner.next;
    }
    while(stack.top != undefined){
        newQueue.Enqueue(stack.pop());
    }
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
        head;
        tail;
        size = 0;
    }
    

    Enqueue(val){
        var newNode = Node(val);
        if(head === undefined){
            head = newNode;
            tail = newNode;
            size ++;
        }
        else{
           tail.next = newNode;
           tail = newNode;
           size ++;
        }
    }

    Dequeue(){
        var result = head;
        head = head.next;
        size --;
        return result;
    }
}

class Node {
    constructor(val){
        this.val = val
        next = undefined;
    }

    print(){
        console.log(val);
    }
}

class SLStack {
    constructor(){
        top = undefined;
    }
    

    push(val){
        var NewNode = new Node(val);
        if(top === undefined){
            top = NewNode;
        }
        else{
            NewNode.next = top;
            top = NewNode;
        }

    }
    pop(){
        var result = top;
        top = top.next;
        return result;
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

