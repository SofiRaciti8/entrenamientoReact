import React, {createContext, useReducer, useEffect} from "react"
import {storeReducers} from "./Reducers"
import {initial} from "./Initial"
import {fetchProjects, fetchMembers, fetchRoles} from "../api/funciones"

export const AppContext = createContext()

const AppStore = ({children}) => {
  const [state,dispatch] = useReducer(storeReducers, initial)
  const contextValue = {state,dispatch}

  useEffect(() => {
    const getApiData = async () => {
      const projectsPayload = await fetchProjects()
      dispatch({type: "SET_PROJECTS", payload: projectsPayload})
      const membersPayload = await fetchMembers()
      dispatch({type: "SET_MEMBERS", payload: membersPayload})
      const rolesPayload = await fetchRoles()
      dispatch({type: "SET_ROLES", payload: rolesPayload})
    }
    dispatch({type: "START_LOADING"})
    getApiData()
    dispatch({type: "FINISH_LOADING"})
  }, [dispatch])
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export default AppStore
