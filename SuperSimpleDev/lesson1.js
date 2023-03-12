let todos = ["Get groceries", "Wash car", "Make dinner", "Do laundry"];

todos.forEach(function (todoTitle) {
    let element = document.createElement("div");
    element.innerText = todoTitle;
    document.body.appendChild(element);
});

// Exercise 7

//1

// function toUpper(stringArray) {
//     let newArray = [];

//     stringArray.forEach(function (string) {
//         newArray.push(string.toUpperCase());
//     });

//     console.log(newArray);
// }

// toUpper(["hello", "my", "name", "is ", "dipak"]);

//2

// function arrayDouble(arrOfStrings) {
//     let doubledArray = [];

//     arrOfStrings.forEach(function (string) {
//         doubledArray.push(string);
//         doubledArray.push(string);
//     });
//     console.log(doubledArray);
// }

// arrayDouble(["bark", "meow"]);

// 3

function arraySum(arrayNum) {
    let sum = 0;

    arrayNum.forEach(function (num) {
        sum = sum + num;
    });

    console.log(sum);
}

arraySum([1, 2, 3]);
