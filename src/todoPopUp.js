import { todo } from "./todo.js";
import unchecked from "./img/unchecked.svg"
import calendar from "./img/calendar.svg"
import garbage from "./img/garbage.svg"
import edit from "./img/edit.svg"
import { projectList } from "./index.js";

function setDefaultDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    const dateString = `${year}-${month}-${day}`;
    document.getElementById('dueDate').value = dateString;
}

export const updateDisplay = function (newTodo) {
    const content = document.querySelector(".content");

    const display = document.createElement("div");
    display.classList.add("todo-container");

    const todoId = newTodo.getId(); 
    display.setAttribute("data-id", todoId);

    display.innerHTML = `
        <button class="tickBtn"><img src="${unchecked}" alt="Unchecked"></button>
        <h2 class="todo-title">${newTodo.getTitle()}</h2>
        <button class="editBtn"><img src="${edit}"></button>
        <p class="todo-description">${newTodo.getDescription()}</p>
        <p class="todo-dueDate">
            <img src="${calendar}" alt="Calendar">
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

        var header = document.querySelector(".todo-header h1").textContent;

        const newTodo = new todo(title, description, dueDate);
        projectList[0].tasks.push(newTodo);
        console.log(projectList[0].tasks);

        projectList.forEach(element => {
            if(element.projectName === header && element.projectName !== "All ToDos"){
                element.tasks.push(newTodo);
            }
        })

        updateDisplay(newTodo);

        var modal = document.getElementById("todoModal");

        this.reset();
        setDefaultDate();

        modal.close();
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