import React from "react"

function Todolist({ todos, handleDelete }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={handleDelete}>X</button>
        </li>
      ))}
    </div>
  )
}

export default Todolist
