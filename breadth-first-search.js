function BFS(root, value) {
    const queue = [root];

    while (queue.length) {
        const node = queue.shift();

        if (node.value === value) {
            return node;
        }

        queue.push(...node.children);
    }

    return undefined;
}
