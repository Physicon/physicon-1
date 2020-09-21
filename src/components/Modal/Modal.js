import React from 'react';
import './modal.scss';


function Modal(props) {
    return (
        <div className={'modal'}>
            {props.children}
        </div>
    );
}

export default Modal;