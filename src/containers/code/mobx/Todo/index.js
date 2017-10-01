import React, { Component } from 'react'
import { Provider, inject, observer } from 'mobx-react'
import todoStore from 'mobx-stores/TodoStore'
import { Box, Form, FormField, TextInput, Button } from 'grommet'
import { todoStatus } from 'constants'

const TodoView = () =>
  <Provider todoStore={todoStore}>
    <TodoList />
  </Provider>

const StatusLabel = ({ status }) => {
  let color = 'grey'
  switch (status) {
    case todoStatus.NEW:
      color = 'red'
      break
    case todoStatus.ONGOING:
      color = 'orange'
    case todoStatus.COMPLETED:
      color = 'green'
      break
    default:
      break
  }
  return (
    <Tag className="Todo-label" color={color}>
      {status}
    </Tag>
  )
}

const TodoList = inject('todoStore')(
  observer(({ todoStore }) =>
    <Box align="center" className="Todo-view">
      <TodoItem className="Todo-entry" disabled={false} />{' '}
      {_.map(todoStore.todos, todo => <TodoItem key={todo.id} {...todo} />)}
    </Box>
  )
)

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
      this.props.todoStore.addTodo({ title, msg })
    }

    _onChange = ({ target }) => {
      this.setState({
        [target.name]: target.value
      })
    }

    _setToAdd = () => {
      this.setState({ disabled: false })
    }

    _editTodo = () => {
      const { id } = this.props
      const { title, msg } = this.state
      this.props.todoStore.editTodo(id, { title, msg })
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
        <Form
          pad={{ vertical: 'small' }}
          className={`Todo-item ${className ? className : ''}`}
        >
          {/*{status && <StatusLabel status={status} />}*/}
          <FormField label="Title">
            <TextInput
              type="text"
              name="title"
              value={title}
              onChange={this._onChange}
              disabled={disabled}
            />
          </FormField>
          <FormField label="Message">
            <TextInput
              type="text"
              name="msg"
              value={msg}
              placeholder="Message"
              onChange={this._onChange}
              disabled={disabled}
            />
          </FormField>{' '}
          <Box direction="row" margin={{ top: 'small' }}>
            {disabled
              ? <Button onClick={this._setToAdd} label="Edit" />
              : id
                ? React.Children.toArray([
                    <Button onClick={this._editTodo} label="Submit" />,
                    <Button
                      onClick={this._removeTodo}
                      critical={true}
                      label="Remove"
                    />
                  ])
                : <Button onClick={this._addToDo} label="Add" />}
          </Box>
        </Form>
      )
    }
  }
)

export default TodoView
