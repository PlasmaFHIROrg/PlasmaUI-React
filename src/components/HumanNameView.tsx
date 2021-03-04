import React from 'react';
import { HumanName } from 'fhir-resource-typescript-generator/models';
import './HumanNameView.css';

export interface IHumanNameViewProps { humanName?: HumanName };
export function HumanNameView(props: IHumanNameViewProps) {
    // Check if data is available...
    if (!props.humanName) { return <div />; }

    return (
        <div className="HumanNameView_container">
            <span className="HumanNameView_formattedName">{formatName(props.humanName)}</span>
        </div>
    );
}

function formatName(name?: HumanName): string {
    // Check if name exists...
    if (!name) { return "Unknown"; }
    
    // Get all name pieces...
    let pieces = [];
    if (name.prefix)    { pieces.push(Array.isArray(name.prefix) ? name.prefix.join(" ") : name.prefix); }
    if (name.given)     { pieces.push(Array.isArray(name.given) ? name.given.join(" ") : name.given); }
    if (name.family)    { pieces.push(Array.isArray(name.family) ? name.family.join(" ") : name.family); }

    // Format all pieces...
    let sName = pieces.join(" ").trim();
    return sName;
}