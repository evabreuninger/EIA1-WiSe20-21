let userInput: HTMLInputElement = (document.getElementById("addTask") as HTMLInputElement);
let index: number = 0;

//Counter
function counter(): void {
    document.querySelector("counter").innerHTML = "Tasks left: " + String(index);
}

//add Task

document.getElementById("submit").addEventListener ("click", function(): void { 
    if (userInput.value != "") {
     newTask ();
    userInput.value = ""; 
}});

function newTask(): void {
    index++;
    counter();

    let box: HTMLElement = document.getElementById("list");
    let newTask: HTMLDivElement = document.createElement("div");
    newTask.className = "NewTask";

    let checkbox: HTMLInputElement = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "CheckBox";

    let label: HTMLElement = document.createElement("label");
    label.innerHTML = userInput.value;
    label.className = "divLabel";

    let deleteIcon: HTMLElement = document.createElement("i");
    deleteIcon.className = "fas fa-trash-alt";

    box.appendChild(newTask);
    newTask.appendChild(checkbox);
    newTask.appendChild(label);
    newTask.appendChild(trashIcon);

    //delete
    deleteIcon.addEventListener("click", function (): void {
        box.removeChild(newTask);
        index--;
        counter();
    });

}

