/**
 * @class PropsToStyled
 * @description Description of your library
 */
import ellipsis, { ellipsisPropTypes } from './ellipsis/ellipsis';
import fixed, { fixedPropTypes } from './fixed/fixed';
import float, { floatPropTypes } from './float/float';
import linearGradient, { linearGradientPropTypes } from './linearGradient/linearGradient';
import shape, { shapePropTypes } from './shape/shape';
import swipe, { swipePropTypes } from './swipe/swipe';
import uppercase, { uppercasePropTypes } from './uppercase/uppercase';

export default {
    /**
     * @see modules/ellipsis
     */
    ellipsis,
    ellipsisPropTypes,

    /**
     * @see modules/fixed
     */
    fixed,
    fixedPropTypes,
    /**
     * @see modules/float
     */
    float,
    floatPropTypes,

    /**
     * @see modules/linearGradient
     */
    linearGradient,
    linearGradientPropTypes,

    /**
     * @see modules/shape
     */
    shape,
    shapePropTypes,

    /**
     * @see modules/swipe
     */
    swipe,
    swipePropTypes,

    /**
     * @see modules/uppercase
     */
    uppercase,
    uppercasePropTypes
};
