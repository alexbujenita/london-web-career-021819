class Task {
  constructor (task) {
    this.id = task.id
    this.text = task.text
    this.create()
  }

  create () {
    this.el = document.createElement('li')
    this.el.className = "task"
    this.el.innerText = this.text
  }

  remove () {
    this.el.remove()
  }

  updateText (text) {
    this.text = text
    this.el.innerText = text
  }

}