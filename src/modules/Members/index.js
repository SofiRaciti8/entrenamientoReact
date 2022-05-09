import React, {useEffect, useState} from "react"
import MemberCard from "../../components/MemberCard"
import { CardSection } from "../../components/ProjectCard/styles"
import {Spinner} from "../../components/Spinner/styles"
import {data} from "../../utils/data"


const Members = () => {
  const [members, setMembers] = useState(null)
  
  useEffect(() => {
    setTimeout(() => setMembers(data.members), 1000);
  }, [])

  if (!members) return <Spinner />
  return (
    <CardSection>
      {members.map((member, index) => (
        <MemberCard firstname={member.firstname} lastname={member.lastname} key={index} />
      ))}
    </CardSection>
  )
}

export default Members