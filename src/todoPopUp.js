import { todo } from "./todo.js";

export const addDialog = function () {
    const body = document.querySelector("body");
    const dialog = document.createElement("dialog");
    dialog.id = "myModal";
    dialog.innerHTML = `
        <header>
            <h1>Add ToDo</h1>
        </header>
        <form id="todoForm">
            <label for="title"></label>
            <input type="text" id="title" placeholder="Title">

            <label for="description"></label>
            <input type="text" id="description" placeholder="Description">

            <label for="dueDate"></label>
            <input type="date" id="dueDate">

            <label for="priority">Priority Level:</label>
            <select id="priority" name="priority">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <button type="submit">Submit</button>
        </form>
    `;

    body.append(dialog);
};

export const openForm = function () {
    var modal = document.getElementById("myModal");
    var addBtn = document.querySelector(".addTodo");

    addBtn.onclick = function() {
        modal.showModal();
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.close();
        }
    };
}

export const getFormData = function () {
    var form = document.getElementById("todoForm");
    form.addEventListener("submit", function(event){
        event.preventDefault();

        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const dueDate = document.getElementById("dueDate").value;
        const priority = document.getElementById("priority").value;

        const newTodo = new todo(title, description, dueDate, priority);
        console.log(newTodo);

        updateDisplay(newTodo);

        var modal = document.getElementById("myModal");
        modal.close();
    })
}

export const updateDisplay = function () {
    const content = document.querySelector(".content");

    const data = getFormData();

    const display = document.createElement("div");
    display.classList.add("todo-container");

    display.innerHTML = `
        <button class="tickBtn"><img src="img/unchecked.svg" alt="Unchecked"></button>
        <h2 class="todo-title">${newTodo.getTitle()}</h2>
        <p class="todo-priority">Priority: ${newTodo.getPriority()}</p>
        <p class="todo-description">${newTodo.getDescription()}</p>
        <p class="todo-dueDate">
            <button class="calendarBtn"><img src="img/calendar.svg" alt="Calendar"></button> 
            Due Date: ${newTodo.getDueDate()}
        </p>
        <button class="garbageBtn"><img src="img/garbage.svg" alt="Garbage"></button>
        <div class="hr"><hr></div>
    `
    content.appendChild(display);

}