import sha256 from 'crypto-js/sha256';

export function login(loginInfo) {
    const encodeLoginInfo = {
        password: sha256(loginInfo.password).toString(),
        userName: sha256(loginInfo.userName).toString(),
    };
    return dispatch => {
        return fetch('/login', {
            method: 'post',
            body: JSON.stringify(encodeLoginInfo),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        })
            .then(response => response.json())
            .then(data =>{
                if (data.message) {
                    dispatch(setErrorMessage(data.message));
                } else {
                    localStorage.setItem('token', data.token);
                    dispatch(setUser(data));
                }
            })
    };
}


export function checkToken() {
    const token = localStorage.getItem('token');
    if(token){
        return dispatch => {
            return fetch('/user', {
                method: 'get',
                headers: {
                    'Authorization': token,
                },
            })
                .then(responce =>responce.json())
                .then(data => {
                    if (!data.message){
                        localStorage.setItem('token', data.token); //если токен будет менять после каждого входа
                        dispatch(setUser(data));
                    }
                })
        };
    } else {
        return setUser({userName: '', token: ''});
    }
}


export function logout(){
    return dispatch => {
        localStorage.removeItem('token');
        dispatch(setUser({userName: '', token: ''}));
    }
}


function setUser(userProfile) {
    return {
    type: 'SET_USER',
    payload: userProfile,
    }
}


function setErrorMessage(message) {
    return {
        type: 'SET_LOGIN_ERROR',
        payload: message,
    }
}

