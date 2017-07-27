var todos = ["Buy turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit") {
  if(input === "list") {
    alert(todos);
  } else if (input === "new") {
    var addNewTodo = prompt("Add new todo!");
    todos.push(addNewTodo);
  }
  input = prompt("What would you like to do?");
}
alert("You quit the app!");