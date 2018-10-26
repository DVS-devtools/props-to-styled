/**
 * @memberof PropsToStyled
 * @function filter
 * @description Filter CSS attribute (https://www.w3schools.com/cssref/css3_pr_filter.asp)
 * @param {Object} props properties of the component
 * @param {String} [props.filter=''] value of filter attribute
 * @returns {String} style to apply to styled component
 *
 * @example
 * <CustomComponent filter='drop-shadow(1px 0px 3px rgba(0,0,0,0.3))'>
 *    This element will have custom filter
 * </CustomComponent>
 */

import PropTypes from 'prop-types';

export default (props) => {
    if (props.filter) {
        return `filter: ${props.filter}; -webkit-filter: ${props.filter};`;
    }
    return null;
};

export const filterPropTypes = {
    filter: PropTypes.string
};