class TaskList {
  static tasks = []
  static listEl = document.querySelector('#tasks')

  static addTask (task) {
    const taskInstance = new Task(task)
    this.listEl.append(taskInstance.el)
    this.tasks.push(taskInstance)
  }

  static addTasks (tasks) {
    tasks.forEach(task => this.addTask(task))
  }

  static removeTask (id) {
    const foundTask = this.tasks.find(task => task.id === id)
    foundTask.remove()
    this.tasks = this.tasks.filter(task => task.id !== id)
  }

}
