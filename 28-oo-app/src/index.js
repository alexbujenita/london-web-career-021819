// get what's already on the page which we will need
const formEl = document.querySelector('#create-task-form')
const inputEl = document.querySelector('#new-task-description')

// listen to form submission
formEl.addEventListener('submit', event => {
	event.preventDefault()

	const text = inputEl.value

	API.createTask(text)
		.then(task => TaskList.addTask(task))

	formEl.reset()
})

document.addEventListener('click', event => {
	if (event.target.className === 'task') {
		event.target.remove()
	}
})

API.getTasks()
	.then(tasks => TaskList.addTasks(tasks))
