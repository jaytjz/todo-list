import del from "./img/delete.svg"
import { projectList } from ".";
import project from "./project";
import { saveToLocalStorage } from "./localStorage";

const updateSidebar = function (project) {
    const nav = document.querySelector("nav");
    const div = document.createElement("div");
    div.classList.add("project-list");
    div.innerHTML = `
    <button class="project"> # &nbsp; ${project}</button>
    <button class="del"><img src="${del}"></button>
    `
    nav.appendChild(div);
}

export const projectFormData = function () {
    var form = document.getElementById("projectForm");
    form.addEventListener("submit", function(event){
        event.preventDefault();

        const projectVal = document.getElementById("project").value;
        updateSidebar(projectVal);
        projectList.push(new project(projectVal));
        console.log(projectList);

        var modal = document.getElementById("projectModal");

        this.reset();
        modal.close();
        saveToLocalStorage();
    })
}

export const projectPopUp = function () {
    document.querySelector(".add").addEventListener("click", () => {
        var modal = document.getElementById("projectModal");
        modal.showModal();
    
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.close();
            }
        };
    })
}