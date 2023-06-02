import React, { useEffect, useState } from 'react'
import { useTodos } from './useTodos'

export type Todo = {
  id: number
  title: string
}

const TodoItem = ({ todo }) => {
  const { id, title } = todo
  return (
    <div>
      <p>
        {id}.{title}
      </p>
    </div>
  )
}

export const Todos = () => {
  const { loading, todos, error, createTodo } = useTodos()
  console.log('todos', todos)

  const [title, setTitle] = useState('')

  const addTodo = () => {
    createTodo(title)
  }

  const handleOnChange = e => {
    setTitle(e.target.value)
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div className="todo" data-testid="todos">
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input name="title" onChange={handleOnChange} />
        <button type="submit">Add Todo</button>
      </form>
      {todos?.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
