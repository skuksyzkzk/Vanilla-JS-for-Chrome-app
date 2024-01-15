const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
function deleteTodo(event){
    const deli = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(deli.id));
    deli.remove();
    saveTodos();
}

function paintTodo(todo) {
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    span.innerText = todo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id : Date.now(),
    };
    //toDos.push(newTodo); 텍스트 
    toDos.push(newTodoObj);
    //paintTodo(newTodo); 단순히 텍스트만 
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener('submit',handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(saveTodos){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);// js 에서 알아서 넣어줌 item을 
}