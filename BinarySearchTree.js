class BSNode{

    constructor(val){
        this.val = val;
        this.left = undefined;
        this.right = undefined;
    }
    Height(){
        var leftH = 0;
        var rightH = 0;
        if(this.left != undefined){
            leftH = this.left.Height();
        }
        if(this.right != undefined){
            rightH = this.right.Height();
        }
        return 1 + Math.max(leftH, rightH);
    }
}

class BSTree {
    constructor(){
        this.head = undefined;
    }

    Add(val){
        if(this.head == undefined){
            this.head = new BSNode(val);
        }
        else{
            var cur = this.head;
            while(true){
                if(val > cur.val){
                    if(cur.right == undefined){
                        cur.right = new BSNode(val);
                        break;
                    }
                    else{
                        cur = cur.right;
                    }
                }
                if(val < cur.val){
                    if(cur.left == undefined){
                        cur.left = new BSNode(val);
                        break;
                    }
                    else{
                        cur = cur.left;
                    }
                }
            }
        }
    }
    Contains(val){
        var cur = this.head;
        while(!cur === undefined){
            if(cur.val == val){
                return true;
            }
            if(val > cur.val){
                cur = cur.right;
            }
            if(val < cur.val){
                cur = cur.left;
            }
        }
        return false;
    }

    Min(){
        var cur = this.head;
        while(true){
            if(cur.left === undefined){
                return cur.val;
            }
            cur = cur.left;
        }
    }
    Max(){
        var cur = this.head;
        while(true){
            if(cur.right === undefined){
                return cur.val;
            }
            cur = cur.right;
        }
    }
    isEmpty(){
        if(this.head === undefined){
            return true;
        }
        else{
            return false;
        }
    }
    Front(){
        console.log(this.head.val);
        console.log(this.head.left.val);
        console.log(this.head.left.left.val);
        console.log(this.head.right.val);
    }
}


//outside methods of BST
Size = function(node){
    if (node === undefined){
        return 0;
    }
    var leftSize = Size(node.left);
    var rightSize = Size(node.right);
    return 1 + leftSize + rightSize;
}
isBalanced = function(node){
    if(node === undefined){
        return 0;
    }
    var leftH = isBalanced(node.left);
    if(leftH === -1){
        return -1;
    }
    var rightH = isBalanced(node.right);
    if(rightH === -1){
        return -1;
    }
    if(Math.abs(leftH - rightH) > 1){
        return -1;
    }
    return (1 + Math.max(leftH,rightH));
}
var tree = new BSTree();
tree.Add(50);
tree.Add(100);
tree.Add(25);
tree.Add(15);
tree.Add(101);
tree.Add(75);
tree.Add(1);
console.log("Is Balenced? " + isBalanced(tree.head));
console.log(Size(tree.head));
console.log(tree.Min());
console.log(tree.Max());
console.log(tree.head.Height());


