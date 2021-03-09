import React from 'react';
import './CodeableConceptView.scss';
import { CodingView } from './../CodingView';

import { Coding, CodeableConcept } from 'fhir-resource-typescript-generator/models';

export enum CodeableConceptViewDisplayMode {
  normal = "normal",
  inline = "inline"
}

export interface ICodeableConceptViewProps { 
  codeableConcept?: CodeableConcept,
  displayMode?: CodeableConceptViewDisplayMode
};

export function CodeableConceptView(props: ICodeableConceptViewProps) {
    // Default values...
    const displayMode = props.displayMode ?? CodeableConceptViewDisplayMode.normal;

    // Check if data is available...
    if (!props.codeableConcept) { return <div />; }
    if (!props.codeableConcept.coding) { return <div />; }

    // Convert to array if not an array...
    let coding = props.codeableConcept.coding;
    if (!Array.isArray(coding)) { coding = [coding]; }

    // Get list of CodingViews...
    const elCoding = coding.map((coding: Coding, idx: number, array: Coding[]) => {
        // For inline, we separate everything by a comma...
        if (displayMode === CodeableConceptViewDisplayMode.inline) {
          return (
            <div key={idx} style={{ display: "inline" }} className="CodeableConceptView_codingElementContainer">
                <CodingView coding={coding} />
                {idx < array.length - 1 ? <span>, </span> : null}
            </div>
          );
        // For normal, everything is on a new line...
        } else {
          return (
            <div key={idx} className="CodeableConceptView_codingElementContainer">
                <CodingView coding={coding} />
            </div>
          );
        }
    });
    
    return (
        <div className="CodeableConceptView_container">
            {elCoding}
        </div>
    );
}