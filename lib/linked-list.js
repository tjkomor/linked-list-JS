const Node = require('./node');

function LinkedList(){
  this.head = nil
}

LinkedList.prototype.findTail = function () {
  current = this.head
  while(current.nextNode !== nil){
    current = current.nextNode;
  }
  return current;
};

LinkedList.prototype.append = function (data) {
  if (this.head === nil){
    this.head = new Node(data);
  else
    findTail.nextNode = new Node(data);
  }
};

append('tyler')
append('hello')



module.exports = LinkedList;
