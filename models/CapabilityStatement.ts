import Meta from './Meta';
import Element from './Element';
import Narrative from './Narrative';
import Extension from './Extension';
import ContactDetail from './ContactDetail';
import UsageContext from './UsageContext';
import CodeableConcept from './CodeableConcept';
import CapabilityStatement_Software from './CapabilityStatement_Software';
import CapabilityStatement_Implementation from './CapabilityStatement_Implementation';
import CapabilityStatement_Rest from './CapabilityStatement_Rest';
import CapabilityStatement_Messaging from './CapabilityStatement_Messaging';
import CapabilityStatement_Document from './CapabilityStatement_Document';

/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export default class CapabilityStatement {
    /**
     * This is a CapabilityStatement resource
     */
    static readonly resourceType = "CapabilityStatement";

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
     * An absolute URI that is used to identify this capability statement when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this capability statement is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the capability statement is stored on different servers.
     */
    url?: string;

    /**
     * Extensions for url
     */
    _url?: Element;

    /**
     * The identifier that is used to identify this version of the capability statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the capability statement author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;

    /**
     * Extensions for version
     */
    _version?: Element;

    /**
     * A natural language name identifying the capability statement. This name should be usable as an identifier for the module by machine processing applications such as code generation.
     */
    name?: string;

    /**
     * Extensions for name
     */
    _name?: Element;

    /**
     * A short, descriptive, user-friendly title for the capability statement.
     */
    title?: string;

    /**
     * Extensions for title
     */
    _title?: Element;

    /**
     * The status of this capability statement. Enables tracking the life-cycle of the content.
     */
    status?: status;

    /**
     * Extensions for status
     */
    _status?: Element;

    /**
     * A Boolean value to indicate that this capability statement is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
     */
    experimental?: boolean;

    /**
     * Extensions for experimental
     */
    _experimental?: Element;

    /**
     * The date  (and optionally time) when the capability statement was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the capability statement changes.
     */
    date?: string;

    /**
     * Extensions for date
     */
    _date?: Element;

    /**
     * The name of the organization or individual that published the capability statement.
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
     * A free text natural language description of the capability statement from a consumer's perspective. Typically, this is used when the capability statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.
     */
    description?: string;

    /**
     * Extensions for description
     */
    _description?: Element;

    /**
     * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate capability statement instances.
     */
    useContext?: UsageContext | UsageContext[];

    /**
     * A legal or geographic region in which the capability statement is intended to be used.
     */
    jurisdiction?: CodeableConcept | CodeableConcept[];

    /**
     * Explanation of why this capability statement is needed and why it has been designed as it has.
     */
    purpose?: string;

    /**
     * Extensions for purpose
     */
    _purpose?: Element;

    /**
     * A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement.
     */
    copyright?: string;

    /**
     * Extensions for copyright
     */
    _copyright?: Element;

    /**
     * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
     */
    kind?: kind;

    /**
     * Extensions for kind
     */
    _kind?: Element;

    /**
     * Reference to a canonical URL of another CapabilityStatement that this software implements. This capability statement is a published API description that corresponds to a business service. The server may actually implement a subset of the capability statement it claims to implement, so the capability statement must specify the full capability details.
     */
    instantiates?: string | string[];

    /**
     * Reference to a canonical URL of another CapabilityStatement that this software adds to. The capability statement automatically includes everything in the other statement, and it is not duplicated, though the server may repeat the same resources, interactions and operations to add additional details to them.
     */
    imports?: string | string[];

    /**
     * Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
     */
    software?: CapabilityStatement_Software;

    /**
     * Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
     */
    implementation?: CapabilityStatement_Implementation;

    /**
     * The version of the FHIR specification that this CapabilityStatement describes (which SHALL be the same as the FHIR version of the CapabilityStatement itself). There is no default value.
     */
    fhirVersion?: fhirVersion;

    /**
     * Extensions for fhirVersion
     */
    _fhirVersion?: Element;

    /**
     * A list of the formats supported by this implementation using their content types.
     */
    format?: string | string[];

    /**
     * Extensions for format
     */
    _format?: Element | Element[];

    /**
     * A list of the patch formats supported by this implementation using their content types.
     */
    patchFormat?: string | string[];

    /**
     * Extensions for patchFormat
     */
    _patchFormat?: Element | Element[];

    /**
     * A list of implementation guides that the server does (or should) support in their entirety.
     */
    implementationGuide?: string | string[];

    /**
     * A definition of the restful capabilities of the solution, if any.
     */
    rest?: CapabilityStatement_Rest | CapabilityStatement_Rest[];

    /**
     * A description of the messaging capabilities of the solution.
     */
    messaging?: CapabilityStatement_Messaging | CapabilityStatement_Messaging[];

    /**
     * A document definition.
     */
    document?: CapabilityStatement_Document | CapabilityStatement_Document[];


}

/**
 * The status of this capability statement. Enables tracking the life-cycle of the content.
 */
export enum status
{
    "draft",
    "active",
    "retired",
    "unknown"
}


/**
 * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
 */
export enum kind
{
    "instance",
    "capability",
    "requirements"
}


/**
 * The version of the FHIR specification that this CapabilityStatement describes (which SHALL be the same as the FHIR version of the CapabilityStatement itself). There is no default value.
 */
export enum fhirVersion
{

}


