/**
 * @memberof PropsToStyled
 * @function float
 * @description Float an element to left or right
 * @param {Object} props properties of the component
 * @param {String} [props.float='none'] side where float the component (left, right, none)
 * @returns {String} style to apply to styled component
 *
 * @example
 * <CustomComponent float='left'>
 *    This element will be float to left of the page
 * </CustomComponent>
 *
 * <CustomComponent float='right'>
 *    This element will be float to right of the page
 * </CustomComponent>
 *
 * <CustomComponent float='none'>
 *    This element will be not float
 * </CustomComponent>
 */

import PropTypes from 'prop-types';

export default (props) => {
    switch (props.float) {
    case 'left':
        return 'float: left;';
    case 'right':
        return 'float: right;';
    default:
        return null;
    }
};

export const floatPropTypes = {
    float: PropTypes.oneOf(['left', 'right', 'none'])
};