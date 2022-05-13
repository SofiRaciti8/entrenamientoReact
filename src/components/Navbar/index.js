import React from "react"
import {useContext} from "react"
import {ThemeContext} from "../../contexts/ThemeStore"
import {StyleNavbar, StyledSun, StyledMoon} from "./styles"

const Navbar = () => {
  const {theme, switchTheme} = useContext(ThemeContext)
  return (
    <StyleNavbar>
      {theme === "dark" ? (
        <StyledSun size={32} onClick={() => switchTheme("light")} />
      ) : (
        <StyledMoon size={32} onClick={() => switchTheme("dark")} />
      )}
      <span>Snappler</span>
    </StyleNavbar>
  )
}

export default Navbar
