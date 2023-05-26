import ReactDOM from "react-dom/client"
import React from "react"
import "./styles.css"

function App() {
	return (
		<div>
      <h3>Hello There! What is your name?</h3>
      <input></input>   
      <button onClick={() => alert("Hello")}>Say Hello</button>
		</div>
		)
	}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)