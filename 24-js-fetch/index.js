/**
 * Data attributes notes (useful for doing PUT/PATCH requests):
 * https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 */

// get the stuff that we need that's already on the page
const formEl = document.querySelector("#todo-form");
const listEl = document.querySelector("#todo-list");

// add a single todo
function addTodo(text) {
  // 	create LI
  const todoEl = document.createElement("li");
  //  add the text to the LI
  todoEl.innerText = text;
  todoEl.className = "todo";
  //  append LI to list
  listEl.appendChild(todoEl);
}

// listen to form submission
formEl.addEventListener("submit", event => {
  event.preventDefault();
  const text = formEl.text.value;
  addTodo(text);
  formEl.reset();
  postTodo(text);
});

document.addEventListener("click", event => {
  if (event.target.className === "todo") {
    event.target.remove();
  }
});

function populateTodos() {
  fetch("http://localhost:3000/todos")
    .then(res => res.json())
    .then(todosData =>
      todosData.forEach(todo => {
        addTodo(todo.content);
      })
    );
  // adds todos to the DOM
}

function postTodo(content) {
  const todo = {
    content: content
  };

  fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
  });
}

// init
document.addEventListener("DOMContentLoaded", populateTodos);
