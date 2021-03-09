import React from 'react';
import { AllergyIntolerance, AllergyIntolerance_Reaction, CodeableConcept } from "fhir-resource-typescript-generator/models";
import './AllergyIntoleranceView.scss';

import { CodeableConceptView } from "./../CodeableConceptView";

export interface IAllergyIntoleranceViewProps { allergyIntolerance?: AllergyIntolerance; }
export const AllergyIntoleranceView: React.FC<IAllergyIntoleranceViewProps> = (props) => {
  if (!props.allergyIntolerance) { return <div />; }
  const { allergyIntolerance } = props;


  // TODO: Make an AllergyIntolerance_Reaction view
  let elReactions = null;
  if (allergyIntolerance.reaction) {
    // Convert to array...
    let reaction = allergyIntolerance.reaction;
    if (!Array.isArray(reaction)) { reaction = [reaction]; }

    // Convert to CodeableConceptView...
    const reactionCodes: CodeableConcept[] = reaction.map((reaction: AllergyIntolerance_Reaction) => { return reaction.substance; });    
    elReactions = reactionCodes.map((reactionCode: CodeableConcept) => {
      return <CodeableConceptView codeableConcept={reactionCode} />
    });
  }
  
  return (
    <div className="AllergyIntoleranceView_container">
        <CodeableConceptView codeableConcept={allergyIntolerance.code} />
        <CodeableConceptView codeableConcept={allergyIntolerance.clinicalStatus} />
        <CodeableConceptView codeableConcept={allergyIntolerance.verificationStatus} />
        <span>{allergyIntolerance.type}</span>, <span>{allergyIntolerance.criticality}</span>
        {elReactions}
    </div>
  );  
};
