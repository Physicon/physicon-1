import React, {useState} from "react";
import Button from "../Button/Button";
import PropTypes from 'prop-types';
import './style.scss';



function LoginForm(props){
    const [userInfo, setUserInfo] = useState({
        userName: '',
        password: '',
    });

    const onChange = event => {
        setUserInfo({...userInfo, [event.target.name]: event.target.value});
    };

    const onClick = event => {
      event.preventDefault();
      props.sendData(userInfo);
    };

    return (
        <div className={'loginForm'}>
            <form>
                <fieldset>
                    <legend>Авторизация</legend>
                    {props.errorMessage && <p>{props.errorMessage}</p>}
                    <input type="text"
                           name="userName"
                           value={userInfo.userName}
                           onChange={onChange}
                           placeholder={'UserName'}
                    />
                    <input type="password"
                           name="password"
                           value={userInfo.password}
                           onChange={onChange}
                           placeholder={'Password'}
                    />
                    <Button textContent={'Войти'} onClick={onClick}/>
                </fieldset>
            </form>
        </div>
    );
}


LoginForm.propTypes = {
    errorMessage: PropTypes.string,
    sendData: PropTypes.func.isRequired,
};

export default LoginForm;