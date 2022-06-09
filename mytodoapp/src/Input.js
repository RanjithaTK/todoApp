import React, { useState } from "react"
import Todolist from "./Todolist"
function Input() {
  const [value, setValue] = useState("")
  const [todos, setTodo] = useState([])
  function addTodo() {
    let newTodo = [...todos, value]
    setTodo(newTodo)
    setValue("")
  }
  function changeTodo(e) {
    setValue(e.target.value)
  }
  function handleDelete(todo) {
    // console.log("d")
    const newTodo = [...todos]
    const index = newTodo.indexOf(todo)
    newTodo.splice(index, 1)
    setTodo(newTodo)
  }

  return (
    <div>
      <input onChange={changeTodo} value={value} />
      <button onClick={addTodo}>todo</button>
      <Todolist todos={todos} handleDelete={handleDelete} />
    </div>
  )
}
export default Input
