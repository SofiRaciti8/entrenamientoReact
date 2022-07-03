import { Card } from "../../Styles/styles"

const MemberCard = ({firstname, lastname, nombreRol}) => (
  <Card>
    <span>
      {firstname} {lastname} {nombreRol}
    </span>
  </Card>
)

export default MemberCard
