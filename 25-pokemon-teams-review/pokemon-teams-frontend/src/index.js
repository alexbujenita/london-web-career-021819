const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const mainEl = document.querySelector('main')

// add a single trainer to the page
function addTrainer (trainer) {
	const trainerEl = document.createElement('div')
	trainerEl.dataset.id = trainer.id
	trainerEl.className = "card"

	trainerEl.innerHTML = `
		<p>${trainer.name}</p>
    <button class='add-pokemon' data-trainer-id="${trainer.id}">Add Pokemon</button>
    <ul id="trainer-list-${trainer.id}">
      ${getPokemonHTML(trainer.pokemons)}
    </ul>
	`
  mainEl.appendChild(trainerEl)
  
  const addPokemonBtn = trainerEl.querySelector('.add-pokemon')
  addPokemonBtn.addEventListener('click', () => {
    createPokemon(trainer.id)
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
          addPokemon(data)
        }
      })
  })
}

function getPokemonHTML (pokemons) {
  return pokemons.map(pokemon => `
    <li id="pokemon-${pokemon.id}">
      ${pokemon.nickname} (${pokemon.species})
      <button class="release" data-pokemon-id="${pokemon.id}">Release</button>
    </li>
  `).join('')
}

// add multiple trainers to the page
function addTrainers (trainers) {
  trainers.forEach(addTrainer)
}

// add a single pokemon to a trainer
function addPokemon (pokemon) {
	const trainerUl = document.querySelector(`#trainer-list-${pokemon.trainer_id}`)
  const pokemonEl = document.createElement('li')
  pokemonEl.id = `pokemon-${pokemon.id}`
	pokemonEl.innerHTML = `
       ${pokemon.nickname} (${pokemon.species})
       <button class="release" data-pokemon-id="${pokemon.id}">Release</button>
    `
	trainerUl.appendChild(pokemonEl)
}

// SERVER STUFF

// get trainers from the server
function getTrainers () {
  return fetch(TRAINERS_URL)
    .then(resp => resp.json())
}

// create a pokemon on the server
function createPokemon (trainerId) {
	return fetch(POKEMONS_URL, {
		method: 'POST',
		headers: {
 	 		'Content-Type': 'application/json'
		},
		body: JSON.stringify({
 			"trainer_id": trainerId
		})
  }).then(resp => resp.json())
}

// delete a pokemon from the server
function releasePokemon (pokemonId) {
	return fetch(`${POKEMONS_URL}/${pokemonId}`, {
		method: 'DELETE'
	}).then(resp => resp.json())
}

function addGlobalListenerToRemovePokemon () {
  document.addEventListener('click', event => {
    if (event.target.className !== 'release') return

    const id = event.target.dataset.pokemonId

    releasePokemon(id)
      .then(() => {
        const pokemonLi = document.querySelector(`#pokemon-${id}`)
        pokemonLi.remove()
      })
    
  })
}

function init () {
  addGlobalListenerToRemovePokemon()
  getTrainers()
  .then(addTrainers)
  // (trainers => addTrainers(trainers))([{}, {}])
  // addTrainers([{}, {}])
}

init()


