var todos=["Study javascript and jQuerry"];
var input=prompt("What would you like to do");

while(input!=="quit")
{
  if(input==="list")
  {
  	listTodos();
  }
  else if(input==="new")
  {
	addTodo();
  }
  else if(input==="delete")
  {
   deleteTodo();
  }
  var input=prompt("What would you like to do");
}

console.log("Ok, You quit the App");
//------------------------------------------------
function listTodos()
{
	console.log("================");
  	todos.forEach(function(todo, i)
  	{
	console.log(i + " : " + todo);
    });
    console.log("================");
}
function addTodo()
{
	var newtodo=prompt("Enter new todo");
	todos.push(newtodo);
	console.log("Todo Added");
}
function deleteTodo()
{
   var index=prompt("Enter index of todo to delete");
   todos.splice(index,1);
   console.log("Todo Deleted");
}
//----------------------------------------------------