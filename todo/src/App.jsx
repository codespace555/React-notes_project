import { useState } from 'react'


import './App.css'

function App() {
  const [todo, setTodo] = useState(["polu"])

  return (
    <>
   <h1>Todo List</h1>
   {todo.map((value) => <li>{value}</li>)}
   <button onClick={() => setTodo([...todo,"todo3"])}>click</button>
    </>
  )
}

export default App
