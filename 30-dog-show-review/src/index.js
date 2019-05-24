const dogForm = document.querySelector('#dog-form')
const tableEl = document.querySelector('#table-body')


const state = {
  dogs: [],
  selectedDog: null
}

function renderDog (dog) {
	const trEl = document.createElement('tr')
	trEl.innerHTML = `
		<td>${dog.name}</td>
		<td>${dog.breed}</td>
		<td>${dog.sex}</td>
		<td><button class='edit'>Edit</button></td>
  `
  const editBtn = trEl.querySelector('.edit')
  editBtn.addEventListener('click', () => {
    selectDog(dog)
  })

	tableEl.append(trEl)
}

function selectDog (dog) {
  state.selectedDog = dog
  updateForm()
}

function deselectDog() {
  state.selectedDog = null
  dogForm.reset()
}

function renderDogs () {
	tableEl.innerHTML = ''
	state.dogs.forEach(dog => renderDog(dog))
}

function addFormListener () {
  dogForm.addEventListener('submit', event => {
    event.preventDefault()
    if (state.selectedDog) {
      state.selectedDog.name = dogForm.name.value
      state.selectedDog.breed = dogForm.breed.value
      state.selectedDog.sex = dogForm.sex.value
      updateDog(state.selectedDog)
      renderDogs()
      deselectDog()
    } else {
      alert('Please select a dog first.')
    }
  })
}

function init() {
  getDogs()
    .then(dogs => {
      state.dogs = dogs
      renderDogs()
    })
  addFormListener()
}

function updateForm () {
	dogForm.name.value = state.selectedDog.name
	dogForm.breed.value = state.selectedDog.breed
	dogForm.sex.value = state.selectedDog.sex
}

init()
