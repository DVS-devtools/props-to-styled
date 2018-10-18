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