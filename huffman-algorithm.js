// Data compression.

function huffman(str) {
    // calculate the frequency of repetition of each character
    const rates = getRates(str);
    // create a priority queue filled with nodes for each character
    const queue = buildQueue(rates);

    while(queue.size > 1) {
        // take two elements from the queue
        const [ rightNode, rightPriority ] = queue.pop();
        const [ leftNode, leftPriority ] = queue.pop();

        // create a new tree node, calculate its priority and put it in the queue
        const newNode = { left: leftNode, right: rightNode };
        const newPriority = rightPriority + leftPriority;

        queue.push(newNode, newPriority);
    }

    // the last remaining node will be the root of the tree
    const [ rootNode ] = queue.pop();

    // build a hash table with a code for each character
    const codes = getCodes(rootNode);

    // encode string
    const encodedStr = getEncodedStr(str, codes);

    // return result
    return { codes, encodedStr };
}

// Counts the repetition frequency of each character
// Returns an object in the format { [char]: count }
function getRates(str) {
    const rate = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        rate[char] = rate[char] || 0;
        rate[char]++;
    }

    return rate;
}

// Creates a priority queue filled with nodes for each character from the keys of the rates object
// Node format — { value: symbol, left: null, right: null }
function buildQueue(rates) {
    const queue = new PirorityQueue();

    Object.keys(rates).forEach(key => {
        queue.push({ value: key, left: null, right: null }, rates[key]);
    });

    return queue;
}

// Build a hash table with the code for each character, recursively traversing the tree
// Returns an object in the format { [char]: code }, where code is a string of zeros and ones
function getCodes(node, codes = {}, code = '') {

    // if there are no children, this is a sheet, we write the value to the table
    if (!node.left && !node.right) {
        codes[node.value] = code;
    } else {

        // traverse the left and right parts of the tree
        // adding the necessary bit to the code depending on the direction
        getCodes(node.left, codes, code + '1');
        getCodes(node.right, codes, code + '0');
    }

    return codes;
}

// Encodes a string according to the code table and returns the result
function getEncodedStr(str, codes) {
    let encodedStr = '';

    for (let i = 0; i < str.length; i++) {
        encodedStr += codes[str[i]];
    }

    return encodedStr;
}

// Native implementation of a priority queue to save time
class PirorityQueue {
    constructor() {
        this.nodes = [];
        this.priority = new Map();
    }

    push(node, priority) {
        if (!this.priority.has(node)) {
            this.nodes.push(node);
        }

        this.priority.set(node, priority);
        this.nodes.sort((a, b) => this.priority.get(b) - this.priority.get(a));
    }

    pop() {
        if (!this.nodes.length) {
            return undefined;
        }

        const node = this.nodes.pop();
        const priority = this.priority.get(node);

        return [ node, priority ];
    }

    get size() {
        return this.nodes.length;
    }
}
