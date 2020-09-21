import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';


function Button(props) {
    return (
        <button className={'button'} onClick={props.onClick}>{props.textContent}</button>
    );
}


Button.propTypes = {
    textContent: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};


export default Button;