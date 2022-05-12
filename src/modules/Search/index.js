import React, {useState, useEffect} from "react"
import Members from "../Members"
import Proyects from "../Proyects"
import {fetchData} from "../../api/funciones"

const Search = () => {
  const [proyects, setProyects] = useState(null)
  const [search, setSearch] = useState("")

  const getProyects = async () => {
    const results = await fetchData()
    setProyects(results)
  }

  useEffect(() => {
    getProyects()
  }, [])

  const findProjects = async (value) => {
    let data = await fetchData()
    let results = data.filter((dato) =>
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
