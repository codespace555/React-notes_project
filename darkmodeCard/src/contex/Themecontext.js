import React, { createContext, useContext } from 'react'

export  const Themecontext = createContext({
  themeMode : "light",
  darkTheme : () => {},
  lightTheme: () => {}
}) 
  
export const ThemecontextProvider =  Themecontext.Provider

export default function useTheme() {
return useContext(Themecontext)
}
  


