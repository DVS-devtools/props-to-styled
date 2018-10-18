/**
 * @memberof PropsToStyled
 * @function init
 * @description Return the message + ' world'
 * @param {Object} options (see attributes below)
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

export default (options) => {
    const newMessage = `${options.message} world`;
    return newMessage;
};