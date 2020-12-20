var userInput = document.getElementById("addTask");
var index = 0;
//Counter
function counter() {
    document.querySelector("counter").innerHTML = "Tasks left: " + String(index);
}
//add Task
document.getElementById("submit").addEventListener("click", function () {
    if (userInput.value != "") {
        newTask();
        userInput.value = "";
    }
});
function newTask() {
    index++;
    counter();
    var box = document.getElementById("list");
    var newTask = document.createElement("div");
    newTask.className = "NewTask";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "CheckBox";
    var label = document.createElement("label");
    label.innerHTML = userInput.value;
    label.className = "divLabel";
    var deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash-alt";
    box.appendChild(newTask);
    newTask.appendChild(checkbox);
    newTask.appendChild(label);
    newTask.appendChild(trashIcon);
    //delete
    deleteIcon.addEventListener("click", function () {
        box.removeChild(newTask);
        index--;
        counter();
    });
}
//# sourceMappingURL=skript_ToDo.js.map