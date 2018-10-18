/**
 * @memberof PropsToStyled
 * @function log
 * @description Log the given message on the console
 * @param {Object} options (see attributes below)
 * @param {String} [options.message=''] message to show
 * @returns void

 *
 * @example
 * // Log PropsToStyled
 *  PropsToStyled.log({
 *      message: 'hello'
 *  });
 */

export default (options) => {
    const newMessage = `${options.message} world`;
    console.log(newMessage); // eslint-disable-line no-console
};