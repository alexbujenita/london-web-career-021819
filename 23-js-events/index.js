// get the stuff that we need that's already on the page
const formEl = document.querySelector('#todo-form')
const listEl = document.querySelector('#todo-list')

// add a single todo
function addTodo (text) {
	// 	create LI
	const todoEl = document.createElement('li')
	//  add the text to the LI
	todoEl.innerText = text
	todoEl.className = 'todo'
	//  append LI to list
  listEl.appendChild(todoEl)
}

// listen to form submission
formEl.addEventListener('submit', (event) => {
  event.preventDefault()
  const text = formEl.text.value
  addTodo(text)
  createTodo(text)
  formEl.reset()
})


document.addEventListener('click', (event) => {
  console.log("I'm the document!")
  if (event.target.className === 'todo') {
    event.target.remove()
  }
})

// server stuff
function createTodo (text) {
  fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text })
  })
}