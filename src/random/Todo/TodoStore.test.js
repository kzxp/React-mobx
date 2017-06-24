import TodoStore from './TodoStore'
import { todoStatus } from './constants'
import { guid } from '../../utils'

const _TodoStore = new TodoStore()

describe('Todo store', () => {
  describe('.todos', () => {
    it('get empty arrays', () => {
      expect(_TodoStore.todos).toEqual(expect.arrayContaining([]))
    })
  })

  describe('.addTodo', () => {
    it('add new item to todos', () => {
      const todo = {
        title: 'Hello',
        msg: 'World'
      }
      _TodoStore.addTodo(todo)

      expect(_TodoStore.todos[0]).toEqual(expect.objectContaining(todo))
    })
  })

  describe('.editTodo', () => {
    it('edit item in todos', () => {
      const todo = _TodoStore.todos[0]
      let editedTodo = {
        ...todo,
        title: 'HAHA',
        status: todoStatus.COMPLETED
      }
      delete editedTodo.modified

      _TodoStore.editTodo(todo.id, editedTodo)

      expect(_TodoStore.todos[0]).toEqual(expect.objectContaining(editedTodo))
    })
  })

  describe('.removeTodo', () => {
    it('remove item in todos', () => {
      const todo = _TodoStore.todos[0]
      _TodoStore.removeTodo(todo.id)

      expect(_TodoStore.todos).toEqual(expect.arrayContaining([]))
    })
  })
})
