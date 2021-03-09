import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FamilyMemberHistoryView, IFamilyMemberHistoryViewProps } from './FamilyMemberHistoryView';

import FamilyMemberHistoryData from './../_mocks/FamilyMemberHistory-example.json';

export default {
  title: 'FHIR/FamilyMemberHistoryView',
  component: FamilyMemberHistoryView,
} as Meta;

const Template: Story<IFamilyMemberHistoryViewProps> = (args) => <FamilyMemberHistoryView {...args} />;

export const Example1 = Template.bind({});
Example1.args = { familyMemberHistory: FamilyMemberHistoryData as any };
