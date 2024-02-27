import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { About, Contact, Home, Login, User} from './components/index.js'
import Github from './components/Github/Github.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path='' element={<Home/>}/>
    <Route path='about'element = {<About/>}/>
    <Route path='contact'element = {<Contact/>}/>
    <Route path='login'element = {<Login/>}/>
    <Route path='user/:userid'element = {<User/>}/>
    <Route 
    path='github'element = {<Github/>}/>
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
