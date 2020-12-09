//console.log("Hello World!");

function SingleLinkedList(){
    this.head = null;
    
}
function Node(value, next){
    this.value = value;
    this.next = next;
}
SingleLinkedList.prototype.AddFront = function(value){
    //create Node
    var newNode = new Node(value);
    //set the node.next to the head that refrences the first element of node
    newNode.next = this.head;
    //set the head refrence to the new node
    this.head = newNode;
    
}
SingleLinkedList.prototype.Contains = function(value){
    //cur = current node
    var cur = this.head;
    //var found = false;
    while(cur != null){
        if(cur.value == value){
            return true;
        }
        cur = cur.next;
    }
    return false;
    
}
SingleLinkedList.prototype.RemoveFront = function(){
    if(this.head == null){
        return null;
    }
    this.head = this.head.next;
}

SingleLinkedList.prototype.Front = function(){
    return this.head.value;
}
SingleLinkedList.prototype.Length = function(runner){
    var count = 0;
    if(runner == null){
        return null;
    }
    while(runner != null){
        count ++;
        runner = runner.next;
    }
    return count;
}

function Display(List){
    var cur = List.head;
    var values = "";
    while(cur!= null){
        values += cur.value;
        cur = cur.next;
    } 

}
SingleLinkedList.prototype.Max = function(){
    var cur = this.head;
    var max = cur.value;
    while(cur!= null){
        if(cur.val > max){
            max = cur.val;
        }
        cur = cur.next;
    }
    return max; 
}
SingleLinkedList.prototype.Min = function(){
    var runner = this.head;
    var min = cur.value;
    while(cur!= null){
        if(cur.val < min){
            min = cur.val;
        }
        cur = cur.next;
    }
    return min;
}

SingleLinkedList.prototype.Back = function(){
    var cur = this.head;
    while(cur != null){
        if(cur.next == null){
            return cur.value;
        }
        cur = cur.next;
    }
    return null;
}

SingleLinkedList.prototype.AddBack = function(value){
    var cur = this.head;
    while(cur.next != null){
        if(cur.next == null){
            var newNode = new Node(value);
            cur.next = newNode;
        }
        cur = cur.next;
    }

}

//code to test list functions
var SLL = new SingleLinkedList;
SLL.AddFront(1);
SLL.AddFront(2);
SLL.AddFront(3);
SLL.AddBack(42);
//SLL.RemoveFront();
console.log(SLL.Front());
console.log(SLL.Back());
//console.log(SLL.Contains(1));
var runner = SLL.head;
console.log("There are "+SLL.Length(runner)+" nodes in the list.");
//console.log(SLL.Back());
while(runner != null){
    console.log(runner.value);
    runner = runner.next;
}
console.log(SLL.Contains(42));

