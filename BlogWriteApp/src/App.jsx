import { useEffect, useState } from "react"
import {useDispatch} from "react-redux"
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from "./components"
import { Audio } from 'react-loader-spinner'
// import { Outlet } from "react-router-dom"

function App() {
 const [loading,setLoading] = useState(true)
 const dispatch = useDispatch()

 useEffect( () =>{
   //check if user is authenticated
   authService.getCurrentUser()
   .then((userData) => {
    if (userData) {
      dispatch(login({userData}))
    }
    else{
      dispatch(logout())
    }
   })
   .finally(() => setLoading(false)) 
 },[])
  return !loading?(
    <>
    <div className="text-5xl flex justify-center flex-wrap min-h-screen bg-slate-700 w-full">
      <div className="block">
<Header />
<main>
  {/* <Outlet/> */}
  <h1>Todo</h1>
</main>
<Footer/>
      </div>
    </div>
    </>
  ):(<>
  
  <div>
    <Audio
  height="80"
  width="80"
  radius="9"
  color=""
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>

</div>
  </>)
   
  
}

export default App
