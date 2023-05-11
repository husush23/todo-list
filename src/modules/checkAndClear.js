const checking = localStorage.getItem('todos');
// const checked1 = JSON.parse(checking);

function clearAllCompleted() {
  let todos = JSON.parse(checking);
  todos = todos.filter((obj) => obj.complete !== true);
  localStorage.setItem('todos', JSON.stringify(todos));
}

export default clearAllCompleted;
