import { useState } from 'react'

import './App.css'

function App() {
let [counter, setCounter] = useState(5)

  return (
    <>
   <button onClick={() => counter !== 50? setCounter(counter+1):setCounter(50) }>Add Value {counter}</button>
   <br/><br/>
   <button onClick={() => counter !== 0 ? setCounter(counter-1):setCounter(0)}>Remove Value {counter}</button>

       
    </>
  )
}

export default App
