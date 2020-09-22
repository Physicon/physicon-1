import React from 'react';
import './style.scss';


function Wrapper(props) {
    return (
        <div className={'wrapper'}>
            {props.children}
        </div>
    );
}


export default Wrapper;