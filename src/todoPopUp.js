import { todo } from "./todo.js";
import unchecked from "./img/unchecked.svg"
import calendar from "./img/calendar.svg"
import garbage from "./img/garbage.svg"

function setDefaultDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    const dateString = `${year}-${month}-${day}`;
    document.getElementById('dueDate').value = dateString;
}

const updateDisplay = function (newTodo) {
    const content = document.querySelector(".content");

    const display = document.createElement("div");
    display.classList.add("todo-container");

    display.innerHTML = `
        <button class="tickBtn"><img src="${unchecked}" alt="Unchecked"></button>
        <h2 class="todo-title">${newTodo.getTitle()}</h2>
        <p class="todo-priority">Priority: ${newTodo.getPriority()}</p>
        <p class="todo-description">${newTodo.getDescription()}</p>
        <p class="todo-dueDate">
            <button class="calendarBtn"><img src="${calendar}" alt="Calendar"></button> 
            ${newTodo.getDueDate()}
        </p>
        <button class="garbageBtn"><img src="${garbage}" alt="Garbage"></button>
        <div class="hr"><hr></div>
    `
    content.appendChild(display);

}

export const getFormData = function () {
    var form = document.getElementById("todoForm");
    setDefaultDate();

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const dueDate = document.getElementById("dueDate").value;
        const priority = document.getElementById("priority").value;

        const newTodo = new todo(title, description, dueDate, priority);
        console.log(newTodo);

        updateDisplay(newTodo);

        var modal = document.getElementById("todoModal");
        modal.close();

        this.reset();
        setDefaultDate();
    })
}

export const todoPopUp = function () {
    document.querySelector(".addTodo").addEventListener("click", () => {
        var modal = document.getElementById("todoModal");

        modal.showModal();
    
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.close();
            }
        };
    })
}