import React from 'react';
import ProjectCard from "../../components/ProjectCard";

export default {
	title: 'Components/Cards',
	component: ProjectCard
};

const Template = args => <ProjectCard {...args} />;

export const ExampleProjectCard = Template.bind({});