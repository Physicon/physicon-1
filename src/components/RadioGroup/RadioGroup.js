import React, {useState}from 'react';
import PropTypes from 'prop-types';
import './style.scss';


function RadioGroup(props) {
    const [state, setState] = useState(
        {
            options: props.items,
            selectedValue: props.defaultValue,
        }
    );

    const handleChange = event =>{
        const value = event.target.value;
        setState({...state, selectedValue: value});
        props.sendData(value);
    };

    const radioInputs = state.options.map((item, index) => {
        return (
            <div className={'radioGroup__item'} key={index.toString()}>
                <label htmlFor={`${props.uniqueId}_${index}`}>{item.label}</label>
                <input type="radio"
                       name={props.uniqueId}
                       id={`${props.uniqueId}_${index}`}
                       checked={item.value === state.selectedValue}
                       value={item.value}
                       onChange={handleChange}
                />
            </div>
        );
    });

    return (
        <div className={'radioGroup'}>
            {radioInputs}
        </div>
    );
}


RadioGroup.propTypes = {
    uniqueId: PropTypes.string.isRequired,
    items:PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
    })),
    defaultValue: PropTypes.string,
    sendData: PropTypes.func.isRequired,
};


export default RadioGroup;