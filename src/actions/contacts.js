import {generateID} from '../lib/utils';
import {showPreloader, hidePreloader} from './applicationView';


export function deleteContactFetch(id) {
    return dispatch => {
        dispatch(showPreloader());
        const token = localStorage.getItem('token');
        fetch('/contacts', {
            method: 'delete',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({id: id})
        })
            .then(responce => {
                if (responce.ok) {
                    dispatch(deleteContact(id));
                } else {
                    dispatch({type: 'NOTHING'});
                }
            })
            .catch(error => {
                console.log(error.message);
                dispatch({type: 'NOTHING'});
            })
            .finally(()=>{
                dispatch(hidePreloader());
            })
    };
}


export function getContacts() {
    return dispatch => {
        dispatch(showPreloader());
        const token = localStorage.getItem('token');
        fetch('/contacts', {
            method: 'get',
            headers: {
                'Authorization': token,
            },
        })
            .then(responce => responce.json())
            .then(data => {
                if (!data.message) {
                    dispatch(addContacts(data));
                } else {
                    dispatch(addContacts([]));
                }
            })
            .catch(error => {
                console.log(error.message);
                dispatch(addContacts([]));
            })
            .finally(() => {
                dispatch(hidePreloader());
            })
    };
};


export function addNewContactFetch(contact) {
    return dispatch => {
        dispatch(showPreloader());
        const token = localStorage.getItem('token');
        contact.id = generateID(contact);
        fetch('/contacts', {
            method: 'post',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(contact),
        })
            .then(responce => {
                if (responce.ok) {
                    dispatch(addNewContact(contact));
                } else {
                    dispatch({type: 'NOTHING'});
                }
            })
            .catch(error => {
                console.log(error.message);
                dispatch({type: 'NOTHING'});
            })
            .finally(() => {
                dispatch(hidePreloader());
            })
    };
}


/**
 * @param {object} contact
 */
export function editContactFetch(contact) {
    return dispatch => {
        dispatch(showPreloader());
        const token = localStorage.getItem('token');
        fetch('/contacts', {
            method: 'put',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(contact),
        })
            .then(responce => {
                if (responce.ok) {
                    dispatch(editContact(contact));
                } else {
                    dispatch({type: 'NOTHING'});
                }
            })
            .catch(error => {
                console.log(error.message);
                dispatch({type: 'NOTHING'});
            })
            .finally(() => {
                dispatch(hidePreloader());
            })
    };
}


/**
 * @param {[object]} contacts
 */
export function addContacts(contacts) {
    return {
        type: 'ADD_CONTACTS',
        payload: contacts,
    };
};


export function clearContacts() {
    return ({
        type: 'CLEAR_CONTACTS',
    });
}


/**
 * @param {String} string
 */
export function setFindingString(string) {
    return ({
        type: 'SET_FINDING_STRING',
        payload: string,
    });
}


/**
 * @param {string} id
 * @returns {{payload: string, type: string}}
 */
function deleteContact(id) {
    return ({
        type: 'DELETE_CONTACT',
        payload: id,
    });
}


/**
 * @param {object} contact
 * @returns {{payload: object, type: string}}
 */
function addNewContact(contact) {
    return {
        type: 'ADD_CONTACT',
        payload: contact,
    };
}


/**
 * @param {object} contact
 * @returns {{payload: object, type: string}}
 */
function editContact(contact) {
    return {
        type: 'EDIT_CONTACT',
        payload: contact,
    }
}


export function setSortBy(sortBy) {
    return {
        type: 'SET_SORT_BY',
        payload: sortBy,
    };
}