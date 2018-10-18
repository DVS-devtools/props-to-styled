import PropTypes from 'prop-types';

export default (props) => {
    switch (props.fixed) {
    case 'top':
        return 'position: fixed; top: 0; bottom: inherit; left: 0; right: 0;';
    case 'bottom':
        return 'position: fixed; top: inherit; bottom: 0; left: 0; right: 0;';
    default:
        return null;
    }
};

export const fixedPropTypes = {
    fixed: PropTypes.oneOf(['top', 'bottom', 'none'])
};