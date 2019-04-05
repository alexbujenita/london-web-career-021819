// get the stuff we want that's already on the page
const addToyForm = document.querySelector('#add-toy-form')
const toyCollection = document.querySelector('#toy-collection')

const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})

// add a single toy to the page
function renderToy (toy) {
	const toyDiv = document.createElement('div')
  toyDiv.className = 'card'
  toyDiv.id = `toy-${toy.id}`
	toyDiv.innerHTML = `
    	<h2>${toy.name}</h2>
    	<img src="${toy.image}" class="toy-avatar" />
    	<p class='likes'>${toy.likes} Likes </p>
    	<button class="like-btn">Like <3</button>
	`
  toyCollection.appendChild(toyDiv)
  increaseToylikesListener(toy, toyDiv)
}

// increase toy likes
function increaseToylikesListener (toy, toyDiv) {
  const likeBtn = toyDiv.querySelector('.like-btn')
  const likeEl = toyDiv.querySelector('.likes')
  likeBtn.addEventListener('click', () => {
    toy.likes++

    updateToy(toy)
      .then(() => {
        likeEl.innerText = `${toy.likes} Likes`
      })
      .catch(() => {
        toy.likes--
        alert('Server down. Please try again later.')
      })
  })
}

// add multiple toys to the page
function renderToys (toys) {
	toys.forEach(renderToy)
}

// increase likes on the page


getToys()
  .then(renderToys)
