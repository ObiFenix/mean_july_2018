function BST(){
    this.root = null;
}

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function (val) {
    var root = this.root;

    if (!root) {
        this.root = new Node(val);
        return this;
    }

    var x = root;
    var newNode = new Node(val);

    while (currentNode) {
        if (val < currentNode.val) {
            if (!currentNode.left) { currentNode.left = newNode; return this; }
            else                   { currentNode = currentNode.left; }
        }
        else {
            if (!currentNode.right) {
                currentNode.right = newNode;
                return this;
            }   else { currentNode = currentNode.right; }
        }
    }
};

BST.prototype.preOrderTraversal = function (root) {
    // console.log(root.val);
    if (root.left)  { this.preOrderTraversal(root.left); }
    if (root.right) { this.preOrderTraversal(root.right); }
};
BST.prototype.inOrderTraversal = function (root) {
    if (root.left)  { this.inOrderTraversal(root.left); }
    // console.log(root.val);
    if (root.right) { this.inOrderTraversal(root.right);}
};
BST.prototype.postOrderTraversal = function (root) {
    if (root.left)  { this.postOrderTraversal(root.left); }
    if (root.right) { this.postOrderTraversal(root.right);}
    // console.log(root.val);
};

var maxDepth = function (root) {
    var x = [{ node: root, depth: 1 }];
    var current = x.pop();
    var max = 0;
    while (current && current.node) {
        var node = current.node;
        if (node.left)  { x.push({ node: node.left, depth: current.depth + 1 }); }
        if (node.right) { x.push({ node: node.right, depth: current.depth + 1 });}
        if (current.depth > max) { max = current.depth; }
        current = x.pop();
    }
    return max;
};

var bst = new BST();
bst.insert(30).insert(20).insert(40); bst.insert(3);
bst.insert(52); bst.insert(31); bst.insert(82);
bst.insert(60); bst.insert(44); bst.insert(18);

// ==================== [ Traversing ]
bst.preOrderTraversal(bst.root);
bst.inOrderTraversal(bst.root);
bst.postOrderTraversal(bst.root);
// ==================================
//Therefore:
console.log('The current depth of this BST is ' + maxDepth(bst));
