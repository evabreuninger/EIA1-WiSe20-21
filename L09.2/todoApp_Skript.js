var zahl = 0;
var userTask = document.getElementById("newTask");
var checkInputBool = false;
var preventEvent = false;
document.addEventListener("keydown", function (event) {
    if (event.keyCode == 13 && checkInputBool == true) {
        createTask();
        setTimeout(function () {
            clearInput();
        }, 100);
        preventEvent = false;
    }
});
document.addEventListener("click", function () {
    if (preventEvent == false) {
        checkInputBool = false;
    }
});
userTask.addEventListener("click", function () {
    checkInputBool = true;
    preventEvent = true;
});
function createTask() {
    var container = document.createElement("div");
    var icon1 = document.createElement("i");
    icon1.className = "far fa-square";
    var icon2 = document.createElement("i");
    icon2.className = "far fa-check-square isHidden";
    var text = document.createElement("span");
    text.className = "task-text";
    text.innerHTML = userTask.value;
    var icon3 = document.createElement("i");
    icon3.className = "fas fa-trash-alt";
    document.body.appendChild(container);
    container.appendChild(icon1);
    container.appendChild(icon2);
    container.appendChild(text);
    container.appendChild(icon3);
    zahl = zahl + 1;
    counter();
    icon1.addEventListener("click", function () {
        icon1.classList.add("isHidden");
        icon2.classList.remove("isHidden");
    });
    icon2.addEventListener("click", function () {
        icon2.classList.add("isHidden");
        icon1.classList.remove("isHidden");
    });
    icon3.addEventListener("click", function () {
        document.body.removeChild(container);
        zahl = zahl - 1;
        counter();
    });
}
function counter() {
    document.querySelector("#counter").innerHTML = zahl + " tasks are";
}
function clearInput() {
    userTask.value = "";
}
//# sourceMappingURL=todoApp_Skript.js.map