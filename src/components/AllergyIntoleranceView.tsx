import React from 'react';
import { AllergyIntolerance } from 'fhir-resource-typescript-generator/models';
import './AllergyIntoleranceView.css';

import { CodeableConceptView } from './CodeableConceptView';

interface Props { allergyIntolerance?: AllergyIntolerance };
const AllergyIntoleranceView: React.FunctionComponent<Props> = (props) => {
    if (!props.allergyIntolerance) { return <div />; }

    // {props.allergyIntolerance.substance.text}<br /> // TODO:

    return (
        <div className="AllergyIntoleranceView">
            AllergyIntoleranceView<br />
            {props.allergyIntolerance.onsetDateTime}<br />
            Clinical Status: <CodeableConceptView codeableConcept={props.allergyIntolerance.clinicalStatus} /><br />
        </div>
    );
};

export default AllergyIntoleranceView;