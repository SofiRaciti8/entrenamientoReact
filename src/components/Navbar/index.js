import React from "react"
import {useContext} from "react"
import {ThemeContext} from "../../contexts/ThemeStore"
import {StyleNavbar, StyledSun, StyledMoon,StyledTitulo} from "./styles"

const Navbar = () => {
  const {theme, switchTheme} = useContext(ThemeContext)
  return (
    <StyleNavbar>
      {theme === "dark" ? (
        <StyledSun size={32} onClick={() => switchTheme("light")} />
      ) : (
        <StyledMoon size={32} onClick={() => switchTheme("dark")} />
      )}
      <StyledTitulo>Snappler</StyledTitulo>
    </StyleNavbar>
  )
}

export default Navbar
