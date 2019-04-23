const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const newToyForm = document.querySelector('.add-toy-form')
const toyCollection = document.querySelector('#toy-collection')
const TOYS_URL = 'http://localhost:3000/toys'
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
function addCard (toy) {
	const toyEl = document.createElement('div')
	toyEl.className = 'card'
	toyEl.innerHTML = `
    	<h2>${toy.name}</h2>
        <img src="${toy.image}" class="toy-avatar" />
        <p class='likes'>${toy.likes} Likes</p>
        <button class="like-btn">Like <3</button>
  `
  
  const likeBtn = toyEl.querySelector('.like-btn')
  const likes = toyEl.querySelector('.likes')

  likeBtn.addEventListener('click', () => {
    likes.innerText = `${++toy.likes} Likes`
    updateToy(toy)
  })

	toyCollection.appendChild(toyEl)
}

// add multiple toys to the page
function addCards (cards) {
	cards.forEach(addCard)
}

// create a toy on form submission
function addToyFormListener () {
  newToyForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const toyData = {
      name: newToyForm.name.value,
      image:newToyForm.image.value,
      likes: 0
    }

    // async function () { await }
    // const func = async () => { await }
    
    const toy = await createToy(toyData)
    addCard(toy)

    newToyForm.reset()
  })
}

// get toys from server
async function getToys () {
  const resp = await fetch(TOYS_URL)
  const toys = await resp.json()
  return toys
}

// create toy on server
async function createToy (toy) {
  const resp = await fetch(TOYS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(toy)
  })
  const toy = await resp.json()
  return toy
}

// update a toy on the server
async function updateToy (toy) {
  const resp = await fetch(TOYS_URL + `/${toy.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(toy)
  })
  const toy = await resp.json()
}

async function initialize () {
  const toys = await getToys()
  addCards(toys)
  
  addToyFormListener()
}

initialize()
