import { extendObservable } from 'mobx'
import { todoStatus } from '../constants'
import { guid } from '../utils'

class TodoStore {
  constructor() {
    extendObservable(this, {
      todos: []
    })
  }

  addTodo = ({ title, msg, modified, status }) => {
    this.todos = [
      {
        id: guid(),
        title,
        msg,
        modified: Date.now(),
        status: todoStatus.NEW
      },
      ...this.todos
    ]
  }

  editTodo = (id, { title, msg }) => {
    this.todos = _.map(
      this.todos,
      todo =>
        (todo.id === id
          ? {
              ...todo,
              title,
              msg,
              modified: Date.now(),
              status: todoStatus.EDITED
            }
          : todo)
    )
  }

  removeTodo = id => {
    this.todos = _.reject(this.todos, { id })
  }
}

export default new TodoStore()
