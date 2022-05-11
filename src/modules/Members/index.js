import React, {useEffect, useState} from "react"
import MemberCard from "../../components/MemberCard"
import {CardSection} from "../../components/ProjectCard/styles"
import {Spinner} from "../../components/Spinner/styles"

const Members = () => {
  const [members, setMembers] = useState(null)
  const [roles, setRoles] = useState(null)

  useEffect(() => {
    fetchRoles()
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const result = await fetch(
        "https://tswwqpqg6i.execute-api.us-east-1.amazonaws.com/Test/members"
      ).then((result) => result.json())
      setMembers(result)
      return result
    } catch (error) {
      console.error(error)
    }
  }

  const fetchRoles = async () => {
    try {
      const resultRoles = await fetch(
        "https://tswwqpqg6i.execute-api.us-east-1.amazonaws.com/Test/roles"
      ).then((resultRoles) => resultRoles.json())
      setRoles(resultRoles)
      console.log(resultRoles)
      return resultRoles
    } catch (error) {
      console.error(error)
    }
  }

  if (!members) return <Spinner />
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
