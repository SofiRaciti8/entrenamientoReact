import React, {useContext} from "react"
import {ThemeProvider, createGlobalStyle} from "styled-components"
import {ThemeContext} from "./contexts/ThemeStore"

const themes = {
  dark: {
    primary: "#fbfbfb",
    secondary: "#293A5C",
    background: "#5a6d93",
  },
  light: {
    primary: "#293A5C",
    secondary: "#fbfbfb",
    background: "#dedede",
  },
}

const GlobalStyle = createGlobalStyle` * { margin: 0; padding: 0; transition: all 0.5s; } `

const Theme = ({children}) => {
  const {theme} = useContext(ThemeContext) // get the current theme ('light' or 'dark')
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Theme
