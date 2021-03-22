//节点定义

function Node(data, left, right) {
  this.data = data;       // 数据
  this.left = left;       // 左节点
  this.right = right;     // 右节点
  this.show = show;       // 显示节点数据
}

function show() {
  return this.data;
}

//二叉查找树（BST）的类

function BST() {
  this.root = null;           // 根节点
  this.insert = insert;       // 插入节点
  this.preOrder = preOrder;   // 先序遍历
  this.inOrder = inOrder;     // 中序遍历
  this.postOrder = postOrder; // 后序遍历
  this.find = find;           // 查找节点
  this.getMin = getMin;       // 查找最小值
  this.getMax = getMax;       // 查找最大值
  this.remove = remove;       // 删除节点
}

//插入新节点
function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

// 中序遍历
function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.debug(node.show() + ' ');
    inOrder(node.right);
  }
}
//先序遍历
function preOrder(node) {
  if (!(node == null)) {
    console.log(node.show() + ' ');
    preOrder(node.left);
    preOrder(node.right);
  }
}

//后序遍历
function postOrder(node) {
  if (!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show() + ' ');
  }
}

//查找最小值
function getMin() {
  var current = this.root;
  while (!(current.left == null)) {
    current = current.left;
  }
  return current.show();
}

//查找最大值
function getMax() {
  var current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }
  return current.show();
}

//查找给定值
function find(data) {
  var current = this.root;
  while (current != null) {
    if (current.data == data) {
      return current;
    } else if (current.data < data) {
      current = current.right;
    } else {
      current = current.left;
    }
  }
  return null;
}

//删除操作

function remove(data) {
  removeNode(this.root, data);
}

//查找最小值

function getSmallest(node) {
  if (node.left == null) {
    return node;
  }
  else {
    return getSmallest(node.left);
  }
}

//删除节点
function removeNode(node, data) {
  if (node == null) {
    return null;
  }
  if (data == node
    
    .data) {
    // 没有子节点的节点
    if (node.left == null && node.right == null) {
      return null;
    }
    // 没有左子节点的节点
    if (node.left == null) {
      return node.right;
    }
    // 没有右子节点的节点
    if (node.right == null) {
      return node.left;
    }
    // 有2个子节点的节点
    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;

  } else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
}


var nums = new BST();
//插入数据
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

//删除根节点
nums.remove(45);


inOrder(nums.root);
// 3 16 22 37 45 99