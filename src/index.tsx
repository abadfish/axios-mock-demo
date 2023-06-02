import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { Todos } from './todos'

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Todos />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
