import React from 'react';
import { AllergyIntolerance, AllergyIntolerance_Reaction } from "fhir-resource-typescript-generator/models";
import './AllergyIntoleranceView.scss';

export interface IAllergyIntoleranceViewProps { allergyIntolerance?: AllergyIntolerance; }
export const AllergyIntoleranceView: React.FC<IAllergyIntoleranceViewProps> = (props) => {
  if (!props.allergyIntolerance) { return <div />; }
  const { allergyIntolerance } = props;
  
  return (
    <div className="AllergyIntoleranceView_container">
        AllergyIntolerance
    </div>
  );  
};
