import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CodingView, ICodingViewProps } from './CodingView';

const CodingData = {
  "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  "code": "FTH",
  "display": "father"
};

export default {
  title: 'FHIR/CodingView',
  component: CodingView,
} as Meta;

const Template: Story<ICodingViewProps> = (args) => <CodingView {...args} />;

export const Example1 = Template.bind({});
Example1.args = { coding: CodingData as any };
