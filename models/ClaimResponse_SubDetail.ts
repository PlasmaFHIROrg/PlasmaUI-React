import Extension from './Extension';
import Element from './Element';
import ClaimResponse_Adjudication from './ClaimResponse_Adjudication';

/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export default class ClaimResponse_SubDetail {
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string;

    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Extension | Extension[];

    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension | Extension[];

    /**
     * A number to uniquely reference the claim sub-detail entry.
     */
    subDetailSequence?: number;

    /**
     * Extensions for subDetailSequence
     */
    _subDetailSequence?: Element;

    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number | number[];

    /**
     * Extensions for noteNumber
     */
    _noteNumber?: Element | Element[];

    /**
     * The adjudication results.
     */
    adjudication?: ClaimResponse_Adjudication | ClaimResponse_Adjudication[];


}

