import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';


function Select(props) {
    const onChange = event => {
        props.sendData(event.target.value);
    };

    const options = props.items.map(item =>(
        <option value={item.value} key={item.value}>{item.option}</option>
    ));

    return (
        <select className={'select'} onChange={onChange} value={props.value}>
            {options}
        </select>
    );
}


Select.defaultProps ={
    items: [],
};


Select.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        option: PropTypes.string,
        value: PropTypes.string,
    })),
    sendData: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};


export default Select;