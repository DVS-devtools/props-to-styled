/**
 * @memberof PropsToStyled
 * @function swipe
 * @description Make a component swipeable
 * @param {Object} props properties of the component
 * @param {Boolean} [props.swipe=false] make component swipeable or not
 * @returns {String} style to apply to styled component
 *
 * @example
 * <CustomComponent swipe={true}>
 *    This element will be swipeable
 * </CustomComponent>
 *
 * <CustomComponent swipe={false}>
 *    This element will be not swipeable
 * </CustomComponent>
 */

import PropTypes from 'prop-types';

export default (props) => {
    if (props.swipe) {
        return `
            display: flex;
            flex: 1 1 auto;
            max-width:100%;
            overflow:auto;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: none;    
            justify-content:space-between;
            &::-webkit-scrollbar {
                display: none;
                background:transparent;
            }
        `;
    }
    return null;
};

export const swipePropTypes = { swipe: PropTypes.bool };