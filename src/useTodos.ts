import { useEffect, useReducer, useState } from 'react'
import { client } from './client'
import { Todo } from './todos'

const initialState = { loading: false, todos: [], error: '' }

const reducer = (state, action) => {
  switch (action.type) {
    case 'fetch':
      return { ...state, loading: true }
    case 'successful fetch':
      return { ...state, loading: false, todos: action.todos }
    case 'successful create':
      return {
        ...state,
        loading: false,
        todos: state.todos.concat(action.todo),
      }
    case 'failure':
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}

export const useTodos = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchTodos = async () => {
    await client
      .get('/todos')
      .then(res => {
        dispatch({ type: 'successful fetch', todos: res.data })
      })
      .catch(error => {
        dispatch({ type: 'failure', error: error.message })
      })
  }

  const createTodo = async (title: string) => {
    dispatch({ type: 'fetch' })
    await client
      .post('/todos', { title: title })
      .then(res => {
        dispatch({ type: 'successful create', todo: res.data })
      })
      .catch(error => {
        dispatch({ type: 'failure', error: error.message })
      })
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return {
    todos: state.todos,
    error: state.error,
    loading: state.loading && !state.todos && !state.error,
    createTodo,
  }
}
