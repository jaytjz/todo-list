export class todo{
    #id;
    #title;
    #description;
    #dueDate;

    constructor(title, description, dueDate) {
        this.#id = this.generateId();
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
    }

    generateId() {
        return `todo-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    }

    getId() {
        return this.#id;
    }

    getTitle() {
        return this.#title;
    }

    getDescription() {
        return this.#description;
    }

    getDueDate() {
        return this.#dueDate;
    }
}