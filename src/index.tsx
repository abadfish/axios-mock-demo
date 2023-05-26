import ReactDOM from 'react-dom/client'
import React from 'react'
import { useClient } from './useClient'
import './styles.css'

const TodoItem = ({ todo }) => {
	const { id, title } = todo
	return (<div>
			<p>{id}.{title}</p>
	</div>)
}

function App() {

	const { loading, todos, error } = useClient('/api/todos')

	if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

	return (
		<div className="todo" data-testid="todos">
			<h1>Todo List</h1>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
		)
	}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)