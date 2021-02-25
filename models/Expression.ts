import Extension from './Extension';
import Element from './Element';

/**
 * A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.
 */
export default class Expression {
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string;

    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Extension | Extension[];

    /**
     * A brief, natural language description of the condition that effectively communicates the intended semantics.
     */
    description?: string;

    /**
     * Extensions for description
     */
    _description?: Element;

    /**
     * A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined.
     */
    name?: string;

    /**
     * Extensions for name
     */
    _name?: Element;

    /**
     * The media type of the language for the expression.
     */
    language?: language;

    /**
     * Extensions for language
     */
    _language?: Element;

    /**
     * An expression in the specified language that returns a value.
     */
    expression?: string;

    /**
     * Extensions for expression
     */
    _expression?: Element;

    /**
     * A URI that defines where the expression is found.
     */
    reference?: string;

    /**
     * Extensions for reference
     */
    _reference?: Element;


}

/**
 * The media type of the language for the expression.
 */
export enum language
{

}


