/**
 * @memberof PropsToStyled
 * @function fixed
 * @description Fix to top/bottom of the page when user scrolls
 * @param {Object} props properties of the component
 * @param {String} [props.fixed='none'] side where fix the component (top, bottom, none)
 * @returns {String} style to apply to styled component
 *
 * @example
 * <CustomComponent fixed='top'>
 *    This element will be fixed to top of the page
 * </CustomComponent>
 *
 * <CustomComponent fixed='bottom'>
 *    This element will be fixed to bottom of the page
 * </CustomComponent>
 *
 * <CustomComponent fixed='none'>
 *    This element will be not fixed
 * </CustomComponent>
 */

import PropTypes from 'prop-types';

export default (props) => {
    switch (props.fixed) {
    case 'top':
        return 'position: fixed; top: 0; bottom: inherit; left: 0; right: 0;';
    case 'bottom':
        return 'position: fixed; top: inherit; bottom: 0; left: 0; right: 0;';
    default:
        return null;
    }
};

export const fixedPropTypes = {
    fixed: PropTypes.oneOf(['top', 'bottom', 'none'])
};