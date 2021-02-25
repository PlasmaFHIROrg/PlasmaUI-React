import Meta from './Meta';
import Element from './Element';
import Narrative from './Narrative';
import Extension from './Extension';
import Identifier from './Identifier';
import Reference from './Reference';
import CodeableConcept from './CodeableConcept';
import Period from './Period';
import Annotation from './Annotation';
import Task_Restriction from './Task_Restriction';
import Task_Input from './Task_Input';
import Task_Output from './Task_Output';

/**
 * A task to be performed.
 */
export default class Task {
    /**
     * This is a Task resource
     */
    static readonly resourceType = "Task";

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
     * The business identifier for this task.
     */
    identifier?: Identifier | Identifier[];

    /**
     * The URL pointing to a *FHIR*-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
     */
    instantiatesCanonical?: string;

    /**
     * The URL pointing to an *externally* maintained  protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
     */
    instantiatesUri?: string;

    /**
     * Extensions for instantiatesUri
     */
    _instantiatesUri?: Element;

    /**
     * BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a "request" resource such as a ServiceRequest, MedicationRequest, ServiceRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfill.  This latter resource is referenced by FocusOn.  For example, based on a ServiceRequest (= BasedOn), a task is created to fulfill a procedureRequest ( = FocusOn ) to collect a specimen from a patient.
     */
    basedOn?: Reference | Reference[];

    /**
     * An identifier that links together multiple tasks and other requests that were created in the same context.
     */
    groupIdentifier?: Identifier;

    /**
     * Task that this particular task is part of.
     */
    partOf?: Reference | Reference[];

    /**
     * The current status of the task.
     */
    status?: status;

    /**
     * Extensions for status
     */
    _status?: Element;

    /**
     * An explanation as to why this task is held, failed, was refused, etc.
     */
    statusReason?: CodeableConcept;

    /**
     * Contains business-specific nuances of the business state.
     */
    businessStatus?: CodeableConcept;

    /**
     * Indicates the "level" of actionability associated with the Task, i.e. i+R[9]Cs this a proposed task, a planned task, an actionable task, etc.
     */
    intent?: intent;

    /**
     * Extensions for intent
     */
    _intent?: Element;

    /**
     * Indicates how quickly the Task should be addressed with respect to other requests.
     */
    priority?: string;

    /**
     * Extensions for priority
     */
    _priority?: Element;

    /**
     * A name or code (or both) briefly describing what the task involves.
     */
    code?: CodeableConcept;

    /**
     * A free-text description of what is to be performed.
     */
    description?: string;

    /**
     * Extensions for description
     */
    _description?: Element;

    /**
     * The request being actioned or the resource being manipulated by this task.
     */
    focus?: Reference;

    /**
     * The entity who benefits from the performance of the service specified in the task (e.g., the patient).
     */
    for?: Reference;

    /**
     * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.
     */
    encounter?: Reference;

    /**
     * Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end).
     */
    executionPeriod?: Period;

    /**
     * The date and time this task was created.
     */
    authoredOn?: string;

    /**
     * Extensions for authoredOn
     */
    _authoredOn?: Element;

    /**
     * The date and time of last modification to this task.
     */
    lastModified?: string;

    /**
     * Extensions for lastModified
     */
    _lastModified?: Element;

    /**
     * The creator of the task.
     */
    requester?: Reference;

    /**
     * The kind of participant that should perform the task.
     */
    performerType?: CodeableConcept | CodeableConcept[];

    /**
     * Individual organization or Device currently responsible for task execution.
     */
    owner?: Reference;

    /**
     * Principal physical location where the this task is performed.
     */
    location?: Reference;

    /**
     * A description or code indicating why this task needs to be performed.
     */
    reasonCode?: CodeableConcept;

    /**
     * A resource reference indicating why this task needs to be performed.
     */
    reasonReference?: Reference;

    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Task.
     */
    insurance?: Reference | Reference[];

    /**
     * Free-text information captured about the task as it progresses.
     */
    note?: Annotation | Annotation[];

    /**
     * Links to Provenance records for past versions of this Task that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the task.
     */
    relevantHistory?: Reference | Reference[];

    /**
     * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
     */
    restriction?: Task_Restriction;

    /**
     * Additional information that may be needed in the execution of the task.
     */
    input?: Task_Input | Task_Input[];

    /**
     * Outputs produced by the Task.
     */
    output?: Task_Output | Task_Output[];


}

/**
 * The current status of the task.
 */
export enum status
{
    "draft",
    "requested",
    "received",
    "accepted",
    "rejected",
    "ready",
    "cancelled",
    "failed",
    "completed"
}


/**
 * Indicates the "level" of actionability associated with the Task, i.e. i+R[9]Cs this a proposed task, a planned task, an actionable task, etc.
 */
export enum intent
{
    "unknown",
    "proposal",
    "plan",
    "order",
    "option"
}


