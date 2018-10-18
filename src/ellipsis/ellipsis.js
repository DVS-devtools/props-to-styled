/**
 * @memberof PropsToStyled
 * @function ellipsis
 * @description Truncate string with "...", if it fills entire line
 * @param {Object} props properties of the component
 * @param {Boolean} [props.ellipsis=false] enable/disable ellipsis
 * @returns {String} style to apply to styled component
 *
 * @example
 * <CustomComponent ellipsis={true}>
 *    This text will be truncated
 * </CustomComponent>
 *
 * <CustomComponent ellipsis={false}>
 *    This text will be not truncated
 * </CustomComponent>
 */

import PropTypes from 'prop-types';

export default props => (props.ellipsis ? `
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    ` : null);

export const ellipsisPropTypes = {
    ellipsis: PropTypes.bool
};