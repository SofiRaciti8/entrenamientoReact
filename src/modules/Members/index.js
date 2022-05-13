import React, {useEffect, useState} from "react"
import MemberCard from "../../components/MemberCard"
import {CardSection} from "../../components/ProjectCard/styles"
import { Spinner } from "../../components/Spinner/styles"
import { fetchMembers, fetchRoles } from "../../api/funciones"

const Members = () => {
  const [members, setMembers] = useState(null)
  const [roles, setRoles] = useState(null)

  const getMembers = async () => {
    const results = await fetchMembers()
    setMembers(results)
  }

  const getRoles = async () => {
    const resultsRoles = await fetchRoles()
    setRoles(resultsRoles)
    console.log(resultsRoles)
  }

  useEffect(() => {
    getRoles()
    getMembers()
  }, [])

  if (!members || !roles) return <Spinner />
  return (
    <CardSection>
      {members.map((member, index) => (
        <MemberCard
          firstname={member.firstname}
          lastname={member.lastname}
          nombreRol={roles[2].label}
          key={index}
        />
      ))}
    </CardSection>
  )
}

export default Members
