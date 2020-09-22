export function closeFormEdit() {
    return {
        type: 'CLOSE_FORM_EDIT',
    };
}

export function showFormEditContact(id) {
    return {
        type: 'SHOW_FORM_EDIT_CONTACT',
        payload: id,
    }
}


export function showFormNewContact() {
    return {
        type: 'SHOW_FORM_NEW_CONTACT'
    }
}


export  function showPreloader() {
    return {
        type: 'SET_PRELOADER',
        payload: true,
    }
}


export  function hidePreloader() {
    return {
        type: 'SET_PRELOADER',
        payload: false,
    }
}

