import Extension from './Extension';
import Element from './Element';
import Attachment from './Attachment';
import Reference from './Reference';

/**
 * An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.
 */
export default class Communication_Payload {
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
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentString?: string;

    /**
     * Extensions for contentString
     */
    _contentString?: Element;

    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentAttachment?: Attachment;

    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentReference?: Reference;


}

