import React, { useState } from 'react'
import UseContext from './UseContext'

function UseContextProvider({children}) {
    const [quote , setQuote] = useState("")
    const [author , setAuthor] = useState("")
    const [color , setColor ]= useState("")


  return (
    <UseContext.Provider value={{quote,setQuote,author, setAuthor,color , setColor}}>
        {children}
    </UseContext.Provider>
  )
}

export default UseContextProvider
