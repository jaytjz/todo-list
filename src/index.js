import './style.css';
import "./index.html";
import { todoPopUp, getFormData } from  "./todoPopUp.js";
import { projectFormData, projectPopUp } from './projectPopUp.js';
import unchecked from "./img/unchecked.svg";
import checked from "./img/checked.svg";
import calendar from "./img/calendar.svg"

document.addEventListener('click', function(event) {
    // Handle delete functionality
    const garbageBtn = event.target.closest('.garbageBtn');
    if (garbageBtn) {
        const todoContainer = garbageBtn.closest('.todo-container');
        if (todoContainer) {
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

    //handle sidebar delete functionality
    const delBtn = event.target.closest('.del');
    if (delBtn) {
        const projectList = delBtn.closest('.project-list');
        if (projectList) {
            projectList.remove();
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
        const priority = 'medium';

        editForm.querySelector('#todoId').value = todoId;
        editForm.querySelector('#title').value = title;
        editForm.querySelector('#description').value = description;
        editForm.querySelector('#dueDate').value = dueDate; // Ensure this is in yyyy-mm-dd format
        editForm.querySelector('#priority').value = priority;

        editModal.showModal();
    }

    const editForm = document.getElementById('editForm');
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const todoId = editForm.querySelector('#todoId').value;
        const title = editForm.querySelector('#title').value;
        const description = editForm.querySelector('#description').value;
        const dueDate = editForm.querySelector('#dueDate').value;
        const priority = editForm.querySelector('#priority').value;

        const todoContainer = document.querySelector(`.todo-container[data-id="${todoId}"]`);
        todoContainer.querySelector('.todo-title').textContent = title;
        todoContainer.querySelector('.todo-description').textContent = description;
        todoContainer.querySelector('.todo-dueDate').innerHTML = `<img src="${calendar}"> ${dueDate}`;

        editModal.close();
    });
});

todoPopUp();
getFormData();
projectPopUp();
projectFormData();