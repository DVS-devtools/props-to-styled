/**
 * @memberof PropsToStyled
 * @function ellipsis
 * @description Return the message + ' world'
 * @param {Object} props properties of styled components
 * @param {String} [options.message=''] message to show
 * @returns {String} Your message + ' world'

 *
 * @example
 * // Initialize PropsToStyled
 *  var foo = PropsToStyled.init({
 *      message: 'hello'
 *  });
 *  console.log(foo);
 */

import PropTypes from 'prop-types';

export default props => (props.ellipsis ? `
        overflow: 'hidden';
        textOverflow: 'ellipsis';
        whiteSpace: 'nowrap';
        wordWrap: 'normal';
    ` : null);

export const ellipsisPropTypes = {
    ellipsis: PropTypes.bool
};