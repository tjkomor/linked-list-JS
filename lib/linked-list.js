const Node = require('./node');

function LinkedList(){
  this.head = nil
}

LinkedList.prototype.findTail = function () {
  var current = this.head;
  while(current.nextNode !== nil){
    current = current.nextNode;
  }
  return current;
};

LinkedList.prototype.prepend = function (data) {
  if (this.head === nil){
    this.head = new Node(data);
  } else {
    var node = new Node(data)
    var firstNode = this.head.nextNode
    this.head.nextNode = node
    node.nextNode = firstNode
  }
};

LinkedList.prototype.append = function (data) {
  if (this.head === nil){
    this.head = new Node(data);
  } else {
    findTail.nextNode = new Node(data);
  }
};

LinkedList.prototype.insert = function (data, position) {
  var counter = 0
  var current = this.head
  if (this.head.nextNode === nil){
    append(data)
  } else {
    while (counter !== position){
      var previous = current
      current = current.nextNode
      counter += 1
    }
    var newNode = new Node(data)
    previous.nextNode = newNode
    newNode.nextNode = current
  }
};

LinkedList.prototype.count = function () {
  var current = this.head;
  var counter = 0;
  while(current.nextNode !== nil){
    current = current.nextNode;
    counter += 1;
  }
  return counter
};


module.exports = LinkedList;
