/**
 * @memberof PropsToStyled
 * @function linearGradient
 * @description Add linear gradient as background of a component (only two values, top-to-down)
 * @param {Object} props properties of the component
 * @param {Array} [props.linearGradient=[]] two colors for gradient
 * (first is top color, second is bottom color)
 * @returns {String} style to apply to styled component
 *
 * @example
 * <CustomComponent linearGradient={['#000000', '#FFFFFF']}>
 *    This element will have linearGradient from #000000 (top) to #FFFFFF (bottom)
 * </CustomComponent>
 *
 * <CustomComponent linearGradient={[]}>
 *    This element will have not linearGradient
 * </CustomComponent>
 */

import PropTypes from 'prop-types';
import isArray from 'isarray';

export default (props) => {
    if (props.linearGradient && isArray(props.linearGradient)
    && props.linearGradient.length === 2) {
        const [topValue, bottomValue] = props.linearGradient;
        return `
            background: -webkit-linear-gradient(top, ${topValue} 0%, ${bottomValue} 100%);
            background: linear-gradient(top bottom, ${topValue} 0%, ${bottomValue} 100%);
        `;
    }
    return null;
};

export const linearGradientPropTypes = {
    linearGradient: PropTypes.arrayOf(PropTypes.string)
};