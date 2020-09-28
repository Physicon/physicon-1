import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';


function Button(props) {
    return (
        <button className={'button'} onClick={props.onClick}>{props.textContent}</button>
    );
}


Button.propTypes = {
    textContent: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};


export default Button;