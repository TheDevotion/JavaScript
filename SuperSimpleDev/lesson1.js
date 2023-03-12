// let todos = ["Get groceries", "Wash car", "Make dinner"];

// todos.forEach(function (todoTitle) {
//     let element = document.createElement("div");
//     element.innerText = todoTitle;
//     document.body.appendChild(element);
// });

// function addTodo() {
//     let textbox = document.getElementById("todo-title");
//     let title = textbox.value;
//     todos.push(title);
// }

//exercise 8

// function changeToDone(newText) {
//     let button = document.getElementById("todo-button");
//     button.innerText = "Done";
// }

// 2

// let count = 0;

// function increaseCounter() {
//     count = count + 1;
//     updateCount();
// }

// function decreaseCounter() {
//     count = count - 1;
//     updateCount();
// }

// function updateCount() {
//     let counter = document.getElementById("counter");
//     counter.innerText = count;
// }

function Display() {
    let textbox = document.getElementById("userInput");

    let title = textbox.value;

    let div = document.createElement("div");
    div.innerText = title;
    document.body.appendChild(div);
}
