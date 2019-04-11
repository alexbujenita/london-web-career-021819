const DOGS_URL = 'http://localhost:3000/dogs'

function getDogs () {
  return fetch(DOGS_URL)
    .then(resp => resp.json())
}

function updateDog (dog) {
  return fetch(DOGS_URL + `/${dog.id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(dog)
  })
}