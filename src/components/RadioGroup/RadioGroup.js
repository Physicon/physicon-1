import React, {useState}from 'react';
import PropTypes from 'prop-types';


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
            <div className={'radioGroup__item'}>
                <input type="radio"
                       name={props.uniqueId}
                       id={`${props.uniqueId}_${index}`}
                       checked={item.value === state.selectedValue}
                       key={index.toString()}
                       value={item.value}
                       onChange={handleChange}
                />
                <label for={`${props.uniqueId}_${index}`}>{item.label}</label>
            </div>
        );
    });
    return (
        <div className={'radioGroup'}>
            {radioInputs}
        </div>
    );
}

/*function RadioInput(props){
    return (
        <div className={'radioGroup__item'}>
            <div className={this.props.isChecked ? 'radioGroup__item_checked' : 'radioGroup__item_unchecked'}
                 data-value={this.props.value}>
            </div>
            <label>{props.inputLabel}</label>
        </div>
    );
}*/

/*RadioInput.propTypes = {
    inputLabel: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
};*/


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