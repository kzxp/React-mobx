import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Form, Label } from 'semantic-ui-react'
import { todoStatus } from '../../constants'
import './Todo.css'

const TodoView = inject('todoStore')(
  observer(({ todoStore }) => {
    return (
      <div className="Todo-view">
        <TodoItem className="Todo-entry" disabled={false} />
        {_.map(todoStore.todos, todo => <TodoItem key={todo.id} {...todo} />)}
      </div>
    )
  })
)

const StatusLabel = ({ status }) => {
  let color = 'grey'
  switch (status) {
    case todoStatus.NEW:
      color = 'red'
      break
    case todoStatus.ONGOING:
      color = 'yellow'
    case todoStatus.COMPLETED:
      color = 'green'
      break
    default:
      break
  }
  return (
    <Label
      className="Todo-label"
      color={color}
      size="medium"
      content={status}
    />
  )
}

const TodoItem = inject('todoStore')(
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
      const { id, status, className } = this.props
      const { title, msg, disabled } = this.state
      return (
        <Form className={`Todo-item ${className ? className : ''}`}>
          <Form.Group>
            {status && <StatusLabel status={status} />}
            <Form.Input
              type="text"
              name="title"
              value={title}
              placeholder="Title"
              onChange={this._onChange}
              disabled={disabled}
            />
            <Form.Input
              type="text"
              name="msg"
              value={msg}
              placeholder="Message"
              onChange={this._onChange}
              disabled={disabled}
            />
            {disabled
              ? <Form.Button
                  type="button"
                  onClick={this._setToAdd}
                  content="Edit"
                />
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
                  : <Form.Button
                      type="button"
                      onClick={this._addToDo}
                      content="Add"
                    />}
          </Form.Group>
        </Form>
      )
    }
  }
)

export default TodoView
