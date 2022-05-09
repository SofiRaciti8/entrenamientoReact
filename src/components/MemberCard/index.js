import { Card } from "../ProjectCard/styles"

const MemberCard = ({firstname, lastname}) => (
  <Card>
    <span>
      {firstname} {lastname}
    </span>
  </Card>
)

export default MemberCard
