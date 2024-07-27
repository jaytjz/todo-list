import add from "./img/add.svg";
import { todoPopUp } from  "./todoPopUp.js";
import { projectList } from "./index.js";
import { updateDisplay } from "./todoPopUp.js"

document.addEventListener("click", function(event) {
    const project = event.target.closest(".project");
    if(project) {

        let textContent = project.textContent.trim();
        textContent = textContent.replace(/^#\s+/, '');

        const content = document.querySelector(".content");
        content.innerHTML = `
            <div class="todo-header">
                <h1>${textContent}</h1>
                <button class="addTodo"><img src="${add}"></button>
            </div>
            <br>
        `;
        projectList.forEach(element => {
            if(element.projectName === textContent){
                element.tasks.forEach(todo => {
                    updateDisplay(todo);
                }); 
            }
        })
        todoPopUp();
    }
})