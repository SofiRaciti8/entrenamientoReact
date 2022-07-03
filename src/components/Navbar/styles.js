import styled from "styled-components"
import {Sun, Moon} from "styled-icons/feather" // import Sun and Moon icons

export const StyleNavbar = styled.nav``

export const StyledSun = styled(Sun)`
  color: black;
  cursor: pointer;
  float: right;
  margin: 1rem;
`

export const StyledMoon = styled(Moon)`
  color: black;
  cursor: pointer;
  float: right;
  margin: 1rem;
`

export const StyledTitulo = styled.span`
  font-size: 2.5rem;
  -webkit-flex-grow: inherit;
  writing-mode: lr;
  font-family: unset;
  font-weight: bolder;
  font-style: unset;
  text-shadow: 1px 1px 1px #ec28bb;
`
