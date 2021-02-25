import React from 'react';
import AllergyIntolerance from './../models/AllergyIntolerance';
import './AllergyIntoleranceView.css';

import { CodeableConceptView } from './CodeableConceptView';

interface Props { allergyIntolerance?: AllergyIntolerance };
const AllergyIntoleranceView: React.FunctionComponent<Props> = (props) => {
    if (!props.allergyIntolerance) { return <div />; }

    return (
        <div className="AllergyIntoleranceView">
            AllergyIntoleranceView<br />
            {props.allergyIntolerance.onsetDateTime}<br />
            {props.allergyIntolerance.substance.text}<br />
            Clinical Status: <CodeableConceptView codeableConcept={props.allergyIntolerance.clinicalStatus} /><br />
        </div>
    );
};

export default AllergyIntoleranceView;