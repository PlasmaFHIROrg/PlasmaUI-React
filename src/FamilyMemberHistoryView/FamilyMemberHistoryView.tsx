import React from 'react';
import { FamilyMemberHistory, FamilyMemberHistory_Condition, CodeableConcept } from "fhir-resource-typescript-generator/models";
import './FamilyMemberHistoryView.scss';

import { CodeableConceptView } from "./../CodeableConceptView";

export interface IFamilyMemberHistoryViewProps { familyMemberHistory?: FamilyMemberHistory; }
export const FamilyMemberHistoryView: React.FC<IFamilyMemberHistoryViewProps> = (props) => {
  if (!props.familyMemberHistory) { return <div />; }
  const { familyMemberHistory } = props;

  // Relationship...
  let elRelationship = null;
  if (familyMemberHistory.relationship) {
    elRelationship = <CodeableConceptView codeableConcept={familyMemberHistory.relationship} />
  }
  
  // Name...
  let elName = null;
  if (familyMemberHistory.name) {
    elName = <span>{familyMemberHistory.name}</span>
  }

  // Sex...
  let elSex = null;
  if (familyMemberHistory.sex) {
    elSex = <CodeableConceptView codeableConcept={familyMemberHistory.sex}  />
  }

  // TODO: Make a FamilyMemberHistory_ConditionView

  // Conditions...
  let elConditions = null;
  if (familyMemberHistory.condition) {
    // Convert to array...
    let condition = familyMemberHistory.condition;
    if (!Array.isArray(condition)) { condition = [condition]; }

    // Convert to CodeableConceptView...
    const conditionCodes: CodeableConcept[] = condition.map((condition: FamilyMemberHistory_Condition) => { return condition.code; });    
    elConditions = conditionCodes.map((conditionCode: CodeableConcept) => {
      return <CodeableConceptView codeableConcept={conditionCode} />
    });
  }
  
  return (
    <div className="FamilyMemberHistoryView_container">
        {elRelationship} {elName} {elSex}
        <br />
        Conditions: {elConditions}
    </div>
  );  
};
