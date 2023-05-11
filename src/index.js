import './main.css';

// Vars
const form = document.querySelector('#todoform');
const todoInput = document.querySelector('#newtodo');
const todosListEl = document.querySelector('#todos-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let editTodoId = -1;
let todoId = -100;

// functions
function renderTodo() {
  // Clear render
  todosListEl.innerHTML = '';
  // render it
  todos.forEach((todo, index) => {
    todosListEl.innerHTML += `
    <div class="todo" id="${index}">
    <i class=""></i>
    <i class="bi ${todo.checked ? 'bi-check-circle-fill' : 'bi-circle'} ""
    data-action="check"
    ></i>
    <p class="paragraph ${todo.checked ? 'line' : ''}" data-action="check">${
  todo.value
}</p>
    <i class="bi bi-pencil-square" data-action="edit"></i>
    <i class="bi bi-trash" data-action="delete"></i>
  </div>
    `;
  });
}

// save
function saveTodos() {
  const todoValue = todoInput.value;

  // check if empty
  const isEmpty = todoValue === '';

  // Check for duplicate todos
  const isDuplicate = todos.some(
    (todo) => todo.value.toLowerCase() === todoValue.toLowerCase(),
  );

  if (isEmpty) {
    alert('Todo is empty');
  } else if (isDuplicate) {
    alert('Todo already exist');
  } else {
    if (editTodoId >= 0) {
      todos = todos.map((todo, index) => ({
        ...todo,
        value: index === editTodoId ? todoValue : todo.value,
      }));
      editTodoId = -1;
    } else {
      todos.push({
        value: todoValue,
        checked: false,
      });
    }

    todoInput.value = '';
  }
}

// Check function
function checkTodo(todoId) {
  todos = todos.map((todo, index) => ({
    ...todo,
    checked: index === todoId ? !todo.checked : todo.checked,
  }));
  renderTodo();
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Edit todo
function editTodo(todoId) {
  todoInput.value = todos[todoId].value;
  editTodoId = todoId;
}

// Delete todo
function deleteTodo(todoId) {
  todos = todos.filter((todo, index) => index !== todoId);
  editTodoId = -1;

  // Re-render the todos
  renderTodo();
  localStorage.setItem('todos', JSON.stringify(todos));
}

// submit form
form.addEventListener('submit', (event) => {
  event.preventDefault();

  saveTodos();
  renderTodo();
  localStorage.setItem('todos', JSON.stringify(todos));
});

renderTodo();

// Events
todosListEl.addEventListener('click', (e) => {
  const { target } = e;
  const parentElement = target.parentNode;

  if (parentElement.className !== 'todo') return;

  const todo = parentElement;
  todoId = Number(todo.id);

  // Target action
  const { action } = target.dataset;

  if (action === 'check') checkTodo(todoId);
  if (action === 'edit') editTodo(todoId);
  if (action === 'delete') deleteTodo(todoId);
});

function clearAll() {
  todos = todos.filter((obj) => obj.checked !== true);
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodo();
}

document.querySelector('.clear').addEventListener('click', clearAll);
