const listEl = document.querySelector('#list')
const showPanelEl = document.querySelector('#show-panel')

const user = {
  id: 1,
  username: "pouros"
}

// SERVER STUFF

// get all the books from the server
function getBooks() {
  return fetch('http://localhost:3000/books')
    .then(resp => resp.json())
}

// update a book on the server
function updateBook(book) {
  return fetch(`http://localhost:3000/books/${book.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book)
  }).then(resp => resp.json())
}

// CLIENT STUFF

// add a single book list item to the page
function addBookListItem(book) {
  const liEl = document.createElement('li')
  liEl.innerText = book.title
  listEl.append(liEl)
  liEl.addEventListener('click', () => showBookInfo(book))
}

// add multiple book list items to the page
function addBookListItems(books) {
  books.forEach(book => addBookListItem(book))
}

// show book info on the page
function showBookInfo(book) {
  showPanelEl.innerHTML = `
   <h2>${book.title}</h2>
   <img src='${book.img_url}' />
   <p>${book.description}</p>
   <ul id='users'>
     ${book.users.map(user => `<li id='user-${user.id}'>${user.username}</li>`).join('')}
   </ul>
   <button id='read-btn'>${userHasntReadBook(book) ? 'Read book' : 'Unread book'}</button>
 `
  const readBtn = showPanelEl.querySelector('#read-btn')
  const usersUl = showPanelEl.querySelector('#users')
  readBtn.addEventListener('click', () => {
    if (userHasntReadBook(book)) {
      const userLi = document.createElement('li')
      userLi.innerText = user.username
      userLi.id = `user-${user.id}`
      usersUl.append(userLi)
      book.users.push(user)
      updateBook(book)
      readBtn.innerText = 'Unread book'
    } else {
      // remove user from the book in memory
      book.users = book.users.filter(bookUser => bookUser.id !== user.id)
      // update the book on the server
      updateBook(book)
      // remove user from the page
      const userLi = usersUl.querySelector(`#user-${user.id}`)
      userLi.remove()
      readBtn.innerText = 'Read book'
    }
  })
}

function userHasntReadBook (book) {
  const foundUser = book.users.find(bookUser => bookUser.id === user.id)
  return foundUser === undefined
}

function init() {
  getBooks()
    .then(addBookListItems)
}

init()
