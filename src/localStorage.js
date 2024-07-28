import { projectList } from ".";
import { todo } from "./todo";
import { updateDisplay } from "./todoPopUp";
import project from "./project";

export const saveToLocalStorage = function() {
    const projectsToSave = projectList.map(project => ({
        projectName: project.projectName,
        tasks: project.tasks.map(task => ({
            id: task.getId(),
            title: task.getTitle(),
            description: task.getDescription(),
            dueDate: task.getDueDate(),
        }))
    }));
    localStorage.setItem('projectList', JSON.stringify(projectsToSave));
}

export const loadFromLocalStorage = function() {
    const storedProjects = localStorage.getItem('projectList');
    if (storedProjects) {
        console.log(storedProjects);
        const parsedProjects = JSON.parse(storedProjects);
        parsedProjects.forEach(projectData => {
            console.log(projectData);
            const projectObj = new project(projectData.projectName);
            projectObj.tasks = projectData.tasks.map(taskData => {
                const task = new todo(taskData.title, taskData.description, taskData.dueDate);
                return task;
            });
            projectList.push(projectObj);
            projectObj.tasks.forEach(task => updateDisplay(task));
        });
    }
}