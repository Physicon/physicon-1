const initialState = {
    userProfile: {
        userName: '',
        token: '',
    },
    errorMessage: '',
};

export default function authReduser(state = initialState, action){
    switch (action.type) {
        case 'SET_USER':
            return {...state, userProfile:{
                userName: action.payload.userName,
                token: action.payload.token,
                }};
        case 'SET_LOGIN_ERROR':
            return {...state, errorMessage: action.payload};
        default:
            return state;
    }
}