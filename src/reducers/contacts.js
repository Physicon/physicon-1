const initialState = {
    contacts: [],
    findingString: '',
};

export default function contactsReduser(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CONTACTS':
            return {...state, contacts: [...state.contacts, ...action.payload]};
        case 'CLEAR_CONTACTS':
            return {...state, contacts: []};
        case 'SET_FINDING_STRING':
            return {...state, findingString: action.payload};
        case 'DELETE_CONTACT':
            return {...state, contacts: state.contacts.filter(contact => contact.id !== action.payload)};
        case 'ADD_CONTACT':
            if (state.contacts.find(contact => contact === action.payload.id)) return state;
            return {...state, contacts: [...state.contacts, {...action.payload}]};
        case 'EDIT_CONTACT':
            const newContacts = state.contacts.filter(contact => contact.id !== action.payload.id);
            return {...state, contacts: [...newContacts, action.payload]};
        default:
            return state;
    }
}