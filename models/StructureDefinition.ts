import Meta from './Meta';
import Element from './Element';
import Narrative from './Narrative';
import Extension from './Extension';
import Identifier from './Identifier';
import ContactDetail from './ContactDetail';
import UsageContext from './UsageContext';
import CodeableConcept from './CodeableConcept';
import Coding from './Coding';
import StructureDefinition_Mapping from './StructureDefinition_Mapping';
import StructureDefinition_Context from './StructureDefinition_Context';
import StructureDefinition_Snapshot from './StructureDefinition_Snapshot';
import StructureDefinition_Differential from './StructureDefinition_Differential';

/**
 * A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.
 */
export default class StructureDefinition {
    /**
     * This is a StructureDefinition resource
     */
    static readonly resourceType = "StructureDefinition";

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
     * An absolute URI that is used to identify this structure definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this structure definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the structure definition is stored on different servers.
     */
    url?: string;

    /**
     * Extensions for url
     */
    _url?: Element;

    /**
     * A formal identifier that is used to identify this structure definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: Identifier | Identifier[];

    /**
     * The identifier that is used to identify this version of the structure definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the structure definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;

    /**
     * Extensions for version
     */
    _version?: Element;

    /**
     * A natural language name identifying the structure definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
     */
    name?: string;

    /**
     * Extensions for name
     */
    _name?: Element;

    /**
     * A short, descriptive, user-friendly title for the structure definition.
     */
    title?: string;

    /**
     * Extensions for title
     */
    _title?: Element;

    /**
     * The status of this structure definition. Enables tracking the life-cycle of the content.
     */
    status?: status;

    /**
     * Extensions for status
     */
    _status?: Element;

    /**
     * A Boolean value to indicate that this structure definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
     */
    experimental?: boolean;

    /**
     * Extensions for experimental
     */
    _experimental?: Element;

    /**
     * The date  (and optionally time) when the structure definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes.
     */
    date?: string;

    /**
     * Extensions for date
     */
    _date?: Element;

    /**
     * The name of the organization or individual that published the structure definition.
     */
    publisher?: string;

    /**
     * Extensions for publisher
     */
    _publisher?: Element;

    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: ContactDetail | ContactDetail[];

    /**
     * A free text natural language description of the structure definition from a consumer's perspective.
     */
    description?: string;

    /**
     * Extensions for description
     */
    _description?: Element;

    /**
     * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate structure definition instances.
     */
    useContext?: UsageContext | UsageContext[];

    /**
     * A legal or geographic region in which the structure definition is intended to be used.
     */
    jurisdiction?: CodeableConcept | CodeableConcept[];

    /**
     * Explanation of why this structure definition is needed and why it has been designed as it has.
     */
    purpose?: string;

    /**
     * Extensions for purpose
     */
    _purpose?: Element;

    /**
     * A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure definition.
     */
    copyright?: string;

    /**
     * Extensions for copyright
     */
    _copyright?: Element;

    /**
     * A set of key words or terms from external terminologies that may be used to assist with indexing and searching of templates nby describing the use of this structure definition, or the content it describes.
     */
    keyword?: Coding | Coding[];

    /**
     * The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 4.0.0. for this version.
     */
    fhirVersion?: fhirVersion;

    /**
     * Extensions for fhirVersion
     */
    _fhirVersion?: Element;

    /**
     * An external specification that the content is mapped to.
     */
    mapping?: StructureDefinition_Mapping | StructureDefinition_Mapping[];

    /**
     * Defines the kind of structure that this definition is describing.
     */
    kind?: kind;

    /**
     * Extensions for kind
     */
    _kind?: Element;

    /**
     * Whether structure this definition describes is abstract or not  - that is, whether the structure is not intended to be instantiated. For Resources and Data types, abstract types will never be exchanged  between systems.
     */
    abstract?: boolean;

    /**
     * Extensions for abstract
     */
    _abstract?: Element;

    /**
     * Identifies the types of resource or data type elements to which the extension can be applied.
     */
    context?: StructureDefinition_Context | StructureDefinition_Context[];

    /**
     * A set of rules as FHIRPath Invariants about when the extension can be used (e.g. co-occurrence variants for the extension). All the rules must be true.
     */
    contextInvariant?: string | string[];

    /**
     * Extensions for contextInvariant
     */
    _contextInvariant?: Element | Element[];

    /**
     * The type this structure describes. If the derivation kind is 'specialization' then this is the master definition for a type, and there is always one of these (a data type, an extension, a resource, including abstract ones). Otherwise the structure definition is a constraint on the stated type (and in this case, the type cannot be an abstract type).  References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. "string" is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models.
     */
    type?: string;

    /**
     * Extensions for type
     */
    _type?: Element;

    /**
     * An absolute URI that is the base structure from which this type is derived, either by specialization or constraint.
     */
    baseDefinition?: string;

    /**
     * How the type relates to the baseDefinition.
     */
    derivation?: derivation;

    /**
     * Extensions for derivation
     */
    _derivation?: Element;

    /**
     * A snapshot view is expressed in a standalone form that can be used and interpreted without considering the base StructureDefinition.
     */
    snapshot?: StructureDefinition_Snapshot;

    /**
     * A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
     */
    differential?: StructureDefinition_Differential;


}

/**
 * The status of this structure definition. Enables tracking the life-cycle of the content.
 */
export enum status
{
    "draft",
    "active",
    "retired",
    "unknown"
}


/**
 * The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 4.0.0. for this version.
 */
export enum fhirVersion
{

}


/**
 * Defines the kind of structure that this definition is describing.
 */
export enum kind
{
    "resource",
    "logical"
}


/**
 * How the type relates to the baseDefinition.
 */
export enum derivation
{
    "specialization",
    "constraint"
}


