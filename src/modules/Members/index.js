import React, {useContext, useEffect, useState} from "react"
import MemberCard from "../../components/MemberCard"
import {CardSection} from "../../Styles/styles"
import {Spinner} from "../../components/Spinner/styles"
import {AppContext} from "../../contexts/AppStore"
import {MembersContent} from "./styles"
import Modal from "../../components/Modal"
import { ButtonN } from "../../Styles/styles"

const Members = ({filterMembers = null}) => {
  const {state} = useContext(AppContext)
  const [members, setMembers] = useState(filterMembers)
  const [modalVisible, setModalVisible] = useState()
  const isMembers = window.location.pathname.includes("/members");  
  

  useEffect(() => {
    !filterMembers ? setMembers(state.members) : setMembers(filterMembers)
    console.log(members)
  }, [filterMembers, state.members])

  const closeModal = () => {
    setModalVisible(false)
  }

  if (!members) return <Spinner />
  return (
    <MembersContent>
      {isMembers && <ButtonN onClick={setModalVisible}>Nuevo</ButtonN>}
      {modalVisible && <Modal close={closeModal} />}
      <CardSection>
        {members &&
          members.map((member, index) => (
            <MemberCard
              firstname={member.firstname}
              lastname={member.lastname}
              //nombreRol={member.role_id}
              key={index}
            />
          ))}
      </CardSection>
    </MembersContent>
  )
}
export default Members
