import PropTypes from 'prop-types';

export default (props) => {
    switch (props.float) {
    case 'left':
        return 'float: left;';
    case 'right':
        return 'float: right;';
    default:
        return null;
    }
};

export const floatPropTypes = { 
    float: PropTypes.oneOf(['left', 'right', 'none']) 
};