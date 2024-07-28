import './style.css';
import "./index.html";
import todo from "./todo.js";
import { todoPopUp, getFormData } from  "./todoPopUp.js";
import { projectFormData, projectPopUp } from './projectPopUp.js';
import project from './project.js';
import "./projectList.js"
import unchecked from "./img/unchecked.svg";
import checked from "./img/checked.svg";
import calendar from "./img/calendar.svg"

export const projectList = [];
const allToDos = new project(document.querySelector(".project").textContent.trim().replace(/^#\s+/, ''));
projectList.push(allToDos)
console.log(projectList);
console.log(projectList[0].projectName);
console.log(projectList[0].tasks);

document.addEventListener('click', function(event) {
    // Handle delete functionality
    const garbageBtn = event.target.closest('.garbageBtn');
    if (garbageBtn) {
        const todoContainer = garbageBtn.closest('.todo-container');
        const dataId = todoContainer.getAttribute('data-id');
        if (todoContainer) {
            const header = document.querySelector(".todo-header h1").textContent;
            projectList.forEach(element => {
                if(element.projectName === header || element.projectName === "All ToDos"){
                    element.tasks = element.tasks.filter(todo => todo.getId() !== dataId);
                }
            })
            todoContainer.remove();
        }
    }

    // Handle strike functionality
    const tickBtn = event.target.closest('.tickBtn');
    if (tickBtn) {
        const tickImg = tickBtn.querySelector('img');
        const todoTitle = tickBtn.nextElementSibling;
        const todoDescription = todoTitle.nextElementSibling.nextElementSibling;

        if (tickImg.src.includes(unchecked)) {
            tickImg.src = checked;
            todoTitle.classList.add('strikethrough');
            todoDescription.classList.add('strikethrough');
        } else {
            tickImg.src = unchecked;
            todoTitle.classList.remove('strikethrough');
            todoDescription.classList.remove('strikethrough');
        }
    }

    //Handle edit functionality
    const editBtn = event.target.closest('.editBtn');
    if (editBtn) {
        const editModal = document.getElementById('editModal');
        const editForm = document.getElementById('editForm');

        const todoContainer = editBtn.closest('.todo-container');
        const todoId = todoContainer.getAttribute('data-id');
        const title = todoContainer.querySelector('.todo-title').textContent;
        const description = todoContainer.querySelector('.todo-description').textContent;
        const dueDate = todoContainer.querySelector('.todo-dueDate').textContent.replace('Due Date', '').trim();

        editForm.querySelector('#todoId').value = todoId;
        editForm.querySelector('#title').value = title;
        editForm.querySelector('#description').value = description;
        editForm.querySelector('#dueDate').value = dueDate; // Ensure this is in yyyy-mm-dd format

        editModal.showModal();
    }

    const editForm = document.getElementById('editForm');
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const todoId = editForm.querySelector('#todoId').value;
        const title = editForm.querySelector('#title').value;
        const description = editForm.querySelector('#description').value;
        const dueDate = editForm.querySelector('#dueDate').value;

        const todoContainer = document.querySelector(`.todo-container[data-id="${todoId}"]`);
        todoContainer.querySelector('.todo-title').textContent = title;
        todoContainer.querySelector('.todo-description').textContent = description;
        todoContainer.querySelector('.todo-dueDate').innerHTML = `<img src="${calendar}"> ${dueDate}`;

        editModal.close();
    });

    //handle sidebar delete functionality
    const delBtn = event.target.closest('.del');
    if (delBtn) {
        const projectList = delBtn.closest('.project-list');
        if (projectList) {
            projectList.remove();
        }
    }
});

todoPopUp();
getFormData();
projectPopUp();
projectFormData();