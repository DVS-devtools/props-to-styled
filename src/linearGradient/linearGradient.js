import PropTypes from 'prop-types';
import isArray from 'isarray';

export default (props) => {
    if (props.linearGradient && isArray(props.linearGradient)
    && props.linearGradient.length === 2) {
        const [topValue, bottomValue] = props.linearGradient;
        return `
            background: -webkit-linear-gradient(top, ${topValue} 0%, ${bottomValue} 100%);
            background: linear-gradient(top bottom, ${topValue} 0%, ${bottomValue} 100%);
        `;
    }
    return null;
};

export const linearGradientPropTypes = {
    linearGradient: PropTypes.arrayOf(PropTypes.string)
};