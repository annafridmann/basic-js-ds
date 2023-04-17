const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class LinkedList {
	constructor()
	{
		this.head = null;
		this.size = 0;
	}
}

class ListNode  {
	constructor(el)
	{
		this.el = el;
		this.next = null
	}
}


function addElToList(el)
{
    var listNode = new ListNode (el);
     var current;
 
    if (this.head == null)
        this.head = listNode;
    else {
        current = this.head;
      while (current.next) {
            current = current.next;
        }
  
       current.next = listNode;
    }
    this.size++;
}

function removeKFromList(l,k) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  
  l.forEach(el => addElToList(el));

  var current = this.head;
	var prev = null;

while (current != null) {
		if (current.el === k) {
			if (prev == null) {
				this.head = current.next;
			} else {
				prev.next = current.next;
			}
			this.size--;
			return current.el;
		}
		prev = current;
		current = current.next;
	}
  var current = this.head;
	var result = [];
	while (current) {
		result.push(current.el);
		current = current.next;
	}
	return result
}


module.exports = {
  removeKFromList
};
