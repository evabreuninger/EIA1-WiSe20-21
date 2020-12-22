var zahl: number = 0;
var userTask: any = document.getElementById("newTask");

var checkInputBool: boolean = false;
var preventEvent: boolean = false;

//Eingabe durch Entertaste
document.addEventListener("keydown", function(event: KeyboardEvent): void {
    if (event.keyCode == 13 && checkInputBool == true) {
            createTask();
            setTimeout(function(): void {
                clearInput();
            }, 100);
            preventEvent = false;
    }
});

document.addEventListener("click", function(): void {
    if (preventEvent == false) {
    checkInputBool = false;
    }
});
userTask.addEventListener("click", function(): void {
    checkInputBool = true;
    preventEvent = true;
});

//Neuen Task anlegen
function createTask (): void {  
    let container: HTMLDivElement = document.createElement("div");
    let icon1: HTMLElement = document.createElement("i");
    icon1.className = "far fa-square";
    let icon2: HTMLElement = document.createElement("i");
    icon2.className = "far fa-check-square isHidden";
    let text: HTMLSpanElement = document.createElement("span");
    text.className = "task-text";
    text.innerHTML = userTask.value;
    let icon3: HTMLElement = document.createElement("i");
    icon3.className = "fas fa-trash-alt";
  
    document.body.appendChild(container);
    container.appendChild(icon1);
    container.appendChild(icon2);
    container.appendChild(text);
    container.appendChild(icon3);

    zahl = zahl + 1;
    counter();
    
    icon1.addEventListener("click", function(): void {
        icon1.classList.add("isHidden");
        icon2.classList.remove("isHidden");
    });
    icon2.addEventListener("click", function(): void {
        icon2.classList.add("isHidden");
        icon1.classList.remove("isHidden");
    });
    icon3.addEventListener("click", function(): void {
        document.body.removeChild(container);
        zahl = zahl - 1;
        counter();
    });
}

function counter(): void {
    document.querySelector("#counter").innerHTML = zahl + " tasks are";
}

function clearInput(): void {
    userTask.value = "";
}