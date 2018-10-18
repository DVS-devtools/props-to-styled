/**
 * @memberof PropsToStyled
 * @function shape
 * @description Change shape of the component
 * @param {Object} props properties of the component
 * @param {String} [props.shape='none'] shape of the component (circle, square, none)
 * @returns {String} style to apply to styled component
 *
 * @example
 * <CustomComponent shape='circle'>
 *    This element will have the shape of the circle
 * </CustomComponent>
 *
 * <CustomComponent shape='square'>
 *    This element will have the shape of the square
 * </CustomComponent>
 *
 * <CustomComponent shape='none'>
 *    This element will have not the shape
 * </CustomComponent>
 */

import PropTypes from 'prop-types';

export default (props) => {
    switch (props.shape) {
    case 'circle':
        return 'border-radius: 100%;';
    case 'square':
        return 'border-radius: 0;';
    default:
        return null;
    }
};

export const shapePropTypes = {
    shape: PropTypes.oneOf(['circle', 'square', 'none'])
};