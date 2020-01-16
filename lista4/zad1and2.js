function* treeGenerator(tree){
    if(tree === null){return; }
    yield tree.data;
    if(tree.left){
        yield *treeGenerator(tree.left);
    }
    if(tree.right){
        yield *treeGenerator(tree.right);
    }
}

class Node{
    constructor(number, left = null, right = null){
        this.data = number;
        this.left = left;
        this.right = right;
    }
    [Symbol.iterator](){ return treeGenerator(this);}
}


var treeLeftSub = new Node(3);
var treeLeft = new Node(5,undefined,treeLeftSub);
var treeRight = new Node (8);
var treeMain = new Node(6, treeLeft, treeRight);
//     6
//    / \
//   5   8
//  / \
//     3
console.log(treeMain.left);
console.log(treeMain.right);

for ( var n of treeMain) {
    console.log( n );
}