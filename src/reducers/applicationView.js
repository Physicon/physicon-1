const initialState = {
    formEditVisible: false,
    editableContactId: '',
    formEditType: 'NEW',
    preloaderVisible: false,
};

export default function applicationViewReducer(state = initialState, action){
    switch (action.type) {
        case 'CLOSE_FORM_EDIT':
            return {...state, editableContactId: '', formEditType: '', formEditVisible: false};
        case 'SHOW_FORM_EDIT_CONTACT':
            return {...state, editableContactId: action.payload, formEditVisible: true, formEditType: 'EDIT'};
        case 'SHOW_FORM_NEW_CONTACT':
            return {...state, editableContactId: '', formEditVisible: true, formEditType: 'NEW'};
        case 'SET_PRELOADER':
            return {...state, preloaderVisible: action.payload}
        default: return state;
    }
}