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


function addToList(el)
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

// prints the list items
function printList()
{
	var current = this.head;
	var str = "";
	while (current) {
		str += current.el + " ";
		current = current.next;
	}
	console.log(str);
}

function removeElement(l,k)
{
    l.forEach(el => addToList(el));

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
	var result = [];
	while (current) {
		result.push(current.el);
		current = current.next;
	}
	return result
}


// addToList(9);
// addToList(3);
// addToList(5);
// addToList(7);
// addToList(4);
// printList();
let l = [9,3,5,7,4]
removeElement(l,5);
printList();