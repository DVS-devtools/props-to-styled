import PropTypes from 'prop-types';

export default props => (props.uppercase ? 'text-transform: uppercase' : null);

export const uppercasePropTypes = {
    uppercase: PropTypes.bool
};