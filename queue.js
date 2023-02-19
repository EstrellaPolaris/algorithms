class Queue {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    enqueue(value) {
        const node = { value, next: null, prev: null };

        node.prev = this.tail;

        if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = this.tail = node;
        }

        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Impossible remove from empty queue');
        }

        const node = this.head;
        const nextNode = node.next;

        if (nextNode) {
            node.next = null;
            nextNode.prev = null;
        }

        this.head = nextNode;

        if (this.tail === node) {
            this.tail = nextNode;
        }

        this.size--;

        return node;
    }

    peek() {
        return this.head;
    }

    isEmpty() {
        return this.head === null;
    }
}
