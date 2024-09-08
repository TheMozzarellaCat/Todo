const taskText = document.querySelector("#add-task");
let isFirstTask = true; // Flag to track the first task

taskText.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        createTask();
        taskText.value = "";
    }
});

function createTask() {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add("task-background");

    if (isFirstTask) {
        taskContainer.classList.add("first-task"); // Add a special class for the first task
        isFirstTask = false; // Set flag to false after the first task is created
    }

    taskContainer.innerHTML = `
    <div class="check-task">
        <input type="checkbox" class="checkbox">
        <p class="task-text">${taskText.value}</p>
    </div>
    <div class="close-task-icon"></div>`;
    
    const container = document.querySelector(".todo-list-container");
    container.appendChild(taskContainer);
}
