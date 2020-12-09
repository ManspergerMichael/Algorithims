class Node {
    constructor(val){
        this.val = val
        this.next = undefined;
    }

    print(){
        console.log(val);
    }
}

//list 1
var head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(4);

//list 2
var head2 = new Node(1);
head2.next = new Node(3);
head2.next.next = new Node(4);

mergeTwoLists = function(l1,l2){
    var node1 = l1;
    var node2 = l2;
    //console.log(node1.val);
    var cur = undefined;
    var head = undefined;
    if(node1.val <= node2.val){
        head = node1;
        node1 = node1.next;
    }
    else{
        head = node2;
        node2 = node2.next;
    }
    cur = head;
    //console.log("Head is: " + head.val);
    while(node1 != undefined){
        if(node1.val <= node2.val)
        {
            cur.next = node1;
            cur = cur.next;
            node1 = node1.next;
        }
        else{
            cur.next = node2;
            cur = cur.next;
            node2 = node2.next;
        }
    }
    return head;
}

var newHead = mergeTwoLists(head1,head2);

while(newHead != undefined){
    console.log(newHead.val);
    newHead = newHead.next;
}


