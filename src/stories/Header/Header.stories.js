import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Header from "../../components/Header";

export default {
	title: 'Components/Header',
    component: Header,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
};

const Template = args => <Header {...args} />;

export const ExampleHeader = Template.bind({});