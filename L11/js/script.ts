//gemeinsame Nenner der Objekte als Interface deklarieren, danach Objekt "Aufgabe_Array" erstellen
interface Aufgabe {
    name: string;
    checked: boolean;
}

var Aufgaben_Array: Aufgabe[] = [
    {
    name: "neue Folge AOT schauen",
    checked: true,
},
    {
    name: "Medienanalyse lernen",
    checked: false,
},
    {
    name: "Zimmer aufräumen -.-",
    checked: false,
},  
]

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var doneDOMElement: HTMLElement;
var leftDOMElement: HTMLElement;

window.addEventListener("load", function(): void {

    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    doneDOMElement = document.querySelector("#done");
    leftDOMElement = document.querySelector("#left");

    addButtonDOMElement.addEventListener("click", addTodo);

    drawListToDOM();
});

function drawListToDOM(): void {
    // alle todos erst einmal aus dem DOM löschen
    todosDOMElement.innerHTML = "";

    // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
    for (let index: number = 0; index < Aufgaben_Array.length; index++) {
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + Aufgaben_Array[index].checked + "'><i class='fas fa-check'></i></span>"
                            + Aufgaben_Array[index].name +
                            "<span class='trash fas fa-trash-alt'></span>";

        // Zuweisen der Event-Listener für den Check- und den Trash-Button
        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    }

    updateCounter();
    updatedone();
    updateleft();
}

function updateCounter(): void {
    counterDOMElement.innerHTML = Aufgaben_Array.length + " in total";
}

//Counter für "Done"
function updatedone(): void {
    var done = 0;
    for (var index=0; index < Aufgaben_Array.length; index++) {
        if (Aufgaben_Array[index].checked == true)
        done++;
    }
    
    doneDOMElement.innerHTML = done + " done";
}

//Counter für "Left"
function updateleft(): void {
    var left = 0;
    for (var index=0; index < Aufgaben_Array.length; index++) {
        if (Aufgaben_Array[index].checked == false)
        left++
    }

    leftDOMElement.innerHTML = left + " left";
}

function addTodo(): void {
    if (inputDOMElement.value != "") {
        Aufgaben_Array.unshift({
            name: inputDOMElement.value,
            checked: false
        });
        
        inputDOMElement.value = "";

        drawListToDOM();
    }
}

function toggleCheckState(index: number): void {
    Aufgaben_Array[index].checked = !Aufgaben_Array[index].checked;
    drawListToDOM();
}

function deleteTodo(index: number): void {
    Aufgaben_Array.splice(index, 1);
    drawListToDOM();
}