import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './login.scss';
import {login} from '../../actions/authentification';
import Button from '../../components/Button/Button';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
        };

    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleClick = (event) =>{
        event.preventDefault();
        this.props.login(this.state);
    };

    render() {
        return (
            <div className={'login'}>
                <form >
                    <fieldset>
                        <legend>Авторизация</legend>
                        {this.props.errorMessage && <p>{this.props.errorMessage}</p>}
                        <input type="text"
                               name="userName"
                               value={this.state.userName}
                               onChange={this.handleChange}
                               placeholder={'UserName'}
                        />
                        <input type="password"
                               name="password"
                               value={this.state.password}
                               onChange={this.handleChange}
                               placeholder={'Password'}
                        />
                        {/*<button onClick={this.handleClick}>Войти</button>*/}
                        <Button textContent={'Войти'} onClick={this.handleClick}/>
                    </fieldset>
                </form>
            </div>
        );
    }
}


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