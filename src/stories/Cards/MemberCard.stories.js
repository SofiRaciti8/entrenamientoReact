import React from 'react';
import MemberCard from '../../components/MemberCard';

export default {
	title: 'Components/Cards',
	component: MemberCard
};

const Template = args => <MemberCard {...args} />;

export const Member = Template.bind({});
Member.args = {
    firstname: 'sofia',
    lastname: 'raciti'
};
