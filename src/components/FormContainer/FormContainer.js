import React from 'react';
import PropTypes from 'prop-types';
import FormEdit from './FormEdit/FormEdit';


function FormContainer(props) {
    if (!props.visible) return null;
    if (props.formType === 'NEW'){
        return (
            <FormEdit
                sendData={props.addNewContact}
                closeForm={props.closeFormEdit}
                formTitle={'Новый контакт'}
            />
        );


    };

    const contact = props.contacts.find(contact => contact.id === props.editableContactId);
    if (!contact) return null;


    return (
        <FormEdit sendData={props.editContact}
                  closeForm={props.closeFormEdit}
                  formTitle={'Изменить контакт'}
                  contact={contact}
        />
    );
}


FormContainer.propTypes = {
    contacts: PropTypes.array.isRequired,
    visible: PropTypes.bool.isRequired,
    formType: PropTypes.string.isRequired,
    closeFormEdit: PropTypes.func.isRequired,
    addNewContact: PropTypes.func.isRequired,
    editableContactId: PropTypes.string.isRequired,
    editContact: PropTypes.func.isRequired,
};


export default FormContainer;