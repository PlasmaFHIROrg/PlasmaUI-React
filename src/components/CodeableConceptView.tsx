import React from 'react';
import './CodeableConceptView.css';
import { CodingView } from './CodingView';

import Coding from './../models/CodeableConcept';
import CodeableConcept from './../models/CodeableConcept';

export interface ICodeableConceptViewProps { codeableConcept?: CodeableConcept };
export function CodeableConceptView(props: ICodeableConceptViewProps) {
    // Check if data is available...
    if (!props.codeableConcept) { return <div />; }
    if (!props.codeableConcept.coding) { return <div />; }

    // Convert to array if not an array...
    let coding = props.codeableConcept.coding;
    if (!Array.isArray(coding)) { coding = [coding]; }

    // Get list of CodingViews...
    const elCoding = coding.map((coding: Coding, idx: number) => {
        return (
            <div key={idx} className="CodeableConceptView_codingElementContainer">
                <CodingView coding={coding} />
            </div>
        );
    });
    
    return (
        <div className="CodeableConceptView_container">
            {elCoding}
        </div>
    );
}