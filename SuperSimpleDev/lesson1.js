let todo1 = "Get groceries";
let todo2 = "Wash car";
let todo3 = "Make dinner";
let click_me = "Click Me";

function addTodo(todoTitle) {
    let element = document.createElement("div");
    element.innerText = todoTitle;
    document.body.appendChild(element);
}

addTodo(todo1);
addTodo(todo2);
addTodo(todo3);

element = document.createElement("button");
element.innerText = click_me;
document.body.append(element);

// exercise 6

function greeting(firstName) {
    console.log("Hello " + firstName);
}

greeting("Dipak");

function toUpper(str) {
    let result = str.toUpperCase();

    console.log(result);
}

toUpper("dipak");

function convertLength(length) {
    let length_in_cm = length * 2.5;
    console.log(length_in_cm);
}

convertLength(12);
