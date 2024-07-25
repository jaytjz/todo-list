import './style.css';
import "./index.html";
import { todo } from "./todo.js";
import { todoPopUp, getFormData } from  "./todoPopUp.js";
import unchecked from "./img/unchecked.svg";
import checked from "./img/checked.svg";

todoPopUp();
getFormData();

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
});
