import React, { useContext } from 'react'
import Quote_Box from './Quote_Box'
import UseContext from '../context/UseContext'

export default function Quotes() {
    const {color} = useContext(UseContext)
  return (
    <>
     <div className="main_container" style={{backgroundColor:`${color}`}}>

<Quote_Box />
</div>
      
    </>
  )
}
