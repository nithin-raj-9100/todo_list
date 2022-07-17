//Selectors
const todoInput = document.querySelector(".input");
const todoButton = document.querySelector(".button");
const todoList = document.querySelector(".list");
const divEl = document.querySelector(".ul");
todoInput.focus();

//Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//functions

function addTodo(event) {
  //Preventing form from submitting
  event.preventDefault();
  //Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Creating li
  const todoLi = document.createElement("li");
  todoLi.innerText = todoInput.value;
  todoList.classList.add = "todo-item";
  todoDiv.appendChild(todoLi);
  const task = todoInput.value;
  if (task.trim() === "") {
    alert("Enter a todo");
    todoInput.focus();
    return;
  }

  //Complete button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //append
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //Delete todo
  if (item.classList[0] === "trash-btn") {
    let todo = item.parentElement;
    todo.remove();
  }
  if (item.classList[0] === "complete-btn") {
    let todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
