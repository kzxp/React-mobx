class TodoStore {
  todos = [];

  addTodo = (todo) => {
    this.todos.push(todo)
  }
  editTodo = (index) => {
    delete this.todos[index]
  }
  removeTodo = (index) => {
    delete this.todos[index]
  }

};

export default TodoStore;