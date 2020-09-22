import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../actions/authentification';
import LoginForm from '../../components/LoginForm/LoginForm';



function Login(props){
    return (
        <LoginForm sendData={props.login} errorMessage={props.errorMessage}/>
    );
};


Login.propTypes = {
    errorMessage: PropTypes.string.isRequired,
    login: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
    errorMessage: state.loginInfo.errorMessage,
});


const mapDispatchToProps = dispatch => ({
    login: loginInfo => dispatch(login(loginInfo)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);