import React, { useContext, useState } from 'react'
import UseContext from '../contex/UseContext'

function Login() {
  const [state, setState] = useState("")
    const {setUser} = useContext(UseContext)

const heandleClick = (e) => {
  e. preventDefault()
    setUser(state)
}
  return (
    <div>
    <form action="">
      <input type="text"
       name="name" 
       placeholder="Name"
       value={state}
       onChange={(e) => setState(e.target.value)}
      /><br/>
      <button onClick={(e) => heandleClick(e)}>Submit</button>
    </form>
  </div>
  )
}

export default Login
