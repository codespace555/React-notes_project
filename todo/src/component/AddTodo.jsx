import React, { useState } from 'react'

export default function AddTodo({addTodos}) {
    const [todoText, setTodoText] = useState('')
  return (
    <div>
      <input placeholder='add your next todo....' onChange={(e) => setTodoText(e.target.value)} value={todoText} />
      <button onClick={() => {
        addTodos(todoText)
        setTodoText("")}}>ADD</button>
    </div>
  )
} 
