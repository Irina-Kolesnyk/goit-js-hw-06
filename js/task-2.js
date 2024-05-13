class Storage {
    #items;
    constructor(params) {
        this.#items = params.items;
    }
    getItems() {
        return this.#items;
    }
    addItem(newItem) {
        this.#items = newItem;
    }
    removeItem(itemToRemove) {
        
    }
}