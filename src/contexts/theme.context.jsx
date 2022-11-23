import { createContext, useState } from "react"

type ThemeType = {
  theme: string,
}

export const ThemeContext = createContext({
  setCurrentTheme: () => null,
  currentTheme: null,
})

export const ThemeProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
