import React, { useContext } from 'react'
import UseContext from '../contex/UseContext'

export default function Profile() {
    const {user} = useContext(UseContext)

  return (
    <div>
     <h1>welcome:{user}</h1>
    </div>
  )
}
