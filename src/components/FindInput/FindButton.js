import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './findinput.scss';
import icon from './search-icon.svg';


function FindButton(props) {
    const [value, setValue] = useState('');

    const handleChange = event =>{
        const value = event.target.value;
        setValue(value);
        if (!value) props.sendString(value);
    };

    const handleClick = () => {
        props.sendString(value);
    };

    return (
        <div className={'findInput'}>
            <div className="findInput__flexContainer">
                <input type="text"
                       value={value}
                       onChange={handleChange}
                />
                <button onClick={handleClick}><img src={icon}
                             alt="find"/>
                </button>
            </div>
        </div>
    );
}


FindButton.propTypes = {
    sendString: PropTypes.func.isRequired,
};


export default FindButton;