// 일단 이 투두를 입력받는다.
// 그리고 이 투두를 배열에 저장한다? 객체에 저장한다?
// 그 해당 객체 ? 배열 ? 을 localStorage에 저장한다.
// 그리고 처음에 해당 localStorage의 밸류를 가져온다.
const todoForm = document.querySelector('.todo');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
let todos = [];

const TODOS_KEY = 'todos';

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}
function deleteToDo(e) {
  const li = e.target.parentElement;

  todos = todos.filter((item) => item.id !== parseInt(li.id));
  saveTodos();
  li.remove();
}
function paintTodo(obj) {
  const li = document.createElement('li');
  li.id = obj.id;
  const span = document.createElement('span');
  span.innerText = obj.text;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);

  li.appendChild(button);
  li.appendChild(span);
  todoList.appendChild(li);
}
function onHandleTodo(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  const newTodoObj = { text: newTodo, id: Date.now() };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}
todoForm.addEventListener('submit', onHandleTodo);
