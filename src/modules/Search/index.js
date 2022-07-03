import React, {useContext, useState, useEffect} from "react"
import Members from "../Members"
import Proyects from "../Proyects"
import {AppContext} from "../../contexts/AppStore"
import {fetchProjects} from "../../api/funciones"
import {StyledSearch} from "./styles"

const Search = () => {
  const {state} = useContext(AppContext)
  const [proyects, setProyects] = useState(state.projects)
  const [members, setMembers] = useState(state.members)
  const [search, setSearch] = useState("")

  const findMembers = async (value) => {
    let resultsMembers = state.members.filter((dato) =>
      dato.firstname.toLowerCase().includes(value.toLowerCase())
    )
    setMembers(resultsMembers)
  }

  const findProjects = async (value) => {
    let results = state.projects.filter((dato) =>
      dato.name.toLowerCase().includes(value.toLowerCase())
    )
    setProyects(results)
  }

  const searcher = (e) => {
    setSearch(e.target.value)
    findProjects(e.target.value)
    findMembers(e.target.value)
  }

  return (
    <>
      <StyledSearch
        value={search}
        onChange={(event) => searcher(event)}
        type="text"
        placeholder="Search"
      />
      <Proyects filterProjects={proyects} />
      <Members filterMembers={members} />
    </>
  )
}

export default Search
