// import {todo} from './constants.js';
const todos = JSON.parse(localStorage.getItem('todos'));
// const todos = localStorage.getItem('todos');
export default function setIndex() {
  const todo = todos;
  if (todo) {
    for (let i = 0; i < todos.length; i += 1) {
      todos[i].index = i + 1;
    }
  } else return;

  localStorage.setItem('todos', JSON.stringify(todos));
}
