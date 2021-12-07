class NodeStore {
    static VALUE_KEY = '__index'
    nodeList = []
    valueList = []

    set(node, value) {
        node[NodeStore.VALUE_KEY] = this.nodeList.length
        this.nodeList.push(node)
        this.valueList.push(value)
    }

    /**
   * @param {Node} node
   * @return {any}
   */
    get(node) {
        if (NodeStore.VALUE_KEY in node) {
        return this.valueList[node[NodeStore.VALUE_KEY]]
        }
        return undefined
    }
    /**
     * @param {Node} node
     * @return {Boolean}
     */
    has(node) {
        return NodeStore.VALUE_KEY in node
    }
}