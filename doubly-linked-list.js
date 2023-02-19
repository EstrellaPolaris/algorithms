class DoublyLinkedList {
    constructor() {
      this.size = 0;
      this.head = null;
      this.tail = null;
    }
  
    add(value, index) {
      const node = createNode(value);
      if (index === 0) {
        this.addAtHead(value);
        return;
      }
  
      if (!index) {
        this.addAtTail(value);
        return;
      }
  
      if (index < 0 || index > this.size) throw new Error('wrong index');
  
      let curr = this.head;
      let ind = index;
      while (curr && ind > 0) {
        curr = curr.next;
        ind--;
      }
  
      let nextNodeLink = curr.next;
      curr.next = node;
      node.prev = curr;
      node.next = nextNodeLink;
      nextNodeLink.prev = node;
      this.size++;
    }
  
    removeByValue(value) {
      let curr = this.head;
  
      while (curr) {
        if (curr.value === value) {
          this.head = this.head.next;
          this.size--;
          break;
        }
  
        if (curr.next?.value === value) {
          if (!curr.next.next) {
            curr.next = null;
            this.tail = curr;
            this.size--;
            break;
          }
          curr.next = curr.next.next;
          if (curr.next.next) {
            curr.next.next.prev = curr;
          }
          this.size--;
          break;
        }
        curr = curr.next;
      }
    }
  
    removeByIndex(index) {
      if (index < 0 || index >= this.size) {
        throw new Error('wrong index');
      }
  
      let curr = this.head;
  
      if (index === 0) {
        this.head = curr.next;
        if (this.head) {
          this.head.prev = null;
        }
        this.size--;
  
        if (!this.head) {
          this.tail = null;
        }
  
        return;
      }
  
      for (let i = 0; i < index; i++) {
        curr = curr.next;
      }
  
      if (index === this.size - 1) {
        this.tail = curr.prev;
      }
  
      let prevNode = curr.prev;
      let nextNode = curr.next;
      prevNode.next = nextNode;
      if (nextNode) nextNode.prev = prevNode;
      this.size--;
    }
  
    searchByIndex(index) {
      if (index < 0 || index >= this.size) throw new Error('wrong index');
      let curr = this.head;
      let ind = index;
      while (ind > 0) {
        curr = curr.next;
        ind--;
      }
      return curr;
    }
  
    searchByValue(value, startIndex = 0) {
      if (startIndex < 0 || startIndex >= this.size)
        throw new Error('wrong index');
      let curr = this.head;
      let ind = startIndex;
  
      while (ind > 0) {
        curr = curr.next;
        ind--;
      }
  
      while (curr) {
        if (curr.value === value) return curr;
        curr = curr.next;
      }
      return null;
    }
  
    addAtHead(value) {
      const node = createNode(value);
  
      if (this.head) {
        this.head.prev = node;
        node.next = this.head;
      }
  
      this.head = node;
  
      if (!this.tail) {
        this.tail = node;
      }
  
      this.size++;
    }
  
    addAtTail(value) {
      const node = createNode(value);
  
      if (this.tail) {
        node.prev = this.tail;
        this.tail.next = node;
      }
  
      this.tail = node;
  
      if (!this.head) {
        this.head = node;
      }
  
      this.size++;
    }
  }
  
  function createNode(value) {
    return {
      value,
      next: null,
      prev: null,
    };
}
