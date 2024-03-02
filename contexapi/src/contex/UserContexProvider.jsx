import React from 'react'
import UseContext from './UseContext'

function UserContexProvider({children}) {
    const [user,setUser] = React.useState(null)
    
    return (
        <UseContext.Provider value={{user,setUser}}> 
        {children}
        </UseContext.Provider>
    )
}

export default UserContexProvider
