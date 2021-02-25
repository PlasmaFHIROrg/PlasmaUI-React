import Meta from './Meta';
import Element from './Element';
import Narrative from './Narrative';
import Extension from './Extension';
import Identifier from './Identifier';
import CodeableConcept from './CodeableConcept';
import Reference from './Reference';
import Annotation from './Annotation';
import Dosage from './Dosage';
import MedicationRequest_DispenseRequest from './MedicationRequest_DispenseRequest';
import MedicationRequest_Substitution from './MedicationRequest_Substitution';

/**
 * An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 */
export default class MedicationRequest {
    /**
     * This is a MedicationRequest resource
     */
    static readonly resourceType = "MedicationRequest";

    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
     */
    id?: string;

    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
     */
    meta?: Meta;

    /**
     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;

    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;

    /**
     * The base language in which the resource is written.
     */
    language?: string;

    /**
     * Extensions for language
     */
    _language?: Element;

    /**
     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;

    /**
     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
     */
    contained?: any | any[];

    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Extension | Extension[];

    /**
     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension | Extension[];

    /**
     * Identifiers associated with this medication request that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: Identifier | Identifier[];

    /**
     * A code specifying the current state of the order.  Generally, this will be active or completed state.
     */
    status?: string;

    /**
     * Extensions for status
     */
    _status?: Element;

    /**
     * Captures the reason for the current state of the MedicationRequest.
     */
    statusReason?: CodeableConcept;

    /**
     * Whether the request is a proposal, plan, or an original order.
     */
    intent?: string;

    /**
     * Extensions for intent
     */
    _intent?: Element;

    /**
     * Indicates the type of medication request (for example, where the medication is expected to be consumed or administered (i.e. inpatient or outpatient)).
     */
    category?: CodeableConcept | CodeableConcept[];

    /**
     * Indicates how quickly the Medication Request should be addressed with respect to other requests.
     */
    priority?: string;

    /**
     * Extensions for priority
     */
    _priority?: Element;

    /**
     * If true indicates that the provider is asking for the medication request not to occur.
     */
    doNotPerform?: boolean;

    /**
     * Extensions for doNotPerform
     */
    _doNotPerform?: Element;

    /**
     * Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
     */
    reportedBoolean?: boolean;

    /**
     * Extensions for reportedBoolean
     */
    _reportedBoolean?: Element;

    /**
     * Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
     */
    reportedReference?: Reference;

    /**
     * Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
     */
    medicationCodeableConcept?: CodeableConcept;

    /**
     * Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
     */
    medicationReference?: Reference;

    /**
     * A link to a resource representing the person or set of individuals to whom the medication will be given.
     */
    subject: Reference;

    /**
     * The Encounter during which this [x] was created or to which the creation of this record is tightly associated.
     */
    encounter?: Reference;

    /**
     * Include additional information (for example, patient height and weight) that supports the ordering of the medication.
     */
    supportingInformation?: Reference | Reference[];

    /**
     * The date (and perhaps time) when the prescription was initially written or authored on.
     */
    authoredOn?: string;

    /**
     * Extensions for authoredOn
     */
    _authoredOn?: Element;

    /**
     * The individual, organization, or device that initiated the request and has responsibility for its activation.
     */
    requester?: Reference;

    /**
     * The specified desired performer of the medication treatment (e.g. the performer of the medication administration).
     */
    performer?: Reference;

    /**
     * Indicates the type of performer of the administration of the medication.
     */
    performerType?: CodeableConcept;

    /**
     * The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order.
     */
    recorder?: Reference;

    /**
     * The reason or the indication for ordering or not ordering the medication.
     */
    reasonCode?: CodeableConcept | CodeableConcept[];

    /**
     * Condition or observation that supports why the medication was ordered.
     */
    reasonReference?: Reference | Reference[];

    /**
     * The URL pointing to a protocol, guideline, orderset, or other definition that is adhered to in whole or in part by this MedicationRequest.
     */
    instantiatesCanonical?: string | string[];

    /**
     * Extensions for instantiatesCanonical
     */
    _instantiatesCanonical?: Element | Element[];

    /**
     * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this MedicationRequest.
     */
    instantiatesUri?: string | string[];

    /**
     * Extensions for instantiatesUri
     */
    _instantiatesUri?: Element | Element[];

    /**
     * A plan or request that is fulfilled in whole or in part by this medication request.
     */
    basedOn?: Reference | Reference[];

    /**
     * A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription.
     */
    groupIdentifier?: Identifier;

    /**
     * The description of the overall patte3rn of the administration of the medication to the patient.
     */
    courseOfTherapyType?: CodeableConcept;

    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.
     */
    insurance?: Reference | Reference[];

    /**
     * Extra information about the prescription that could not be conveyed by the other attributes.
     */
    note?: Annotation | Annotation[];

    /**
     * Indicates how the medication is to be used by the patient.
     */
    dosageInstruction?: Dosage | Dosage[];

    /**
     * Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
     */
    dispenseRequest?: MedicationRequest_DispenseRequest;

    /**
     * Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.
     */
    substitution?: MedicationRequest_Substitution;

    /**
     * A link to a resource representing an earlier order related order or prescription.
     */
    priorPrescription?: Reference;

    /**
     * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc.
     */
    detectedIssue?: Reference | Reference[];

    /**
     * Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource.
     */
    eventHistory?: Reference | Reference[];


}

