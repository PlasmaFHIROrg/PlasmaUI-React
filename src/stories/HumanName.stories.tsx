import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HumanNameView, IHumanNameViewProps } from './../components/HumanNameView';

import PatientData from './../mocks/Patient-example.json';

export default {
  title: 'FHIR/HumanNameView',
  component: HumanNameView,
} as Meta;

const Template: Story<IHumanNameViewProps> = (args) => <HumanNameView {...args} />;

export const Example1 = Template.bind({});
Example1.args = { humanName: PatientData.name[0] as any };
