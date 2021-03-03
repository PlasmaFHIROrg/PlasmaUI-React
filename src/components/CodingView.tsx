import React from 'react';
import Coding from 'fhir-resource-typescript-generator/models/Coding';
import './CodingView.css';

export interface ICodingViewProps { coding?: Coding };
export function CodingView(props: ICodingViewProps) {
    // Check if data is available...
    if (!props.coding) { return <div />; }

    return <span className="CodingView_container">{props.coding.display}</span>;
}