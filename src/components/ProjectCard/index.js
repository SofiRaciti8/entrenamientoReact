import { Card } from "./styles";

const ProjectCard = ({name, imgSrc}) => (
  <Card>
      <img src={imgSrc} />
      <span>{name}</span>
  </Card>
)

export default ProjectCard;