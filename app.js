"use strict";
let counterTasks = 0;
let tasks = [];
function addTask(task) {
    const inputField = document.getElementById("inputField");
    const taskInput = inputField.value;
    tasks.push(taskInput);
    renderTasks();
    counterTasks++;
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    for (let i = counterTasks; i < tasks.length; i++) {
        const taskItem = tasks[i];
        const p = document.createElement('p');
        p.textContent = taskItem;
        taskList.appendChild(p);
    }
}



const button = document.getElementById("addButton");
button.addEventListener('click', addTask);

