class Queue{
     head = undefined;
     tail = undefined;
     size = 0;

     Enqueue = function(val){
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

     Dequeue = function(){
         var result = head;
         head = head.next;
         size --;
         return result;
     }
}