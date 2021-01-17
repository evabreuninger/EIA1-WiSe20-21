var Aufgaben_Array = [
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
];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var doneDOMElement;
var leftDOMElement;
inputDOMElement = document.querySelector("#inputTodo");
addButtonDOMElement = document.querySelector("#addButton");
todosDOMElement = document.querySelector("#todos");
counterDOMElement = document.querySelector("#counter");
doneDOMElement = document.querySelector("#done");
leftDOMElement = document.querySelector("#left");
addButtonDOMElement.addEventListener("click", addTodo);
drawListToDOM();
function drawListToDOM() {
    // alle todos erst einmal aus dem DOM löschen
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index_1) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + Aufgaben_Array[index_1].checked + "'><i class='fas fa-check'></i></span>"
            + Aufgaben_Array[index_1].name +
            "<span class='trash fas fa-trash-alt'></span>";
        // Zuweisen der Event-Listener für den Check- und den Trash-Button
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index_1);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index_1);
        });
        todosDOMElement.appendChild(todo);
    };
    // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
    for (var index_1 = 0; index_1 < Aufgaben_Array.length; index_1++) {
        _loop_1(index_1);
    }
    updateCounter();
    updatedone();
    updateleft();
}
function updateCounter() {
    counterDOMElement.innerHTML = Aufgaben_Array.length + " in total";
}
//Counter für "Done"
function updatedone() {
    var done = 0;
    for (var index = 0; index < Aufgaben_Array.length; index++) {
        if (Aufgaben_Array[index].checked == true)
            done++;
    }
    doneDOMElement.innerHTML = done + " done";
}
//Counter für "Left"
function updateleft() {
    var left = 0;
    for (var index = 0; index < Aufgaben_Array.length; index++) {
        if (Aufgaben_Array[index].checked == false)
            left++;
    }
    leftDOMElement.innerHTML = left + " left";
}
function addTodo() {
    if (inputDOMElement.value != "") {
        Aufgaben_Array.unshift({
            name: inputDOMElement.value,
            checked: false
        });
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    Aufgaben_Array[index].checked = !Aufgaben_Array[index].checked;
    drawListToDOM();
}
function deleteTodo(index) {
    Aufgaben_Array.splice(index, 1);
    drawListToDOM();
}
var artyom = new Artyom();
document.querySelector("#micro").addEventListener("click", function () {
    artyom.addCommands([
        {
            indexes: ["Erstelle Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                console.log(wildcard);
                Aufgaben_Array.unshift({
                    name: wildcard,
                    checked: false
                });
                drawListToDOM();
            }
        }
    ]);
    artyom.initialize({
        debug: true,
        continuous: true,
        lang: "de-DE",
        listen: true
    }).then(function () {
        console.log("Ready!");
        artyom.when("NOT_COMMAND_MATCHED"), function () {
            artyom.say("Ich konnte dich leider nicht verstehen");
        };
    });
});
document.querySelector("#stop").addEventListener("click", function () {
    // Stop Artyom
    // fatality -> Erlaubt Deaktivierung
    artyom.fatality().then(function () {
        console.log("Artyom wurde erfolgreich gestoppt");
        artyom.say("Ich wollte dir doch noch zuhören, dann halt nicht");
    });
});
//# sourceMappingURL=script11.js.map