import TodoStore from './TodoStore'

const _TodoStore = new TodoStore;
const todoStatus = {
  NEW: 'NEW',
  ONGOING: 'ONGOING',
  COMPLETED: 'COMPLETED'
}

describe('Todo store', () => {

  describe('.todos', () => {
    it('get empty arrays', () => {
      expect(_TodoStore.todos).toEqual([])
    })
  })

  describe('.addTodo', () => {
    it('add new item to todos', () => {
      const todo = {
        title: 'Hello',
        msg: 'World',
        modified: Date.now(),
        status: todoStatus.NEW
      }
      _TodoStore.addTodo(todo)

      expect(_TodoStore.todos).toEqual(expect.arrayContaining([todo]))
    })
  })

  describe('.removeTodo', () => {
    it('remove item in todos', () => {
      _TodoStore.removeTodo(0)
      
      expect(_TodoStore).toEqual(expect.arrayContaining([]))
    })
  })

})