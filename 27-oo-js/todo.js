class Todo {
	constructor (text) {
		this.text = text
		this.completed = false
		this.create()
		this.render()
	}

	create () {
		this.el = document.createElement('li')
		this.el.innerText = this.text
	}

	render () {
		document.body.prepend(this.el)
	}

	remove () {
		this.el.remove()
	}

	update (text) {
		this.text = text
		this.el.innerText = text
	}
}
