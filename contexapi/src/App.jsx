import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContexProvider from './contex/UserContexProvider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContexProvider>
    <Login/>
    <Profile/>
    </UserContexProvider>
  )
}

export default App
