function DFS(node, value) {
    if (node.value === value) {
        return node;
    }

    for (let i = 0; i < node.children.length; i++) {
        const found = DFS(node.children[i], value);
        
        if (found) {
            return found;
        }
    }
    
    return undefined;
}
