import React, {useEffect, useState} from "react"
import ProjectCard from "../../components/ProjectCard"
import { CardSection } from "../../components/ProjectCard/styles"

import {Spinner} from "../../components/Spinner/styles"
import { data } from "../../utils/data"

const Proyects = ({filterProjects = data.projects}) => {
  const [proyects, setProyects] = useState(null)
  
  useEffect(() => {
    setTimeout(() => setProyects(filterProjects), 1000);
  }, [filterProjects])

  if (!proyects) return <Spinner />
  return (
    <CardSection>
      {proyects.map((proyect, index) => (
        <ProjectCard name={proyect.name} imgSrc={proyect.img} key={index} />
      ))}
    </CardSection>
  )
}

export default Proyects
