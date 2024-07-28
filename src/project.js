export default class project { 
    constructor(projectName) {
        this.projectName = projectName;
        this.tasks = [];
    };

    addProjectToList(projectList) {
        projectList.push(this);
    };
};