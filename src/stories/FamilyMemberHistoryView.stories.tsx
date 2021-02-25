import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FamilyMemberHistoryView, IFamilyMemberHistoryViewProps } from './../components/FamilyMemberHistoryView';

import FamilyMemberHistoryData from './../mocks/FamilyMemberHistory-example.json';

export default {
  title: 'FHIR/FamilyMemberHistoryView',
  component: FamilyMemberHistoryView,
} as Meta;

const Template: Story<IFamilyMemberHistoryViewProps> = (args) => <FamilyMemberHistoryView {...args} />;

export const Example1 = Template.bind({});
Example1.args = { familyMemberHistory: FamilyMemberHistoryData as any };
