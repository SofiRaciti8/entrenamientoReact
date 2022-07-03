import React from "react"
import {Link} from "react-router-dom"
import {HeaderSection} from "./styles"

const Header = () => {
  return (
    <HeaderSection>
      <styledLink>
        <Link to="/proyects">Proyectos</Link>
      </styledLink>
      <Link to="/members">Miembros</Link>
      <Link to="/search">Buscar</Link>
    </HeaderSection>
  )
}

export default Header