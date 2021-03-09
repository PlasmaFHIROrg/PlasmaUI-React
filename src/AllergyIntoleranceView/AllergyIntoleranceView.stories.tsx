import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { AllergyIntoleranceView, IAllergyIntoleranceViewProps } from './AllergyIntoleranceView';

import AllergyIntoleranceData from './../_mocks/AllergyIntolerance-example.json';

export default {
  title: 'FHIR/AllergyIntoleranceView',
  component: AllergyIntoleranceView,
} as Meta;

const Template: Story<IAllergyIntoleranceViewProps> = (args) => <AllergyIntoleranceView {...args} />;

export const Example1 = Template.bind({});
Example1.args = { allergyIntolerance: AllergyIntolerance as any };
