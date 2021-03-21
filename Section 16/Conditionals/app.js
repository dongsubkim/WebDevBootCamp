const ToDoList = [];

let userInput = prompt("What would you like to do?");

while (true) {
    if (userInput === "new") {
        let item = prompt("Enter new todos");
        ToDoList.push(item);
        console.log(`${item} added to list`);
    } else if (userInput == "list") {
        console.log("********************");
        for (let i = 0; i < ToDoList.length; i++) {
            console.log(`${i}: ${ToDoList[i]}`);
        }
        console.log("********************");
    } else if (userInput == "delete") {
        let index = parseInt(prompt("Enter index of todo to delete"));
        if (!Number.isNaN(index)) {
            ToDoList.splice(index, 1);
            console.log("Todo Removed");
        } else {
            console.log("Unknown Index")
        }
    } else if (userInput == "quit") {
        break
    }
    userInput = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");