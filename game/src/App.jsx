// import { useState } from 'react'

import './App.css'
import { useState } from 'react'

function App() {
//  let Count = 0
 const [Count, setCount ] = useState(0)
 function incClicked() {
  setCount(Count+1)
 }
 function decClicked() {
 
   
  setCount(Count- 1)
     
 
 }

  return (
    <>
<div>
  <h1>value of count = {Count} Which is a {(Count % 2 == 0)? "Even" : "Odd"} value</h1>
  <button onClick={incClicked}>inc</button>
  <button onClick={decClicked}>dec</button>
</div>
    </>
  )
}

export default App
