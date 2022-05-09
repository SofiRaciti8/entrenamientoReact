import React from "react";
import { Link } from "react-router-dom";
import { HeaderSection } from "./styles";

const Header = () => {
return (
    <HeaderSection>
        <Link to="/proyects">Proyectos</Link>
        <Link to="/members">Miembros</Link>
        <Link to="/search">Buscar</Link>
    </HeaderSection>
    )
}

export default Header