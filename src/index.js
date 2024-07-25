import './style.css';
import "./index.html";
import { addDialog, openForm ,getFormData, updateDisplay} from  "./todoPopUp.js"

document.addEventListener("DOMContentLoaded", function() {
    addDialog();
    openForm();
    getFormData();
    updateDisplay();
});