import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';
import Button from '../../components/Button/Button';
import FindInput from '../FindInput/FindInput';



function Header(props) {
    return (
        <header>
            <FindInput sendString={props.setFindingString}/>
            <div><Button textContent={'Добавить новый...'} onClick={props.showFormNewContact}/></div>
            <div className={'header__auth'}>
                <p>Личный кабинет: {props.userName}</p>
                <div><Button textContent={'Выйти'} onClick={props.logout}/></div>
            </div>

        </header>
    );
}


Header.propTypes = {
    setFindingString: PropTypes.func.isRequired,
    userName: PropTypes.string.isRequired,
    logout: PropTypes.func.isRequired,
    showFormNewContact: PropTypes.func,
};




export default Header;