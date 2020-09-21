import React from 'react';
import './wrapper.scss';


function Wrapper(props) {
    return (
        <div className={'wrapper'}>
            {props.children}
        </div>
    );
}


export default Wrapper;