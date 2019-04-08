class API {
  static baseUrl = "http://localhost:3000"
  static tasksUrl = this.baseUrl + "/tasks"

  static getTasks () {
    return this.get(this.tasksUrl)
  }

  static createTask (text) {
    return this.post(this.tasksUrl, { text: text })
  }

  static get (url) {
    return fetch(url)
      .then(resp => resp.json())
  }

  static post (url, data) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }

    return fetch(url, options)
      .then(resp => resp.json())
  }
}
