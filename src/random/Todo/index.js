import React, { Component } from 'react'
import { observer } from 'mobx-react'
import TodoStore from './TodoStore'
import { Form } from 'semantic-ui-react'

const todoStore = new TodoStore()

const TodoView = () => {
  return (
    <div>
      <TodoItem todoStore={todoStore} disabled={false} />
      <TodoList todoStore={todoStore} />
    </div>
  )
}

const TodoList = observer(({ todoStore }) => {
  return (
    <div>
      {_.map(todoStore.todos, todo => (
        <TodoItem key={todo.id} todoStore={todoStore} {...todo} />
      ))}
    </div>
  )
})

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.title || '',
      msg: props.msg || '',
      disabled: _.has(props, 'disabled') ? props.readOnly : true,
      editing: false
    }
  }

  _addToDo = () => {
    const { title, msg } = this.state
    this.props.todoStore.addTodo({
      title,
      msg
    })
  }

  _onChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  _setToAdd = () => {
    this.setState({ disabled: false })
  }

  _editTodo = () => {
    const { id } = this.props
    const { title, msg } = this.state
    this.props.todoStore.editTodo(id, {
      title,
      msg
    })
    this.setState({ disabled: true })
  }

  _removeTodo = () => {
    const { id } = this.props
    this.props.todoStore.removeTodo(id)
  }

  render() {
    const { id } = this.props
    const { title, msg, disabled } = this.state
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Input
              type="text"
              name="title"
              value={title}
              onChange={this._onChange}
              disabled={disabled}
            />
            <Form.Input
              type="text"
              name="msg"
              value={msg}
              onChange={this._onChange}
              disabled={disabled}
            />
            {disabled
              ? <Form.Button type="button" onClick={this._setToAdd} content="Edit" />
              : id
                  ? [
                      <Form.Button
												type="button"
                        key="`submit-${id}`"
                        onClick={this._editTodo}
                        content="Submit"
                      />,
                      <Form.Button
												type="button"
                        key="`Remove-${id}`"
                        onClick={this._removeTodo}
                        content="Remove"
                      />
                    ]
                  : <Form.Button type="button" onClick={this._addToDo} content="Add" />}
          </Form.Group>
        </Form>

      </div>
    )
  }
}

export default TodoView
