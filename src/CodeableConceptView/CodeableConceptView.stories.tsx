import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CodeableConceptView, ICodeableConceptViewProps } from './CodeableConceptView';

const CodeableConceptData_1 = {
  "coding": [
    {
      "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
      "code": "FTH",
      "display": "father"
    },
    {
      "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
      "code": "DAD",
      "display": "dad"
    },
  ]
};

const CodeableConceptData_2 = {
  "coding": {
      "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
      "code": "FTH",
      "display": "father"
    }
};

export default {
  title: 'FHIR/CodeableConceptView',
  component: CodeableConceptView,
} as Meta;

const Template: Story<ICodeableConceptViewProps> = (args) => <CodeableConceptView {...args} />;

export const CodingArray = Template.bind({});
CodingArray.args = { codeableConcept: CodeableConceptData_1 as any };

export const SingleCoding = Template.bind({});
SingleCoding.args = { codeableConcept: CodeableConceptData_2 as any };