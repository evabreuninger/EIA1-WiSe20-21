let createTask: HTMLInputElement = (document.getElementById("addTask") as HTMLInputElement);
let index: number = 0;

//Counter
function counter(): void {
    document.querySelector("counter").innerHTML = "Tasks left: " + String(index);
}

//add Task

document.getElementById("submit").addEventListener ("click", function(): void { 
    if (createTask.value != "") {
    createNewTask ();
     createTask.value = ""; 
}});

function createNewTask(): void {
    index++;
    counter();

    let taskList: HTMLElement = document.getElementById("taskList");
    let newTask: HTMLDivElement = document.createElement("div");
    newTask.className = "NewTask";

    let checkbox: HTMLInputElement = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "TaskComplete";

    let label: HTMLElement = document.createElement("label");
    label.innerHTML = createTask.value;
    label.className = "divLabel";

    let deleteIcon: HTMLElement = document.createElement("i");
    deleteIcon.className = "fas fa-trash-alt";

    //New Task wird erstellt
    taskList.appendChild(newTask);
    newTask.appendChild(checkbox);
    newTask.appendChild(label);
    newTask.appendChild(trashIcon);

    //delete
    deleteIcon.addEventListener("click", function (): void {
        taskList.removeChild(newTask);
        index--;
        counter();
    });

}

