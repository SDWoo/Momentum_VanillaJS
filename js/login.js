const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');
const greetingText = document.querySelector('#greeting h2');

const HIDDEN_CLASS_NAME = 'hidden';
const USER_NAME_KEY = 'username';
const savedUserName = localStorage.getItem('username');

const Message = [
  'Good Morning,',
  'Good afternoon,',
  'Good evening,',
  'Good night,',
];

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASS_NAME);
  localStorage.setItem(USER_NAME_KEY, userName);
  paintGreeting(userName);
}
function paintGreeting(username) {
  const date = new Date();
  const hours = date.getHours();
  const hourText = Message[Math.floor(hours / 6)];
  greetingText.innerText = `${hourText} ${username}`;
  greeting.classList.remove(HIDDEN_CLASS_NAME);
}
if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASS_NAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreeting(savedUserName);
}
