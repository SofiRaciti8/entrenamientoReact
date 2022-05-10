import React, {useState} from "react"
import {data} from "../../utils/data"
import Members from "../Members"
import Proyects from "../Proyects"

const Search = () => {
  const [proyects, setProyects] = useState(data.projects)
  const [search, setSearch] = useState("")

  const findProjects = (value) => {
    let results = data.projects.filter((dato) =>
      dato.name.toLowerCase().includes(value.toLowerCase())
    )
    setProyects(results)
    console.log(proyects)
  }

  const searcher = (e) => {
    setSearch(e.target.value)
    findProjects(e.target.value)
  }

  return (
    <>
      <input
        value={search}
        onChange={(event) => searcher(event)}
        type="text"
        placeholder="Search"
      />
      <Proyects filterProjects={proyects} />
    </>
  )
}

export default Search
