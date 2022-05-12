import React, {useContext} from "react"
import styled, {css} from "styled-components"
import {Sun, Moon} from "styled-icons/feather" // import Sun and Moon icons
import {ThemeContext} from "../contexts/ThemeStore"

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
`

const icon = css`
  color: black;
  cursor: pointer;
`

const StyledSun = styled(Sun)`
  ${icon}
`

const StyledMoon = styled(Moon)`
  ${icon}
`

const TopBar = () => {
  const {theme, switchTheme} = useContext(ThemeContext)

  return (
    <Container>
      {theme === "dark" ? (
        <StyledSun size={32} onClick={() => switchTheme("light")} />
      ) : (
        <StyledMoon size={32} onClick={() => switchTheme("dark")} />
      )}
    </Container>
  )
}

export default TopBar
