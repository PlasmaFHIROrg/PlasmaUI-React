import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { AddressView, IAddressViewProps } from './../components/AddressView';

import PatientData from './../mocks/Patient-example.json';

export default {
  title: 'FHIR/AddressView',
  component: AddressView,
} as Meta;

const Template: Story<IAddressViewProps> = (args) => <AddressView {...args} />;

export const Example1 = Template.bind({});
Example1.args = { address: PatientData.address[0] as any };
