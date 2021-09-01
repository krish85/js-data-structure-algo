/**
 * Create a LinkedList using javascript
 * LinkedList class which holds all the properties required for acheiving all the LL methods
 */
class LinkedList{
  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length =1;
  }

/**
 * Add a value at the end of the list
 */
  append(tailValue){
   const newNode = {
     value: tailValue,
     next: null
   }
   this.tail.next = newNode;
   this.tail = newNode;
   this.length++;
   return this;
  }

/**
 * Add a value at the start of the list
 */
  prepend(headValue){
    this.head = {
      value: headValue,
      next: this.head
    }
    this.length++;
    return this;
  }

/**
 * Insert a value at the given index position
 */
  insert(index, value){
      if(index === 0){
        this.prepend(value);
        this.length++;
        return this;
      }
      else if(index >= this.length){
        this.append(value);
        this.length++;
        return this;
      }
      else{
        const newNode = {
          value: value,
          next: null
        };
        const leaderItem = this.traverseToIndex(index-1);
        const itemInIndex = leaderItem.next;
        leaderItem.next = newNode;
        newNode.next = itemInIndex;
        this.length++;
        return this;
      }
  }
/**
 * Traverse to the given index and return the value in the index
 */
  traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head;

    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

/**
 * Pretty printer to print only the values in the list
 */
  printList(){
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  
}

const myll = new LinkedList(10);
myll.append(5);
myll.append(16);
myll.prepend(1);
myll.insert(20,99);
myll.insert(2,99);

console.log(myll.printList());
