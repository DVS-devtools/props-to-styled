/**
 * @memberof PropsToStyled
 * @function uppercase
 * @description Apply uppercase to a string
 * @param {Object} props properties of the component
 * @param {Boolean} [props.uppercase=false] make text uppercase or not
 * @returns {String} style to apply to styled component
 *
 * @example
 * <CustomComponent uppercase={true}>
 *    This text will be uppercase
 * </CustomComponent>
 *
 * <CustomComponent uppercase={false}>
 *    This text will be not uppercase
 * </CustomComponent>
 */

import PropTypes from 'prop-types';

export default props => (props.uppercase ? 'text-transform: uppercase' : null);

export const uppercasePropTypes = {
    uppercase: PropTypes.bool
};