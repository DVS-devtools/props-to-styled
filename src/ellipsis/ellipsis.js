/**
 * @memberof PropsToStyled
 * @function ellipsis
 * @description Truncate string with "..." for one or many rows
 * @param {Object} props properties of the component
 * @param {Boolean} [props.ellipsis=null] number of rows of truncated text (1 if true)
 * @returns {String} style to apply to styled component
 *
 * @example
 * <CustomComponent ellipsis={true}>
 *    This text will be truncated in a row...
 * </CustomComponent>
 *
 * <CustomComponent ellipsis={2}>
 *    This text will be
 *    truncated in 2 rows...
 * </CustomComponent>
 *
 * <CustomComponent ellipsis={false}>
 *    This text will be not truncated
 * </CustomComponent>
 */

import PropTypes from 'prop-types';

export default (props) => {
    if (props.ellipsis) {
        const ellipsisValue = (typeof props.ellipsis === 'number') ? props.ellipsis : 1;
        return `
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: ${ellipsisValue};
            -webkit-box-orient: vertical;
        `;
    }
    return null;
};

export const ellipsisPropTypes = {
    ellipsis: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ])
};