import { Outlet } from "react-router-dom"
import { Footer, Header } from "./components"
import UserContextProvider from "./components/contex/UserContexProvider"

function App() {

  return (
    <>
    <UserContextProvider>
<Header/>
<Outlet/>
<Footer />
</UserContextProvider>
    </>
  )
}

export default App
