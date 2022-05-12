import React, {useEffect, useState} from "react"
import ProjectCard from "../../components/ProjectCard"
import {CardSection} from "../../components/ProjectCard/styles"
import {fetchData} from "../../api/funciones"
import { Spinner } from "../../components/Spinner/styles"
import { data } from "../../utils/data";


const Proyects = ({filterProjects = null}) => {
  const [proyects, setProyects] = useState(filterProjects)

  const getProyects = async () => {
    const results = await fetchData()
    setProyects(results)
  }

  useEffect(() => {
    if (!filterProjects) getProyects()
  }, [])

  useEffect(() => {
    setProyects(filterProjects)
  }, [filterProjects])

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
