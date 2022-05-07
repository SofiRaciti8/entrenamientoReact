import React, {useEffect, useState} from "react"
import {Spinner} from "../../components/Spinner/styles"
import {data} from "../../utils/data"

const ProjectCard = ({name, imgSrc}) => (
  <>
    <img src={imgSrc} />
    <li>{name}</li>
  </>
)

const Proyects = () => {
  const [proyects, setProyects] = useState(null)
  
  useEffect(() => {
    setTimeout(() => setProyects(data.projects), 10000);
  }, [])

  if (!proyects) return <Spinner />
  return (
    <ul>
      {proyects.map((proyect, index) => (
        <ProjectCard name={proyect.name} imgSrc={proyect.img} key={index} />
      ))}
    </ul>
  )
}

export default Proyects
