var createTask = document.getElementById("addTask");
var index = 0;
//Counter
function counter() {
    document.querySelector("counter").innerHTML = "Tasks left: " + String(index);
}
//add Task
document.getElementById("submit").addEventListener("click", function () {
    if (createTask.value != "") {
        createNewTask();
        createTask.value = "";
    }
});
function createNewTask() {
    index++;
    counter();
    var Liste = document.getElementById("list");
    var newTask = document.createElement("div");
    newTask.className = "NewTask";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "TaskComplete";
    var label = document.createElement("label");
    label.innerHTML = createTask.value;
    label.className = "divLabel";
    var deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash-alt";
    //New Task wird erstellt
    Liste.appendChild(newTask);
    newTask.appendChild(checkbox);
    newTask.appendChild(label);
    newTask.appendChild(trashIcon);
    //delete
    deleteIcon.addEventListener("click", function () {
        Liste.removeChild(newTask);
        index--;
        counter();
    });
}
//# sourceMappingURL=skript_ToDo.js.map