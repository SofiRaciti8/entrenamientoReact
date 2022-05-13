import React, {useContext, useEffect, useState} from "react"
import ProjectCard from "../../components/ProjectCard"
import {CardSection} from "../../components/ProjectCard/styles"
import {Spinner} from "../../components/Spinner/styles"
import {data} from "../../utils/data"
import {AppContext} from "../../contexts/AppStore"

const Proyects = ({filterProjects = null}) => {
  const {state} = useContext(AppContext)
  const [proyects, setProyects] = useState(filterProjects)

  useEffect(() => {
    !filterProjects ? setProyects(state.projects) : setProyects(filterProjects)
  }, [filterProjects, state.projects])

  if (!proyects) return <Spinner />
  return (
    <CardSection>
      {proyects.map((proyect, index) => (
        <ProjectCard name={proyect.name} imgSrc={data[proyect.img]} key={index} />
      ))}
    </CardSection>
  )
}

export default Proyects
