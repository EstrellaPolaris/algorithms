class BST {
    constructor() {
        this.root = null;
    }

    // Creates a node with the value and puts it in the tree
    add(value) {
        const newNode = { value, left: null, right: null };

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.addNode(this.root, newNode);
        }
    }

    // Helper method to add newNode as a child to node
    addNode(node, newNode) {

        // there is already a node with this value
        if (newNode.value === node.value) {
            return;
        }

        if (newNode.value < node.value) { // add a node on the left

            if (node.left === null) { // if there is no element on the left, assign newNode
                node.left = newNode;
            } else {
                // if there is, recursively call the insert node on the left side
                this.addNode(node.left, newNode);
            }
        } else { // add a node on the right
            if (node.right === null) { // if there is no element on the right, assign newNode
                node.right = newNode;
            } else { // if there is, recursively call the insertion of the node on the right side
                this.addNode(node.right, newNode);
            }
        }
    }

    // Removes the node with the value value from the tree
    remove(value) {
        this.root = this.removeNode(this.root, value);
    }

    // Helper method to remove the vertex with the value value
    // from the tree from the top node. Returns a new vertex to replace node
    removeNode(node, value) {
        if (node === null) { // if top is null
            return null;
        }

        // if the vertex value is equal to the value to be removed
        if (value === node.value) {
            if (node.left === null && node.right === null) {
                // if there are no children, the top should become null
                return null;
            } else if (node.left === null){ // if there are no children on the left, replace the vertex with the right child
                return node.right;
            } else if(node.right === null) { // if there are no children on the right, replace the vertex with the left child
                return node.left;
            } else { // if both children exist, look for the maximum element on the left
                const max = this.findMax(node.left);

                node.value = max.value;

                // start deleting the value on the left side
                node.left = this.removeNode(node.left, max.value);

                return node;
            }
        }

        if (value < node.value) { // if the value is less, recursively remove the value from the left side
            node.left = this.removeNode(node.left, value);
        } else { // if the value is greater, recursively remove the value from the right side
            node.right = this.removeNode(node.right, value);
        }

        return node;
    }

    // Searching for the maximum element starting from the top node
    findMax(node) {
       while(node && node.right) {
           node = node.right;
       }

       return node;
    }

    // Returns the element whose value is equal to value
    // If the element is not found, returns null
    find(value) {
        let node = this.root;

        while (node && node.value !== value) {
            if (value > node.value) {
                node = node.right;
            } else {
                node = node.left;
            }
        }

        return node;
    }
}
