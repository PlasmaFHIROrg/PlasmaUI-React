import Extension from './Extension';
import Quantity from './Quantity';
import Element from './Element';

/**
 * A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
 */
export default class SampledData {
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string;

    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Extension | Extension[];

    /**
     * The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.
     */
    origin: Quantity;

    /**
     * The length of time between sampling times, measured in milliseconds.
     */
    period?: number;

    /**
     * Extensions for period
     */
    _period?: Element;

    /**
     * A correction factor that is applied to the sampled data points before they are added to the origin.
     */
    factor?: number;

    /**
     * Extensions for factor
     */
    _factor?: Element;

    /**
     * The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).
     */
    lowerLimit?: number;

    /**
     * Extensions for lowerLimit
     */
    _lowerLimit?: Element;

    /**
     * The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).
     */
    upperLimit?: number;

    /**
     * Extensions for upperLimit
     */
    _upperLimit?: Element;

    /**
     * The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.
     */
    dimensions?: number;

    /**
     * Extensions for dimensions
     */
    _dimensions?: Element;

    /**
     * A series of data points which are decimal values separated by a single space (character u20). The special values "E" (error), "L" (below detection limit) and "U" (above detection limit) can also be used in place of a decimal value.
     */
    data?: string;

    /**
     * Extensions for data
     */
    _data?: Element;


}

