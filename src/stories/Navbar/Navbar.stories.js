import React from 'react';
import Navbar from "../../components/Navbar";

export default {
	title: 'Components/Navbar',
	component: Navbar
};

const Template = args => <Navbar {...args} />;

export const ExampleNavbar = Template.bind({});