function BST () {
    this.root = null;
};

function node (val:any):void {
    this.value = val;
    this.left  = null;
    this.right = null;
};

BST.prototype.insert = (val) => {

    // Base Cases: (If there isn't a root)
    if (!this.root) { this.root = new node(val); return this; }

    // Else: (There is root)
    var currentNode = this.root;
    while (currentNode) {
        if (val < currentNode.value) {
            if (currentNode.left) { currentNode = currentNode.left; }
            else { currentNode.left = new node(val); return this; }
        }
        else {
            if (currentNode.right) { currentNode = currentNode.right; }
            else { currentNode.right = new node(val); }
        }
    }
};

BST.prototype.preOrder = function (root) {
  console.log(root.val);
  if (root.left)  { this.preOrder(root.left);  }
  if (root.right) { this.preOrder(root.right); }
};

BST.prototype.inOrder = function (root) {
  if (root.left)  { this.inOrder(root.left);  }
  console.log(root.val);
  if (root.right) { this.inOrder(root.right); }
};

BST.prototype.postOrder = function (root) {
  if (root.left)  { this.postOrder(root.left);  }
  if (root.right) { this.postOrder(root.right); }
  console.log(root.val);
};

var bst = new BST();
bst.insert(30).insert(20).insert(40);
bst.insert(3);
bst.insert(52);
bst.insert(31);
bst.insert(82);
bst.insert(60);
bst.insert(44);
bst.insert(18);

// ===================================== [ Output ]
bst.preOrderTraversal(bst.root);   // < Pre-Order >
bst.inOrderTraversal(bst.root);    // < In-Order >
bst.postOrderTraversal(bst.root);  // < Post-Order>
// ================================================
