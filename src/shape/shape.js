import PropTypes from 'prop-types';

export default (props) => {
    switch (props.shape) {
    case 'circle':
        return 'border-radius: 100%;';
    case 'square':
        return 'border-radius: 0;';
    default:
        return null;
    }
};

export const shapePropTypes = {
    shape: PropTypes.oneOf(['circle', 'square', 'none'])
};